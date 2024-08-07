import React from "react";
import { createClient } from "@/src/prismicio";
import * as prismic from "@prismicio/client";

import { Bounded } from "@/src/components/Bounded";
import CategorySelector from "@/src/components/TopicSelector";
import { Article } from "@/src/components/Article";

interface SearchPageProps {
  searchParams: { key: string };
}

export const dynamicParams = false;

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title:
      prismic.asText(settings.data.name) +
      ` - Search result for ${searchParams.key}`,
    description: `Search result for ${searchParams.key}`,
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const client = createClient();

  const results = await client.getByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    filters: [
      prismic.filter.fulltext(
        "my.article.title",
        decodeURIComponent(searchParams.key) ?? ""
      ),
      // prismic.filter.fulltext("my.article.meta_title", searchParams.key),
      // prismic.filter.any("my.article.uid", [searchParams.key]),
    ],
  });

  let articles = results.results;

  return (
    <>
      <Bounded size="widest">
        <div className="grid grid-cols-3">
          <ul className="col-span-2 grid grid-cols-1 gap-10 articles">
            <p className="text-2xl font-bold">All posts by date</p>
            {articles.map((article) => (
              <Article key={article.id} article={article} />
            ))}
          </ul>
          <CategorySelector />
        </div>
      </Bounded>
    </>
  );
}
