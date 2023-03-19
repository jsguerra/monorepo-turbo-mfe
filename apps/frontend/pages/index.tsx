import { Button } from "design-system";
import Layout from "../components/layout/Layout";
import Styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

import type { ReactElement } from "react";

// @ts-ignore
const FetchItem = dynamic(() => import("docs/fetchItems"));

export default function Home() {
  return (
    <div className={`${Styles.grid} container`}>
      <article>
        <header>
          <h1>Frontend App</h1>
        </header>
        <div className="entry">
          <p>
            This is a microfrontend built with 3 Next.js Apps. Only this App has
            styles applied to it.
          </p>
          <h2>The Blog App with Multi Zone</h2>
          <p>
            Selecting the Blog Link in the header nav will take you to the Blog
            App.
          </p>
          <h2>The Docs App with Module Federation</h2>
          <p>
            Clicking the Docs Link in the header nav will take you to an
            internal page in the Frontend App which dynamically loads content
            created in the remote Docs App.
          </p>
          <p>The button below is imported from the shared packages</p>
          <h3>The Button shared component</h3>
          <p>
            The button is a shared React.js component that resides in the repos
            packages folder. It represents an example of creating a UI library
            that can be shared with other Apps. Here you can create a centralise
            component library for consistency among the Apps in the Monorepo.
          </p>
          <Button />
          <h2>Reference Repo</h2>
          <p>
            The Github repo for this demo can be found here:{" "}
            <a
              href="https://github.com/jsguerra/monorepo-turbo-mfe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repo
            </a>
          </p>
        </div>
      </article>
      <aside>
        <h2>Aside Content</h2>
        <p>
          This content is fed from a shared component from the Docs App using{" "}
          <strong>Module Federation</strong>.
        </p>
        <FetchItem />
      </aside>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
