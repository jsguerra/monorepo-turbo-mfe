import Link from "next/link";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles["site-header"]}>
      <div className={`${Styles["header-container"]} container`}>
        <Link href="/"><span className={Styles.logo}>Site Header</span></Link>
        <nav className={Styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/docs">Docs</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
