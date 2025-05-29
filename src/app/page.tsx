import Header from "@/sectionss/heade";
import Hero from "@/sectionss/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main id="about" className=" w-screen min-h-screen pb-32 relative px-10 pt-12">
      <Header />
      <Hero />
    </main>
  );
}
