import Header from "@/sectionss/heade";
import Hero from "@/sectionss/hero";
import Skills from "@/sectionss/skills";

export default function Home() {
  return (
    <main id="about" className=" w-screen min-h-screen pb-32 relative px-10 pt-12 max-w-[1320px] mx-auto">
      <Header />
      <Hero />
      <Skills />
    </main>
  );
}
