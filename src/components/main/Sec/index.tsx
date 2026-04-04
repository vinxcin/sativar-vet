import { motion } from "framer-motion";
import { Leaf, Heart, Brain, Sparkles, PawPrint } from "lucide-react";

export default function Sec() {
  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-green-600" />,
      title: "Equilíbrio Natural",
      text: (
        <>
          Mecanismo natural que orquestra o
          equilíbrio e harmonia do organismo.
        </>
      ),
    },
    {
      icon: <Brain className="w-5 h-5 text-emerald-600" />,
      title: "Conexão Inteligente",
      text: (
        <>
          Presente em todo o corpo do seu pet, conectando sistemas do cérebro à
          pele com precisão natural.
        </>
      ),
    },
    {
      icon: <Heart className="w-5 h-5 text-green-500" />,
      title: "Regulador da saúde e bem-estar",
      text: (
        <>
          Atua por meio dos{" "}
          endocanabinóides, substâncias naturais produzidas pelo próprio corpo, regulando 
          funções vitais de forma suave e fisiológica.
        </>
      ),
    },
    {
      icon: <Leaf className="w-5 h-5 text-lime-600" />,
      title: "Bem-estar Integrativo",
      text: (
        <>
          Modular o SEC é cultivar vitalidade, longevidade, qualidade de vida e
          bem-estar atráves da nutrição do corpo e da mente com estímulos adequados, bons hábitos e escolhas conscientes.
        </>
      ),
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">
      
      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="title text-xl lg:text-4xl text-[#1c8646] flex justify-center items-center gap-3">
          <Leaf className="w-8 h-8 text-green-700 animate-pulse" />
          Sistema Endocanabinoide (SEC)
        </h1>

        <p className="text-button font-semibold text-white mt-4 text-sm md:text-[16px] leading-loose bg-[#604a40] border-1 rounded-[5px]">
          Um sistema inteligente que regula, conecta e equilibra o organismo de forma natural!
            
          </p>
      </motion.div>

      {/* ================= CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* linha animada */}
            <div className="w-10 h-[2px] bg-green-300 mb-4 group-hover:w-16 transition-all duration-300" />

            {/* header */}
            <div className="flex items-center gap-3 mb-2">
              {card.icon}
              <h3 className="text-lg font-medium text-green-800">
                {card.title}
              </h3>
            </div>

            {/* texto */}
            <p className="text text-[#604a40] text-sm md:text-[15px] leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= FLOATING ICONS ================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-6 mt-16 text-green-600 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Heart className="w-7 h-7" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3.5 }}
        >
          <PawPrint className="w-7 h-7" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          <Leaf className="w-7 h-7" />
        </motion.div>
      </motion.div>

      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 blur-3xl rounded-full" />
    </section>
  );
}