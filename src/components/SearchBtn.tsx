'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function SearchBtn() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const [searchContent, setSearchContent] = useState<string>("")

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchContent(e.target.value)
    }

    const handleSearch = (e: FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams(searchParams)
        params.set("key", encodeURIComponent(searchContent))
        router.push(`/search?${params}`, { scroll: false })
    }

    return (
        <>
            <form className='relative space-x-5' onSubmit={handleSearch}>
                <input type='search' id="search-bar" className='border-b-2 py-1' required placeholder='Search article' onChange={handleInputChange} />
                <button type='submit'>Search</button>
            </form>
        </>
    )
}
