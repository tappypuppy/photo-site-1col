import styles from "./main.module.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Index from "../components/Index/Index";
import Detail from "@/components/Detail/Detail";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Index />
        <Detail />
      </main>
      <Footer />
    </div>
  );
}
