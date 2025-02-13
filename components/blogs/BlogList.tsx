import React from 'react';
import Link from 'next/link';
import { getPosts } from '@/lib/blog/getPost';

const BlogList = async (props: { deviceName: string }) => {
    const posts = await getPosts(props.deviceName);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {posts.map((post, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <Link href={`/blogs/${props.deviceName}/${post.slug}`} className="block p-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{post.FrontMatter.title}</h2>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">{post.FrontMatter.description || "No description available."}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;
