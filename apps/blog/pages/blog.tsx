import Link from "next/link";

export default function blog() {
  return <div>
    <h1>Blog Page</h1>
    <Link href="/">Home</Link>
    <p>This page is generated from the Blog App and dynamically imported into Frontend blog page.</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo aperiam, ut inventore rerum corrupti totam praesentium error quasi rem, eaque, molestias saepe in illum animi deleniti eos magnam dolorum dolorem?</p>
  </div>;
}
