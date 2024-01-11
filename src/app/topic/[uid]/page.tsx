import React from 'react'
import { createClient } from '@/src/prismicio';
import * as prismic from "@prismicio/client";

// Component
// import { Bounded } from "../../../components/Bounded"
import { Bounded } from '@/src/components/Bounded';
// import { Article } from '../../../components/Article'
import { Article } from '@/src/components/Article';
import CategorySelector from '@/src/components/TopicSelector';
import capitalizeStr from '../../../lib/capitalizeStr'
import Pagination from '@/src/components/Pagination';
import { notFound } from 'next/navigation';

interface PageProps {
    params: { uid: string },
    searchParams: { page: number, limit: number }
}

export async function generateMetadata({ params } : PageProps) {
    const client = createClient()
    const settings = await client.getSingle("settings")

    const topic = await client.getByUID("topic", params.uid).catch(() => notFound())

    return {
        title: prismic.asText(settings.data.name) + ` - ${capitalizeStr(params.uid)}`,
        description: topic.data.meta_description,
        openGraph: {
            title: topic.data.meta_title,
            images: [
                {
                    url: topic.data.meta_image.url
                }
            ]
        }
    }
}

export default async function TopicPage({ params, searchParams } : PageProps) {
    const client = createClient();

    // Pagination variables
    let pageNum = searchParams.page ?? 1
    let pageLimit = searchParams.limit ?? 2

    let topic, articles: any, articlesInTopic: any, msg: string
    try {
        topic = await client.getByUID("topic", params.uid) // This code throw error if not found, so need to put inside the try/catch block
        articlesInTopic = await client.getByType("article", {
            filters: [prismic.filter.at("my.article.topics.topic", topic.id)],
            pageSize: pageLimit,
            page: pageNum
        })
        articles = articlesInTopic.results.length > 0 ? articlesInTopic.results : []
        msg = articlesInTopic.results.length === 0 ? "No documents found" : ""
    }
    catch (e) {
        articles = []
        msg = "Invalid topic"
    }
    
    return (
        <>
            <Bounded size='widest'>
                <CategorySelector current={params.uid}/>
                <ul className='grid grid-cols-1 gap-16'>
                    {
                        articles.length > 0 ? articles.map((article: any) => (
                            <Article key={article.title} article={article} />
                        ))
                        :
                        <p>{msg}</p>
                    }
                </ul>
                <Pagination totalPage={articlesInTopic?.total_pages}/>
            </Bounded>
        </>
    )
}
