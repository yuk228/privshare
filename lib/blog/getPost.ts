import fs from "fs"
import matter from 'gray-matter';
import { FrontMatter }from '@/lib/blog/type';

export async function getPosts(deviceName: string) {
    const files = fs.readdirSync(`./app/blogs/posts/${deviceName}`, "utf-8");
    const Posts = files.map((Post) => {
      const slug = Post.replace(/\.md$/, '');
      const fileContent = fs.readFileSync(`./app/blogs/posts/${deviceName}/${Post}`, "utf-8");
      const { data } = matter(fileContent);
      return {
        FrontMatter: data as FrontMatter,
        slug,
      };
    })
    return Posts;
  }
