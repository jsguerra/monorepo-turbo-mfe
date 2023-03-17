import { Button } from "design-system";
import Link from "next/link";
import Layout from "../components/layout/Layout";

import type { ReactElement } from "react";

export default function Home() {
  return (
    <div>
      <h1>Frontend App</h1>
      <Link href="/blog">Blog</Link>
      <h2>The button below is imported from the shared packages</h2>
      <p>
        <Button />
      </p>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
