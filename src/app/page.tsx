import Image from "next/image";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Index from "../components/Index/Index";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Index />
        <div>hello world</div>
      </main>
    </div>
  );
}
