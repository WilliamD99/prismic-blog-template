import * as prismic from "@prismicio/client";

import { createClient } from "../prismicio";
import { Layout } from "../components/Layout";
import { Bounded } from "../components/Bounded";
import { Article } from "../components/Article";
import Pagination from "../components/Pagination";

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.name),
  };
}

interface SearchParamsProps {
  searchParams: { page: number, limit: number }
}

export default async function Index({ searchParams }: SearchParamsProps) {
  const client = createClient();
  
  // Pagination Params
  let pageNum = searchParams.page ?? 1
  let pageLimit = searchParams.limit ?? 2 // WIP

  const result = await client.getByType("article", {
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],    
    pageSize: pageLimit,
    page: pageNum
  });
  let articles = result.results
  
  const navigation = await client.getSingle("navigation");
  const settings = await client.getSingle("settings");

  return (
    <Layout
      withHeaderDivider={false}
      navigation={navigation}
      settings={settings}
    >
      <Bounded size="widest">
        <ul className="grid grid-cols-1 gap-16">
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
        <Pagination totalPage={result.total_pages}/>
      </Bounded>
    </Layout>
  );
}
