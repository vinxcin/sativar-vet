'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cards } from "@/constants";

export default function Experiences() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    handleResize(); // chama uma vez no carregamento
    window.addEventListener('resize', handleResize); // escuta resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="vivencias"
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-16 bg-[#050111ce]"
    >
      {/* bg-[#050111] */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 animate-glow" />

      <h1 className="title text-amber-50 text-2xl md:text-4xl font-bold tracking-wide">
        Vivências Cósmicas
      </h1>

      <p className="text-xl leading-relaxed text-gray-300 lg:px-80 text-center mt-4 mb-8">
        Hoje, esse projeto ganha novas formas e caminhos. Levamos a <span className="italic">Astronomia</span> para além das salas de aula — conduzimos essa <span className="italic">jornada</span> até os festivais, conectando <span className="font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">ciência</span>, <span className="font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">arte</span> e <span className="font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">cultura alternativa</span> em uma experiência única.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {Cards.map((card, index) => {
          const CardWrapper = isDesktop ? motion.div : 'div';

          return (
            <CardWrapper
              key={index}
              className="relative rounded-2xl p-[2px] overflow-hidden group"
              {...(isDesktop && {
                variants: cardVariants,
                initial: 'hidden',
                whileInView: 'visible',
                transition: {
                  duration: 0.4,
                  ease: 'easeOut',
                  delay: index * 0.15,
                },
              })}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 rounded-2xl blur-2xl opacity-40 z-0" />
              <div className="relative bg-white/90 backdrop-blur-md rounded-2xl p-4 flex flex-col h-full z-10 shadow-2xl shadow-[#fd9a0c]/25">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-xl mb-2"
                />
                <h3 className="text-lg title md:text-xl text-[#050111] font-semibold mb-1 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-[#1a1127] text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </CardWrapper>
          );
        })}
      </div>

    </section>
  );
}
