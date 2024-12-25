"use client"
import React from 'react'
import Link from 'next/link'
import "./page.css"
const HomepageAbout = () => {
  return (
    <>
        <section className="bg-gray-50" id="home">
  <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16" >
    <div className="md:flex md:items-end md:justify-between" >
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl" id="text">
          Read trusted reviews from our customers
        </h2>

        <p className="mt-6 max-w-lg leading-relaxed text-gray-700" id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
          sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
          autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
        </p>
      </div>

      <Link href={{ pathname: '/trendings',}} className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-500 px-5 py-3 text-rose-500 transition hover:bg-rose-500 hover:text-white md:mt-0">

        <span className="font-medium" >Trendings </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 rtl:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        </Link>
    </div>

    
  </div>
</section>
    </>
  )
}

export default HomepageAbout