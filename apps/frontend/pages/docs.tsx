// import dynamic from "next/dynamic";

// const Blog = dynamic(() => import("blog/pages/blog"), { ssr: false });

// export default Blog;

import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";

import type { ReactElement } from "react";

export default function Docs() {
  const DocsPage = dynamic(() => import("docs/pages/index"), { ssr: false });
  return <DocsPage />;
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
