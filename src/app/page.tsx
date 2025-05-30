import Clients from "@/sectionss/clients";
import Footer from "@/sectionss/footer";
import FunFacts from "@/sectionss/funfacts";
import Header from "@/sectionss/heade";
import Hero from "@/sectionss/hero";
import Skills from "@/sectionss/skills";
import Testimonials from "@/sectionss/testimonials";

export default function Home() {
  return (
    <div className="px-10 lg:px-[70px] pt-10 relative">

      <Header />
      <main id="about" className=" w-full min-h-screen pb-32  max-w-[1320px] mx-auto relative">
        <Hero />
        <div className="pt-[50px]"></div>

        <Skills />
        <div className="pt-5"></div>

        <Testimonials />
        <div className="pt-10"></div>

        <Clients />
        <div className="pt-10"></div>
        <FunFacts />
      </main>
      <Footer />
    </div>
  );
}
