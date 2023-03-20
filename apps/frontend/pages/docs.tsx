import dynamic from "next/dynamic";
import Layout from "../components/layout/Layout";

import type { ReactElement } from "react";

export default function Docs() {
  // @ts-ignore
  const DocsPage = dynamic(() => import("docs/pages/index"), { ssr: false });
  
  return <DocsPage />;
}

Docs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
