import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <div>hello world</div>
      </main>
    </div>
  );
}
