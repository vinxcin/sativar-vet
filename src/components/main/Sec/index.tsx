import { motion } from "framer-motion";
import { Leaf, Heart, PawPrint } from "lucide-react";

export default function Sec() {
  return (
    <section className="relative min-h-[90vh] flex justify-center items-center px-6 py-20 overflow-hidden bg-gradient-to-b from-[#375342] to-[#3753423f]">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1.2px] bg-gradient-to-r from-[#3d604b] via-emerald-500  rounded-full"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(74,222,128,0.15),_transparent_60%)]"
      />

      <motion.div
        className="absolute -top-20 -left-32 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-emerald-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full max-w-5xl bg-emerald-100 backdrop-blur-md rounded-[2rem] shadow-2xl p-10  text-center space-y-8 border border-green-100"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="title text-4xl text-[#1c8646] font-bold bg-clip-text drop-shadow-lg tracking-wide flex justify-center items-center gap-3">
          <Leaf className="text-green-700 w-8 h-8 md:w-10 md:h-10 animate-pulse" />
          Sistema Endocanabinoide (SEC)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          O Sistema Endocanabinóide é o <b className="text-green-700">maestro da vida</b>, um mecanismo sábio e natural que orquestra o <b className="text-lime-600">equilíbrio</b> e a <b className="text-teal-700">harmonia</b> do organismo.

        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          Esse sistema biológico, está presente em todo o corpo do seu pet: do cérebro à pele, conectando e comunicando cada sistema com precisão e inteligência natural.
        </motion.p>




        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          O SEC atua como regulador da saúde e do bem-estar através dos{" "}
          <span className="text font-semibold text-gray-900">endocanabinóides</span>, substâncias naturais produzidas pelo próprio corpo, que realizam ajustes finos em funções vitais, equilibrando o organismo de forma suave e fisiológica.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >

          Modular o SEC é promover saúde com propósito, cultivando vitalidade, longevidade, qualidade de vida e bem-estar através da nutrição do corpo e da mente com os estímulos adequados, bons hábitos e escolhas conscientes.
        </motion.p>

        {/* ✨ Ícones flutuantes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex justify-center items-center gap-6 pt-8 text-green-600"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Heart className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          >
            <PawPrint className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Leaf className="w-7 h-7 md:w-8 md:h-8" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
