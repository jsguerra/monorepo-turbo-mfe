import Link from "next/link";

export default function blog() {
  return <div>
    <h1>Blog Page</h1>
    <Link href="/">Home</Link>
    <p>This page is generated from the Blog App and dynamically imported into Frontend blog page.</p>
  </div>;
}
