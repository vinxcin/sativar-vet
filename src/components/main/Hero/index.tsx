import { ChevronDown } from "lucide-react";

export default function Hero() {
    const scrollToSection = () => {
        const section = document.getElementById("about");
        if (section) {
            const yOffset = -65; // Altura do navbar fixa, ajuste se precisar
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };
    return (
        <section className="flex flex-col h-[80vh] w-full px-4 sm:px-12">

            <div className="h-full sm:h-[80vh] w-full flex flex-col items-center justify-center">
                <div className="flex flex-col text-center">
                    <h1 className="text-[2.8rem] leading-[3.2rem] md:text-6xl title bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">
                        Viagem ao Céu Noturno
                    </h1>

                    <p className="text-lg text-center text-gray-300 opacity-80 pt-2">
                        A ponte entre o conhecimento ancestral e a exploração do cosmos
                    </p>

                </div>
                    {/* <a
                        onClick={scrollToSection}
                        href="#proxima-sessao"
                        className=" animate-bounce text-white/70 hover:text-white transition cursor-pointer"
                        aria-label="Role para baixo"
                    >
                        <ChevronDown size={40} />
                    </a> */}

            </div>

        </section>
    );
}