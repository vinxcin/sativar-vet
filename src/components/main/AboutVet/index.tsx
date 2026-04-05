import { motion } from "framer-motion";
import { DRA_LETICIA } from "./../../../assets/img";
import { MessageCircle, Linkedin} from "lucide-react";

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
          className="space-y-6 md:space-y-7 text-center md:text-left"
        >
          <div className="space-y-2 md:space-y-3">
            <h2 className="title text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight">
              Sobre a Médica Veterinária
            </h2>

            <h3 className="text-button text-lg sm:text-xl text-emerald-300 font-medium tracking-wide">
              Dra. Letícia Holanda
            </h3>
          </div>

          <p className="text text-gray-200 text-base sm:text-lg leading-relaxed">
            Médica veterinária integrativa especializada em Endocanabinologia, graduada pela Universidade Federal Rural do Rio de Janeiro.
          </p>

          <p className="text text-gray-300 text-base sm:text-lg leading-relaxed">
            Sua atuação une ciência e cuidado integral, enxergando cada paciente em sua totalidade, respeitando suas particularidades e necessidades individuais.</p>

          <p className="text text-gray-300 text-base sm:text-lg leading-relaxed">
            Através de terapias naturais, traz o equilíbrio da natureza para a vida do seu pet, promovendo qualidade de vida, bem-estar e saúde integral de dentro para fora.
          </p>

          {/* badge */}
          <div className="flex justify-center md:justify-start">
            <span className="text-button inline-block px-4 sm:px-5 py-2 rounded-full border border-white/20 text-emerald-200 text-xs sm:text-sm backdrop-blur-sm tracking-wide text-center">
              Cuidado individualizado • Terapias naturais • Bem-estar animal
            </span>
          </div>


          {/* CTA */}
          <div className="pt-6 flex justify-center md:justify-start">
            <a
              href="https://wa.me/5511998394408"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-[5px] text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              {/* brilho sweep */}
              <span className="absolute inset-0">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/30 blur-xl rotate-12 opacity-0 group-hover:opacity-100 group-hover:translate-x-[250%] transition-all duration-700" />
              </span>

              {/* conteúdo */}
              <span className="relative flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Quero regular o SEC do meu pet
              </span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}