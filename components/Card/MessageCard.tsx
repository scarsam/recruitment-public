import styles from "./MessageCard.module.css";

const MessageCard = ({ message }) => (
  <div className={styles.card}>
    <p>{message}</p>
  </div>
);

export default MessageCard;
