import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import * as prismic from "@prismicio/client";

import { getExcerpt } from "../lib/getExcerpt";
import { findFirstImage } from "../lib/findFirstImage";
import { dateFormatter } from "../lib/dateFormatter";

import { Heading } from "./Heading";

// Types
import { ArticleDocument } from "../../prismicio-types";
import Link from "next/link";

const extractNameFromUID = (str: string) => {
  // let nameWithDash = str.split("/topic/")[1];
  let name = str.split("-").join(" ");
  return name;
};

export function Article({ article }: { article: ArticleDocument }) {
  const featuredImage =
    (prismic.isFilled.image(article.data.featuredImage) &&
      article.data.featuredImage) ||
    findFirstImage(article.data.slices);
  const date = prismic.asDate(
    article.data.publishDate || article.first_publication_date
  );
  const excerpt = getExcerpt(article.data.slices);
  let topics = article.data.topics;
  let short_desc = article.data.short_description;
  console.log(topics);
  return (
    <li className="test article w-4/5 rounded-lg py-5 px-8">
      <div className="grid grid-cols-1 gap-3 md:col-span-2 space-y-4">
        <Heading as="h4" size="3xl">
          <PrismicNextLink document={article}>
            <PrismicText field={article.data.title} />
          </PrismicNextLink>
        </Heading>
        <div className="grid grid-cols-2">
          <p className="font-serif text-sm">
            <span className="font-bold">Published:</span>{" "}
            {date ? dateFormatter.format(date) : <></>}
          </p>
          {topics.length > 0 && (
            <div className="font-serif text-sm flex flex-row space-x-1">
              <span className="font-bold">Category:</span>
              {topics.map((topic, index) => (
                <div key={topic.topic?.id}>
                  <Link href={topic.topic.url} className="capitalize">
                    {extractNameFromUID(topic.topic.uid)} {index > 0 && ", "}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
        {short_desc.length > 0 && <p>{short_desc[0].text}</p>}
      </div>
    </li>
  );
}
