import styles from "./Hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <div className={styles.hero_box}>
      <Image className={styles.hero_img} src="/mainvisual_1.png" alt="hero" width={1000} height={400} />
    </div>
  );
}

export default Hero;
