import styles from "./card.module.css";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/room1.jpg"}
          alt="cover"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>
        The Bloom Pavilion
        <div>
          A stunning bouquet hall where love blossoms and unforgettable memories
          are made
        </div>
      </div>
    </div>
  );
}
