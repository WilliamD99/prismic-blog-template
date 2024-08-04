import * as prismic from "@prismicio/client";

import { createClient } from "../prismicio";
import { Bounded } from "../components/Bounded";
import { Article } from "../components/Article";
import Pagination from "../components/Pagination";
import CategorySelector from "../components/TopicSelector";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

interface SearchParamsProps {
  searchParams: { page: number; limit: number };
}

export default async function Index({ searchParams }: SearchParamsProps) {
  const client = createClient();

  // Pagination Params
  let pageNum = searchParams.page ?? 1;
  let pageLimit = searchParams.limit ?? 5;

  const results = await client.getByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    pageSize: pageLimit,
    page: pageNum,
  });
  let articles = results.results;
  console.log(articles);
  return (
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
      <Pagination totalPage={results.total_pages} />
    </Bounded>
  );
}
