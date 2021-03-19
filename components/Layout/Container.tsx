import styles from "./Container.module.css";

const Container: React.FC = ({ children }) => (
  <section className={styles.container}>{children}</section>
);

export default Container;
