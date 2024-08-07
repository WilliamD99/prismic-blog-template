import * as prismic from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "../../../prismicio";
import { components } from "../../../slices";
import { Bounded } from "../../../components/Bounded";
import { Heading } from "../../../components/Heading";
import { HorizontalDivider } from "../../../components/HorizontalDivider";
import { notFound } from "next/navigation";

// Types
import { ArticleDocument } from "../../../../prismicio-types";
import { findFirstImage } from "@/src/lib/findFirstImage";
import CategorySelector from "@/src/components/TopicSelector";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function LatestArticle({ article }: { article: ArticleDocument }) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  return (
    <li>
      <h1 className="mb-3 text-3xl font-semibold tracking-tighter text-slate-800 md:text-4xl">
        <PrismicNextLink document={article}>
          <PrismicText field={article.data.title} />
        </PrismicNextLink>
      </h1>
      <p className="font-serif italic tracking-tighter text-slate-500">
        {date ? dateFormatter.format(date) : <></>}
      </p>
    </li>
  );
}

interface PageProps {
  params: { uid: string };
}

export async function generateMetadata({ params }: PageProps) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const article = await client
    .getByUID("article", params.uid)
    .catch(() => notFound());

  return {
    title: `${prismic.asText(article.data.title)} | ${prismic.asText(
      settings.data.name
    )}`,
    description: article.data.meta_description,
    openGraph: {
      title: article.data.meta_title,
      images: [
        {
          url: article.data.meta_image.url,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const client = createClient();

  const article = await client
    .getByUID<
      prismic.Content.ArticleDocument & {
        data: {
          author: prismic.Content.AuthorDocument;
        };
      }
    >("article", params.uid)
    .catch(() => notFound());
  const latestArticles = await client.getAllByType("article", {
    limit: 3,
    orderings: [
      { field: "my.article.publishDate", direction: "desc" },
      { field: "document.first_publication_date", direction: "desc" },
    ],
    filters: [prismic.filter.not("document.id", article.id)],
  });
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );

  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);

  const author = article.data.author;
  console.log(author.id);
  console.log(author);

  return (
    <>
      <Bounded size="wide">
        <article>
          <div className="px-4 relative h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="relative flex flex-col justify-center">
              <h1 className="mb-3 text-2xl lg:text-3xl font-semibold tracking-tighter text-slate-800">
                <PrismicText field={article.data.title} />
              </h1>
              <p className="font-serif italic tracking-tighter text-slate-500">
                {dateFormatter.format(date)}
              </p>
            </div>
            <div className="aspect-h-4 aspect-w-6 relative bg-gray-100 rounded-md overflow-hidden">
              {prismic.isFilled.image(featuredImage) && (
                <PrismicNextImage
                  field={featuredImage}
                  fill={true}
                  className="object-cover"
                />
              )}
            </div>
          </div>
          <div className="slice_zone grid grid-cols-3 gap-10">
            <div className="col-span-3 lg:col-span-2 relative">
              <SliceZone slices={article.data.slices} components={components} />
            </div>
            <div className="hidden lg:block py-8 md:py-10 lg:py-12">
              <CategorySelector />
            </div>
          </div>
        </article>
        {latestArticles.length > 0 && (
          <div className="px-4 grid grid-cols-1 justify-items-center gap-16 md:gap-24">
            <HorizontalDivider />
            <div className="w-full">
              <Heading size="2xl" className="mb-10">
                Latest articles
              </Heading>
              <ul className="grid grid-cols-1 gap-12">
                {latestArticles.map((article) => (
                  <LatestArticle key={article.id} article={article} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </Bounded>
    </>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const articles = await client.getAllByType("article");

  return articles.map((article) => {
    return { uid: article.uid };
  });
}
