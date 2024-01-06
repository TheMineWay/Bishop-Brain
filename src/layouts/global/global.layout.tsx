import Navbar from "../../components/common/navbar/navbar";
import styles from "./global.layout.module.pcss";

type Props = {
  children: JSX.Element;
};

export default function GlobalLayout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
