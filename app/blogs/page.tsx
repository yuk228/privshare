import ScrollBlogs from "@/components/blogs/ScrollBlogs"

export default async function Home() {
    return(
        <main className="px-5 py-[100px] md:px-30 lg:px-60">
            <ScrollBlogs deviceName="iphone"/>
            <ScrollBlogs deviceName="android"/>
            <ScrollBlogs deviceName="windows"/>
            <ScrollBlogs deviceName="other"/>
        </main>
    )
}