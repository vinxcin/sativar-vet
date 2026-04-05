import { motion, AnimatePresence } from "framer-motion";
import { Leaf, HeartPulse, Stethoscope, Shield, ChevronDown, Moon, Smile, Flame, Heart, Brain, Sparkles, PawPrint, Eye } from "lucide-react";
import { useState } from "react";

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

  const [open, setOpen] = useState(false);

  const items = [
    { icon: <Flame />, text: "Doenças inflamatórias" },
    { icon: <Brain />, text: "Distúrbios neurológicos" },
    { icon: <Shield />, text: "Distúrbios de imunidade e infecções" },
    { icon: <Smile />, text: "Transtornos comportamentais: Ansiedade, Estresse, Fobia..." },
    { icon: <HeartPulse />, text: "Alívio da dor crônica e aguda" },
    { icon: <Stethoscope />, text: "Suporte oncológico e cuidados paliativos" },
    { icon: <Moon />, text: "Melhora do sono e cognição" },
    { icon: <Leaf />, text: "Bem-estar e qualidade de vida" },
  ];

  const moreItems = [
    "Controle de dermatites",
    "Alterações gastrointestinais",
    "Regulação do apetite",
    "Doenças hepáticas (hepatopatias)",
    "Doenças renais (nefropatias)",
    "Doenças endócrinas e metabólicas",
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

      <div className="max-w-5xl mx-auto mt-24 relative">

        {/* glow animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 blur-3xl rounded-[50px] animate-pulse" />

        <div className="relative bg-[#123825d4] backdrop-blur-xl text-white rounded-[36px] px-8 md:px-14 py-14 shadow-[0_20px_80px_rgba(0,0,0,0.25)] border border-white/10 overflow-hidden">

          {/* linha topo animada */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 mb-10"
          />

          {/* título */}
          <h2 className="text-button text-xl md:text-3xl text-center mb-12 leading-snug font-medium">
            Modulando o SEC podemos corrigir desequilíbrios como:
          </h2>

          {/* lista */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.4 }}
                viewport={{ once: true }}
                className="relative cursor-pointer flex items-center gap-4 p-3 rounded-xl group"
              >
                {/* spotlight hover */}
                <div className="absolute inset-0 rounded-xl bg-white/0 group-hover:bg-white/5 transition duration-300" />

                <div className="relative z-10 p-2 bg-white/10 rounded-lg group-hover:scale-110 group-hover:bg-white/20 transition duration-300">
                  {item.icon}
                </div>

                <p className="relative z-10 text text-sm md:text-[15px] leading-relaxed opacity-95 group-hover:opacity-100 transition">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* progresso ao expandir */}
          <motion.div
            animate={{ width: open ? "100%" : "0%" }}
            transition={{ duration: 0.4 }}
            className="h-[2px] bg-white/40 mt-10"
          />

          {/* botão */}
          <div className="flex flex-col items-center mt-10 gap-4">

            <motion.button
              onClick={() => setOpen(!open)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              className="flex text-button cursor-pointer items-center gap-2 text-sm font-semibold bg-white text-green-700 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Eye className="w-4 h-4" />
              {open ? "Ver menos" : "Ver todas as condições"}
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>

          </div>

          {/* expandido */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.35 }}
                className="mt-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {moreItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2 opacity-90 hover:opacity-100 transition"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* glow interno */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-400/10 blur-3xl rounded-full" />

        </div>
      </div>
      {/* ================= BACKGROUND ================= */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 blur-3xl rounded-full" />
    </section>
  );
}



// {/* CTA REAL */}
//   <motion.button
//     initial={{ opacity: 0, y: 10 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.3 }}
//     whileHover={{ scale: 1.05 }}
//     className="text-sm md:text-base bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
//   >
//     Agendar avaliação para meu pet
//   </motion.button>