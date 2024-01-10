import React from 'react'
// import { createClient } from '../../../prismicio'
import { createClient } from '@/src/prismicio';
import * as prismic from "@prismicio/client";

// Component
// import { Layout } from '../../../components/Layout'
import { Layout } from '@/src/components/Layout';
// import { Bounded } from "../../../components/Bounded"
import { Bounded } from '@/src/components/Bounded';
// import { Article } from '../../../components/Article'
import { Article } from '@/src/components/Article';
import CategorySelector from '@/src/components/CategorySelector';


export async function generateMetadata() {
    const client = createClient()
    const settings = await client.getSingle("settings")

    return {
        title: prismic.asText(settings.data.name)
    }
}

interface PageProps {
    params: { uid: string }
}

export default async function ArticleByCategoryPage({ params } : PageProps ) {
    const client = createClient();
    
    const result = await client.getAllByType("category", {
        orderings: [
            { field: "my.category.publishDate", direction: "desc" },
            { field: "document.first_publication_date", direction: "desc" },
        ], 
        filters: [
            prismic.filter.at("my.category.uid", params.uid)
        ],
        fetchLinks: [
            "article.title",
            "article.publishDate",
            "article.featuredImage",
            "article.slices",
            "article.meta_title",
            "article.meta_description",
            "article.meta_image",
        ],
    })
    let articles: any
    if (result.length > 0) {
        articles = result[0].data.group
        articles = articles.map((article: any) => article.article)
    } else {
        articles = []
    }

    const navigation = await client.getSingle("navigation");
    const settings = await client.getSingle("settings");

    return (
        <>
            <Layout
                withHeaderDivider={false}
                navigation={navigation}
                settings={settings}
            >
                <Bounded size='widest'>
                    <CategorySelector current={params.uid}/>
                    <ul className='grid grid-cols-1 gap-16'>
                        {
                            articles.length > 0 ? articles.map((article: any) => (
                                <Article key={article.title} article={article} />
                            ))
                            :
                            <p>No documents found</p>
                        }
                    </ul>
                </Bounded>
            </Layout>
        </>
    )
}
