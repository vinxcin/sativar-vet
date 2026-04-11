import { motion } from "framer-motion";
import { DRA_LETICIA } from "./../../../assets/img";
import { MessageCircle, Linkedin, Leaf } from "lucide-react";

export default function AboutVet() {
  return (
    <section className="relative px-4 sm:px-6 py-20 md:py-28 min-h-screen flex items-center bg-[#123825d4] overflow-hidden">

      {/* textura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.05),transparent_40%)]" />

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px]">

            {/* glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-emerald-300/20 blur-2xl rounded-[30px]" />

            {/* imagem */}
            <motion.img
              src={DRA_LETICIA}
              alt="Dra. Letícia Holanda"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] object-cover object-top rounded-[24px] md:rounded-[32px] shadow-lg"
            />

            <div className="absolute -bottom-4 sm:-bottom-6 right-2 sm:-right-6">
              <a
                href="https://www.linkedin.com/in/leticiaholandamv/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium bg-blue-700 text-white shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="w-5 h-4" />
                LinkedIn
              </a>
            </div>

          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-6 text-center md:text-left"
        >
          <div className="space-y-2 md:space-y-2">
            {/* <h2 className="title text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Sobre a Médica Veterinária
            </h2> */}


            <h1 className="title text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Dra. Letícia Holanda
            </h1>
          </div>
          {/* badge */}
          <div className="flex justify-center md:justify-start">
            <span className="text-button inline-block px-4 sm:px-5 py-2 rounded-full border border-white/20 text-emerald-200 text-xs sm:text-sm backdrop-blur-sm tracking-wide text-center">
              Cuidado individualizado • Terapias naturais • Bem-estar animal
            </span>
          </div>

          <p className="text text-gray-200 text-base  leading-relaxed">
            Médica veterinária integrativa especializada em Endocanabinologia, graduada pela Universidade Federal Rural do Rio de Janeiro.
          </p>

          <p className="text text-gray-300 text-base leading-relaxed">
            Sua atuação une ciência e cuidado integral, enxergando cada paciente em sua totalidade, respeitando suas particularidades e necessidades individuais.</p>

          <p className="text text-gray-300 text-base leading-relaxed">
            Através de terapias naturais, traz o equilíbrio da natureza para a vida do seu pet, promovendo qualidade de vida, bem-estar e saúde integral de dentro para fora.
          </p>





          {/* CTA */}
          <div className="flex justify-center">
            <motion.a
              href="https://wa.me/5511998394408"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#1b2b23] bg-gradient-to-r from-[#d8f3dc] via-[#95d5b2] to-[#52b788] shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              {/* 🌿 aura viva (respiração) */}
              <motion.span
                className="absolute -inset-3 rounded-full bg-green-300/20 blur-2xl"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* 🍃 partículas sutis (natureza viva) */}
              <motion.span
                className="absolute w-2 h-2 bg-green-400/40 rounded-full blur-sm"
                animate={{
                  x: [0, 20, -10, 0],
                  y: [0, -15, 10, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.span
                className="absolute w-1.5 h-1.5 bg-emerald-300/40 rounded-full blur-sm"
                animate={{
                  x: [10, -15, 10],
                  y: [0, 10, -10],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* brilho orgânico (vento passando) */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent blur-xl translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </span>

              {/* conteúdo */}
              <span className="relative flex items-center gap-2 tracking-wide">
                Quero regular o SEC do meu pet

                {/* folha viva */}
                <motion.span
                  animate={{
                    rotate: [0, 8, -6, 0],
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Leaf className="w-4 h-4" />
                </motion.span>
              </span>
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}