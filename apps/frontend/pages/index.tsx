import { Button } from "design-system";
import Link from "next/link";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Link href="/blog">Blog</Link>
      <h2>The button below is imported from the shared packages</h2>
      <p>
        <Button />
      </p>
    </div>
  );
}
