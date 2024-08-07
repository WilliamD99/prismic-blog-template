"use client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { dateFormatter } from "../lib/dateFormatter";

import { Heading } from "./Heading";

// Types
import { ArticleDocument } from "../../prismicio-types";
import Link from "next/link";

const extractNameFromUID = (str: string) => {
  if (!str) return "";
  // let nameWithDash = str.split("/topic/")[1];
  let name = str.split("-").join(" ");
  return name;
};

export function Article({ article }: { article: ArticleDocument }) {
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  let topics = article.data.topics;
  let short_desc = article.data.short_description;

  return (
    <li className="test article w-full lg:w-4/5 rounded-lg py-6 px-6 lg:py-5 lg:px-8">
      <div className="grid grid-cols-1 gap-3 md:col-span-2 space-y-2 lg:space-y-4">
        <Heading as="h4" size="3xl">
          <PrismicNextLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicNextLink>
        </Heading>
        <div className="grid lg:grid-cols-2 gap-2">
          <p className="font-serif text-sm">
            <span className="font-bold">Published:</span>{" "}
            {date ? dateFormatter.format(date) : <></>}
          </p>
          {topics.length > 0 && (
            <div className="font-serif text-sm flex flex-row space-x-1">
              {topics.map((topic, index) => (
                <>
                  {topic.topic.id && (
                    <>
                      <span className="font-bold">Category:</span>

                      <div key={topic.topic?.id}>
                        <Link
                          href={topic.topic.url ?? "/"}
                          className="capitalize"
                        >
                          {extractNameFromUID(topic.topic.uid)}{" "}
                          {index > 0 && ", "}
                        </Link>
                      </div>
                    </>
                  )}
                </>
              ))}
            </div>
          )}
        </div>
        {short_desc.length > 0 && <p>{short_desc[0]?.text}</p>}
      </div>
    </li>
  );
}
