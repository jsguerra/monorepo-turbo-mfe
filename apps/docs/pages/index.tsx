import { Button } from "design-system";

export default function Docs() {
  return (
    <>
      <div className="container">
        <h1>Docs</h1>
        <p>
          This is content from the Next.js Docs App. This page comes from the
          Docs index page.
        </p>
        <p>
          This is an example of a dynamically imported page from another app.
        </p>
        <h2>Shared Component</h2>
        <p>The button is a shared component from the Packages folder in the monorepo.</p>
        <Button />
      </div>
    </>
  );
}
