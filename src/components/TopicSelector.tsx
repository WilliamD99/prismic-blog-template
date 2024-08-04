import React from "react";
import { createClient } from "@/src/prismicio";
import Link from "next/link";
import clsx from "clsx";
import SearchBtn from "./SearchBtn";

export default async function CategorySelector({
  current,
}: {
  current?: string;
}) {
  const client = createClient();

  const categories = await client.getAllByType("topic", {
    graphQuery: `
            {
                category {
                    name
                }
            }
        `,
  });

  return (
    <>
      <div className="flex flex-col space-y-4">
        <p className="text-2xl font-bold">Browse Topics</p>
        <div className="flex flex-col space-y-2 border-l-2 border-gray-300 pl-5">
          {categories.map((category) => (
            <Link
              href={`/topic/${category.uid}`}
              key={category.uid}
              className={clsx(
                current === category.uid && "font-bold pointer-events-none",
                "hover:underline"
              )}
            >
              {category.data.name}
            </Link>
          ))}
        </div>
        <SearchBtn />
      </div>
    </>
  );
}
