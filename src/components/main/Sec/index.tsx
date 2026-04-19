import { motion, AnimatePresence } from "framer-motion";
import { Leaf, HeartPulse, Stethoscope, Shield, ChevronDown, Moon, Smile, Flame, Heart, Brain, Sparkles, PawPrint, Eye } from "lucide-react";
import { useState } from "react";

export default function Sec() {
  const [open, setOpen] = useState(false);

  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-green-600" />,
      title: "Equilíbrio Fisiológico",
      text: "Mecanismo natural que orquestra a harmonia do organismo.",
    },
    {
      icon: <Brain className="w-5 h-5 text-emerald-600" />,
      title: "Conexão Inteligente",
      text: "Presente em todo o corpo do seu pet, conectando sistemas do cérebro à pele com precisão.",
    },
    {
      icon: <Heart className="w-5 h-5 text-green-500" />,
      title: "Regulador da saúde e bem-estar",
      text: "Atua por meio dos endocanabinóides (substâncias naturais produzidas pelo próprio corpo), regulando funções vitais de forma suave e fisiológica.",
    },
    {
      icon: <Leaf className="w-5 h-5 text-lime-600" />,
      title: "Bem-estar Integrativo",
      text: "Modular o SEC é cultivar vitalidade, longevidade, qualidade de vida e bem-estar, através da nutrição do corpo e da mente.",
    },
  ];

  const items = [
    { icon: <Brain />, text: "Distúrbios neurológicos" },
    { icon: <Smile />, text: "Transtornos comportamentais: Ansiedade, Estresse..." },
    { icon: <HeartPulse />, text: "Alívio da dor crônica e aguda" },
    { icon: <Moon />, text: "Melhora do sono, cognição e apetite" },
    { icon: <Flame />, text: "Doenças inflamatórias" },
    { icon: <Shield />, text: "Imunidade e doenças dermatológicas" },
    { icon: <Stethoscope />, text: "Suporte oncológico e paliativos" },
    { icon: <Leaf />, text: "Bem-estar e qualidade de vida" },
  ];

  const moreItems = [
    "Alterações gastrointestinais",
    "Doenças hepáticas (hepatopatias)",
    "Doenças renais (nefropatias)",
    "Doenças endócrinas e metabólicas",
  ];

  return (
    <section id='sec' className="relative px-6 py-24 overflow-hidden bg-white">

      {/* ================= TITLE ================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h1 className="title text-2xl lg:text-4xl text-[#1c8646] flex justify-center items-center gap-3">
          <Leaf className="w-8 h-8 text-green-700 animate-pulse" />
          Sistema Endocanabinóide (SEC)
        </h1>

        <p className="text-button font-semibold text-white mt-4 text-sm md:text-[16px] leading-loose bg-[#604a40] p-2 rounded-[5px]">
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
            <div className="w-10 h-[2px] bg-green-300 mb-4 group-hover:w-16 transition-all duration-300" />
            <div className="flex items-center gap-3 mb-2">
              {card.icon}
              <h3 className="text-lg font-medium text-green-800">{card.title}</h3>
            </div>
            <p className="text text-[#604a40] text-sm md:text-[15px] leading-relaxed">
              {card.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ================= FLOATING ICONS ================= */}
      <div className="flex justify-center items-center gap-6 mt-16 text-green-600">
        {[Heart, PawPrint, Leaf].map((Icon, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 + i * 0.5 }}
          >
            <Icon className="w-7 h-7" />
          </motion.div>
        ))}
      </div>

      {/* ================= DARK CARD CONTAINER ================= */}
      <div className="max-w-5xl mx-auto mt-24 relative">
        
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-lime-500/20 blur-3xl rounded-[50px] animate-pulse pointer-events-none" />

        <div className="relative z-20 bg-[#123825d4] backdrop-blur-xl text-white rounded-[36px] px-8 md:px-14 py-14 shadow-2xl border border-white/10 overflow-hidden">
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1 }}
            className="h-[2px] bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 mb-10"
          />

          <h2 className="text-button text-xl md:text-3xl text-center mb-12 font-medium">
            Modulando o SEC, podemos corrigir desequilíbrios como:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, index) => (
              <div key={index} className="relative flex items-center gap-4 p-3 rounded-xl group">
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition duration-300">
                  {item.icon}
                </div>
                <p className="text text-sm md:text-[15px] opacity-95">{item.text}</p>
              </div>
            ))}
          </div>

          <motion.div
            animate={{ width: open ? "100%" : "0%" }}
            className="h-[1px] bg-white/20 mt-10"
          />

          <div className="flex flex-col items-center mt-10">
            <motion.button
              onTap={() => setOpen(!open)} // onTap é superior ao onClick no mobile
              whileTap={{ scale: 0.95 }}
              className="group relative z-30 flex select-none touch-manipulation cursor-pointer items-center gap-2 text-sm font-semibold bg-white text-green-700 px-8 py-4 rounded-full shadow-xl active:bg-gray-100 transition-all"
            >
              <Eye className="w-4 h-4 pointer-events-none" />
              <span className="pointer-events-none">
                {open ? "Ver menos" : "Ver todas as condições"}
              </span>
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                className="flex items-center justify-center pointer-events-none"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>

          {/* ÁREA EXPANSÍVEL */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-10 pt-6 border-t border-white/5">
                  {moreItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 opacity-90">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-400/10 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-emerald-400/10 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>

      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100/30 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-100/30 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}