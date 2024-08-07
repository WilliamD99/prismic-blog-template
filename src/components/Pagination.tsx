"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface PaginationProps {
  totalPage: number;
}

export default function Pagination({ totalPage }: PaginationProps) {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  let pageNum: any = searchParams.get("page") ?? 1;

  const handleNext = () => {
    if (pageNum < totalPage) {
      let nextPageNum =
        (typeof pageNum !== "number" ? parseInt(pageNum) : pageNum) + 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", nextPageNum.toString());

      router.push(`${pathName}?${params}`, { scroll: false });
    }
  };

  const handlePrev = () => {
    if (pageNum > 1) {
      let lastPageNum =
        (typeof pageNum !== "number" ? parseInt(pageNum) : pageNum) - 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", lastPageNum.toString());
      router.push(`${pathName}?${params}`, { scroll: false });
    }
  };

  const handlePageClick = (index: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", index.toString());
    router.push(`${pathName}?${params}`, { scroll: false });
  };

  return (
    <>
      {totalPage > 1 && (
        <>
          <div className="flex flex-row space-x-5 justify-center mt-10 w-full lg:w-4/5">
            <button
              onClick={handlePrev}
              disabled={pageNum === 1}
              className={clsx(
                pageNum == 1 && "text-gray-400 pointer-events-none"
              )}
            >
              Prev
            </button>

            {Array.from({ length: totalPage }).map((_, index) => (
              <button
                key={`page-${index + 1}`}
                className={clsx(
                  pageNum == index + 1 &&
                    "text-gray-500 underline pointer-events-none"
                )}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={pageNum === totalPage}
              className={clsx(
                pageNum == totalPage && "text-gray-400 pointer-events-none"
              )}
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}
