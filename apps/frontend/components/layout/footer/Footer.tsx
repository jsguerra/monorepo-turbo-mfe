import Styles from "./Footer.module.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={Styles["site-footer"]}>
      <p>Copyright {year} | Site Footer</p>
    </footer>
  );
};

export default Footer;
