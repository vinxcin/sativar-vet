import { motion } from "framer-motion";
import { Leaf, Heart, Brain, Sparkles } from "lucide-react";

export default function Sec() {
  const cards = [
    {
      icon: <Sparkles className="w-6 h-6 text-green-600" />,
      title: "Equilíbrio Natural",
      text: (
        <>
          O Sistema Endocanabinóide é o{" "}
          <b className="text-green-700">maestro da vida</b>, promovendo{" "}
          <b className="text-lime-600">equilíbrio</b> e{" "}
          <b className="text-teal-700">harmonia</b> no organismo.
        </>
      ),
    },
    {
      icon: <Brain className="w-6 h-6 text-emerald-600" />,
      title: "Conexão Inteligente",
      text: (
        <>
          Presente em todo o corpo do seu pet, conecta sistemas do cérebro à
          pele com precisão e inteligência natural.
        </>
      ),
    },
    {
      icon: <Heart className="w-6 h-6 text-green-500" />,
      title: "Regulação Vital",
      text: (
        <>
          Atua por meio dos{" "}
          <span className="font-semibold text-gray-900">
            endocanabinóides
          </span>
          , equilibrando funções vitais de forma suave e fisiológica.
        </>
      ),
    },
    {
      icon: <Leaf className="w-6 h-6 text-lime-600" />,
      title: "Bem-estar Integrativo",
      text: (
        <>
          Modular o SEC promove vitalidade, longevidade e qualidade de vida com
          hábitos e escolhas conscientes.
        </>
      ),
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex justify-center items-center px-6 py-20 overflow-hidden">

      {/* container */}
      <motion.div
        className="relative w-full max-w-5xl bg-[#f7f2db]/80 backdrop-blur-xl rounded-[2rem] shadow-2xl p-10 text-center space-y-10 border border-green-100"
      >
        {/* título */}
        <h1 className="title text-4xl text-[#1c8646] font-bold flex justify-center items-center gap-3">
          <Leaf className="text-green-700 w-8 h-8 animate-pulse" />
          Sistema Endocanabinoide (SEC)
        </h1>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-200 via-emerald-200 to-lime-200 hover:from-green-400 hover:to-lime-300 transition-all duration-500"
            >
              <div className="h-full w-full bg-white/80 backdrop-blur-md rounded-2xl p-6 flex flex-col gap-3 shadow-md group-hover:shadow-xl transition-all">

                {/* ícone */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-green-100 group-hover:scale-110 transition">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-green-800">
                    {card.title}
                  </h3>
                </div>

                {/* texto */}
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* detalhe final */}
        <div className="flex justify-center items-center gap-6 pt-6 text-green-600 opacity-80">
          <Heart className="w-6 h-6 animate-pulse" />
          <Leaf className="w-6 h-6 animate-pulse delay-150" />
          <Sparkles className="w-6 h-6 animate-pulse delay-300" />
        </div>
      </motion.div>
    </section>
  );
}