"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function SearchBtn() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchContent, setSearchContent] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchContent(e.target.value);
  };

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set("key", encodeURIComponent(searchContent));
    router.push(`/search?${params}`, { scroll: false });
  };

  return (
    <>
      <p className="text-2xl font-bold pt-5">Search</p>
      <form
        className="relative flex flex-col justify-start space-y-2"
        onSubmit={handleSearch}
      >
        <input
          type="search"
          id="search-bar"
          className="rounded-md px-4 py-2"
          required
          placeholder="Search article"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-400 text-white w-full rounded-md p-2"
        >
          Search
        </button>
      </form>
    </>
  );
}
