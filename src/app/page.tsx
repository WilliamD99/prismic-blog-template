import * as prismic from "@prismicio/client";

import { createClient } from "../prismicio";
import { Bounded } from "../components/Bounded";
import { Article } from "../components/Article";
import Pagination from "../components/Pagination";
import CategorySelector from "../components/TopicSelector";
import { Heading } from "../components/Heading";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

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

interface ProfileProps {
  name: prismic.TitleField;
  description: prismic.RichTextField;
  profilePicture: prismic.ImageField<never>;
}

const Profile = ({ name, description, profilePicture }: ProfileProps) => {
  return (
    <div className="" id="test">
      <div className="flex flex-col lg:flex-row justify-between justify-items-center gap-8">
        {(prismic.isFilled.richText(name) ||
          prismic.isFilled.richText(description)) && (
          <div className="flex flex-col justify-center space-y-7 flex-1">
            {prismic.isFilled.richText(name) && (
              <Heading>
                <PrismicNextLink href="/">
                  <PrismicText field={name} />
                </PrismicNextLink>
              </Heading>
            )}
            {prismic.isFilled.richText(description) && (
              <>
                <p className="font-serif text-lg leading-normal tracking-tight text-gray-600">
                  <PrismicText field={description} />
                </p>
                <span className="line h-1 w-20 bg-black"></span>
              </>
            )}
          </div>
        )}
        <PrismicNextLink
          className="flex-1 flex justify-center"
          href="/"
          tabIndex={-1}
        >
          <div className="relative h-64 w-96 overflow-hidden rounded-md bg-slate-300">
            {prismic.isFilled.image(profilePicture) && (
              <PrismicNextImage
                field={profilePicture}
                fill={true}
                sizes="100vw"
                className="object-cover"
              />
            )}
          </div>
        </PrismicNextLink>
      </div>
    </div>
  );
};

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
  const settings = await client.getSingle("settings");

  return (
    <Bounded size="widest" mbSize="small">
      <div className="mb-16">
        <Profile
          name={settings.data.name}
          description={settings.data.description}
          profilePicture={settings.data.profilePicture}
        />
      </div>

      <div className="grid grid-cols-3">
        <ul className="col-span-3 lg:col-span-2 grid grid-cols-1 gap-5 lg:gap-10 articles">
          <p className="text-2xl font-bold">All posts by date</p>
          {articles.map((article) => (
            <Article key={article.id} article={article} />
          ))}
        </ul>
        <div className="relative hidden lg:block">
          <CategorySelector />
        </div>
      </div>
      <Pagination totalPage={results.total_pages} />
    </Bounded>
  );
}
