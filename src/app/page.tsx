import Banner from "@/components/Banner";
import styles from "./page.module.css";
import ProductCard from "@/components/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <div style={{ margin: "20px" }}>
        <ProductCard />
      </div>
    </main>
  );
}
