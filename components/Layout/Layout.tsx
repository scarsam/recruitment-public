import styles from "./Layout.module.css";

const Layout: React.FC = ({ children }) => (
  <main className={styles.layout}>{children}</main>
);

export default Layout;
