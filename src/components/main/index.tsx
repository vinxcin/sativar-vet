import { useInView } from "react-intersection-observer";
import Hero from "./Hero";
import BackgroundMedia from "./BackgroundMedia";
import NavBar from "./NavBar";
import About from "./About";
import Experiences from "./Experiences";
import BackgroundStars from "./BackgroundStars";
import Knowledges from "./Knowledges";
import Contact from "./Contact";

export default function LandingPage() {
  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.3,
  });

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BackgroundMedia isVisible={isHeroVisible} />

      <div className="fixed top-0 left-0 w-full h-full bg-black/40 z-0" />
       
      <BackgroundStars amount={350} />

      <NavBar />

      <main className="relative z-10 pt-[65px]">
        <section ref={heroRef}>
          <Hero />
        </section>
        <About />
        <Experiences/>
        <Knowledges/>
        <Contact/>
      </main>
    </div>
  );
}
