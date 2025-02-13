"use client"
import React from 'react'
import Link from 'next/link'
import { blogs } from '@/lib/blog/blogs'

const MainBlogList = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 mx-auto ">
        {blogs.map((blog, index) => (
            <li key={index} className="py-[40px] m-5 rounded-xl border shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-200 hover:dark:bg-gray-950 ">
                <Link href={blog.href} className="text-center">
                  <h2 className="font-bold text-3xl">{blog.title}</h2>
                  <p>{blog.desc}</p>
                </Link>
            </li>
        ))}
    </ul>
  )
}

export default MainBlogList