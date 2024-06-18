import styles from "./loading.module.css";
const MyLoading = () => {
  return (
    <div className={styles.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MyLoading;
