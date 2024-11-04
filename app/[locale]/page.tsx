import About from "@/components/About/About";
import BlogIntroduce from "@/components/BlogIntroduce/BlogIntroduce";
import BlogIntroduction from "@/components/BlogIntroduction/BlogIntroduction";
import Faq from "@/components/Faq/Faq";
import Header from "@/components/Header/Header";
import HowToBook from "@/components/HowToBook/HowToBook";
import MentalWellness from "@/components/MentalWellness/MentalWellness";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Services />
      <HowToBook />
      <BlogIntroduce />
      <MentalWellness />
      <BlogIntroduction />
      <Faq />
    </main>
  );
}
