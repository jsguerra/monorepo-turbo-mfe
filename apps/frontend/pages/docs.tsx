// import dynamic from "next/dynamic";

// const Blog = dynamic(() => import("blog/pages/blog"), { ssr: false });

// export default Blog;

import React from "react";
import Layout from "../components/layout/Layout";

import type { ReactElement } from "react";

export default function Docs() {
  return <div>docs</div>;
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
