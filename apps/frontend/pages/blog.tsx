import dynamic from "next/dynamic";

const Blog = dynamic(() => import("blog/pages/blog"), { ssr: false });

export default Blog;
