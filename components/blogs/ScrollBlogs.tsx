import React from 'react'
import Link from 'next/link';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { getPosts } from '@/lib/blog/getPost';

const ScrollBlogs = async (props: { deviceName: string }) => {
    const posts = getPosts(props.deviceName);
    return (
        <div>
            <Link href={`/blogs/${props.deviceName}`} className="block text-2xl hover:underline py-[50px]">「{props.deviceName}」のBlogを見よう ＞</Link>
            <ScrollArea className="w-[100%] p-[32px] mt-[10px] py-[40px] rounded-md border">
                <div className="flex items-stretch h-full w-max">
                    {(await posts).map((post, index) => (
                        <Link key={index} href={`/blogs/${props.deviceName}/${post.slug}`} className="block w-[90%] hover:bg-zinc-200 dark:hover:bg-zinc-800 p-1 m-1 ring-1 ring-zinc-100 dark:ring-zinc-900 rounded-xl"> 
                            <h2 className="text-md">{post.FrontMatter.title.substring(0,21)}</h2>
                            <p className="mt-5 text-sm">{(post.FrontMatter.description || "none").substring(0, 21)}</p>
                        </Link>
                    ))}
                </div>
            <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </div>
    )
}

export default ScrollBlogs