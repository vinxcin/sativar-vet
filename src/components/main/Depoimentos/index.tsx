import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";
import { KIARA, MANDA_CHUVA, JOSE_CLAUDIO } from "../../../assets/img";

export default function Depoimentos() {
  
  const testimonials = [
    {
      name: "Kiara",
      responsavel: "Ana Rosa de Oliveira Cardoso",
      image: KIARA,
      text: "A experiência com a Dra Letícia tem sido maravilhosa e veio de encontro às necessidades da minha gatinha. O atendimento dela, através de visitas domiciliares, trouxeram o acolhimento necessário para o cuidado da Kiara, sem oferecer situações estressantes (como Kiara já havia passado em outros atendimentos).Com sua prescrição nutracêutica, a Kiara vem apresentando melhoras a cada dia, perceptíveis no cotidiano (períodos diurno e noturno principalmente) com uma melhora que não foi somente centralizada ou paliativa, o que mostra que a Dra Letícia cuida do nosso pet de forma integral, com um olhar individual e personalizado, o que o atende de maneira multidisciplinar e abrangente. Nem precisaria mencionar, mas super indico os cuidados dela, Dra Letícia foi providencial e pontual em seu trabalho.",
    },
    {
      name: "José Cláudio",
      responsavel: "Andressa Yumi",
      image: JOSE_CLAUDIO,
      text: "A Dra Leticia é ótima! muito atenciosa e cuidadosa com os pacientes. Meu cachorro, pitlata, está esta mais calmo, antes estava sempre em estado de alerta, não relaxava, além das crises por conta do medo de chuva/trovão e fogos.. agora está mais traqnuilo, passou a deitar nos passeios, o que demonstra que ele esta curtindo né, ou seja, uma grande melhora na qualidade de vida do meu filhote. Muito obrigada, foi muito bom encontrá-la no nosso caminho. ❤️",
    },
    {
      name: "Manda Chuva",
      responsavel: "Amanda Azevedo",
      image: MANDA_CHUVA,
      text: "O atendimento a domicílio dela é maravilhoso. Ela é super atenciosa, o atendimento personalizado, amei....Meu manda chuva, (gato) tem uma doença crônica, que tem controle, e depois que passou com a Dra Letícia, diminuiu bastante as crises de vômito dele. O pelô melhorou, o comportamento dele. A Dra Letícia é maravilhosa recomendo.",
    },
  ];

  const truncate = (text:string, max = 180) => {
    if (text.length <= max) return text;
    return text.substring(0, max) + "...";
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id='depoimentos' className="relative px-6 py-24 overflow-hidden bg-[#123825d4]">

      {/* título */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="title text-2xl md:text-4xl text-white mb-4">
          Depoimentos
        </h2>
        <p className="text-gray-300 text-sm md:text-[15px]">
          Histórias reais de transformação e cuidado
        </p>
      </div>

      {/* grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md border border-green-100 rounded-[28px] p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* header */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <p className="text-button font-semibold text-green-800">
                    {item.name}
                  </p>
                  <p className="text-button text-xs text-gray-500">
                    Responsável: {item.responsavel}
                  </p>
                </div>
              </div>

              {/* estrelas */}
              <div className="flex gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>

              {/* texto */}
              <p className="text text-sm md:text-[15px] text-[#604a40] leading-relaxed">
                "{isOpen ? item.text : truncate(item.text)}"
              </p>

              {/* botão */}
              {item.text.length > 180 && (
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="mt-3 hover:cursor-pointer text-green-700 text-xs font-medium hover:underline"
                >
                  {isOpen ? "Ler menos −" : "Ler mais +"}
                </button>
              )}

              {/* expansão animada (extra opcional) */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">

        <a
          href="https://g.page/r/CfooHR58b7TsEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-gray-200 bg-[#1c8646] hover:bg-green-700 transition"
        >
          Ver mais avaliações!
        </a>
      </div>
    </section>
  );
}