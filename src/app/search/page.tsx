import React from 'react'
import { createClient } from '@/src/prismicio'
import * as prismic from "@prismicio/client";

import { Layout } from '@/src/components/Layout';
import { Bounded } from '@/src/components/Bounded';
import CategorySelector from '@/src/components/CategorySelector';
import { Article } from '@/src/components/Article';

interface SearchPageProps {
    searchParams: { key: string }
}

export default async function SearchPage({ searchParams } : SearchPageProps) {
    const client = createClient()

    const navigation = await client.getSingle("navigation");
    const settings = await client.getSingle("settings");

    const results = await client.getByType("article", {
        orderings: [
            { field: "my.article.publishDate", direction: "desc" },
            { field: "document.first_publication_date", direction: "desc" },
        ],  
        filters: [
            prismic.filter.fulltext("my.article.title", decodeURIComponent(searchParams.key) ?? ""),
            // prismic.filter.fulltext("my.article.meta_title", searchParams.key),
            // prismic.filter.any("my.article.uid", [searchParams.key]),
        ]
    })

    // console.log(results.results[2].data)
    let articles = results.results

    return (
        <>
            <Layout
                withHeaderDivider={false}
                navigation={navigation}
                settings={settings}
            >
                <Bounded size="widest">
                    <CategorySelector />
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
