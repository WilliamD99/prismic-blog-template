import React from 'react'
import { createClient } from '@/src/prismicio';
import Link from 'next/link';
import clsx from 'clsx';

export default async function CategorySelector({ current } : { current?: string}) {
    const client = createClient();

    const categories = await client.getAllByType("category", {
        graphQuery: `
            {
                category {
                    name
                }
            }
        `
    })

    return (
        <>
            <div className='flex flex-row justify-center space-x-10 -mt-12 pb-12'>
                {
                    categories.map(category => (
                        <Link 
                            href={`/category/${category.uid}`} 
                            key={category.uid}
                            className={clsx(
                                current === category.uid && "font-bold pointer-events-none", 
                                "hover:underline"
                            )}
                        >
                            {category.data.name}
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
