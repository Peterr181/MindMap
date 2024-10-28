import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Faq from "@/components/Faq/Faq";
import Header from "@/components/Header/Header";
import Highlights from "@/components/Highlights/Highlights";
import Services from "@/components/Services/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Benefits />
      <Services />
      <Highlights />
      <Faq />
    </main>
  );
}
