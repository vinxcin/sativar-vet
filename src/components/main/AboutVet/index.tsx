import { motion } from "framer-motion";
import { DRA_LETICIA } from "./../../../assets/img";
import { netlifyImageUrl, netlifyImageSrcSet } from "@/lib/netlifyImage";
import { Linkedin, Leaf } from "lucide-react";

export default function AboutVet() {
  return (
    <section id='sobre' className="relative px-4 sm:px-6 py-20 md:py-28 min-h-screen flex items-center bg-[#123825d4] overflow-hidden">

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
              src={netlifyImageUrl(DRA_LETICIA, 800)}
              srcSet={netlifyImageSrcSet(DRA_LETICIA)}
              sizes="(min-width: 768px) 420px, (min-width: 640px) 380px, 320px"
              alt="Dra. Letícia Holanda"
              loading="lazy"
              width={800}
              height={1200}
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
            <span className="text-button inline-block text-emerald-200 text-xs sm:text-sm backdrop-blur-sm tracking-wide text-center">
              Cuidado individualizado • Terapias naturais • Bem-estar
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
          <div className="flex justify-start">
            <motion.a
              href="https://wa.me/5511998394408"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex w-full items-center justify-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-medium text-[#1b2b23] bg-gradient-to-r from-[#d8f3dc] via-[#95d5b2] to-[#52b788] shadow-[0_10px_30px_rgba(0,0,0,0.2)] overflow-hidden"
            >
    
              {/* conteúdo */}
              <span className="text-button  relative flex items-center gap-2 tracking-wide">
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