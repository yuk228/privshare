import fs from "fs"
import ReactMarkdown from 'react-markdown';
import { getPostData } from "@/lib/blog/getPostData";

export default async function Home({ params }: { params: Promise<{slug: string}>}) {
  const { slug } = await params;
  const post = await getPostData(slug, "iphone");
    return (
        <main>
            <div className="px-[50px] py-[100px] md:px-[200px] lg:px-[500px]">
              <h1 className="text-4xl font-bold py-5 text-left md:text-center lg:text-center">{post.frontMatter.title}</h1>
              <ReactMarkdown
              components={{
                h2: ({...props }) => <h2 className="my-3 mt-[30px] pl-3 text-2xl font-bold border-l-2 border-gray-500" {...props} />,
                p: ({...props }) => <p className="ml-2" {...props} />,
                li: ({...props }) => <li className="ml-7 my-2 pl-3 border-l-2 border-gray-500" {...props} />,
                a: ({...props }) => <a className="text-blue-700" {...props} />,
                }}>{post.content}</ReactMarkdown>
            </div>
        </main>
    );
}

export async function generateStaticParams() {
  const files = fs.readdirSync("./app/blogs/posts/iphone", "utf-8");
  const slugs = await files.map((file) => file.replace(/\.md$/, ''));
  return slugs.map((slug) => ({
    slug,
  }));
}