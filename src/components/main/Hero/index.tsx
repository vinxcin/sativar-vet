import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = () => {
    const section = document.getElementById("about");
    if (section) {
      const yOffset = -1;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex flex-col h-[80vh] w-full px-4 lg:px-12">
      <div className="flex flex-col text-center justify-center items-center h-full">
        <h1 className="text-[2.8rem] leading-[3.2rem] md:leading-[4.6rem] md:text-5xl lg:text-6xl title bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
          Viagem ao Céu Noturno
        </h1>

        <p className="text-lg text-gray-300 opacity-90 pt-2 max-w-xl">
          A ponte entre o conhecimento ancestral e a exploração do cosmos
        </p>
      </div>

      {/* Chevron fixado no rodapé da seção */}
      <div className="absolute bottom-[-0vh] left-0 right-0 flex justify-center">
        <ChevronDown
          onClick={scrollToSection}
          className="animate-bounce text-white/70 hover:text-purple-600 transition cursor-pointer"
          size={40}
        />
      </div>
    </section>
  );
}
