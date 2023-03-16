import { Button } from "design-system";
import Link from "next/link";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Link href="/blog">Blog</Link>
      <p>
        <Button />
      </p>
    </div>
  );
}
