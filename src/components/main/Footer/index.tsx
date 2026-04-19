import { motion } from "framer-motion";
import {
  Leaf,
  PawPrint,
  Phone,
  Mail,
  MapPin,
  HeartPulse,
  Instagram,
  MessageCircle,
  Facebook,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer id='contato' className="relative bg-[#0b241b] text-white overflow-hidden">

      {/* ================= DIVIDER ANIMADO ================= */}
      <div className="relative w-full flex justify-center items-center py-14 overflow-hidden">

        {/* linha base */}
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

        {/* elementos animados */}
        <div className="relative flex items-center gap-8">

          {[HeartPulse, Leaf, PawPrint].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -6, 0],
                rotate: [0, i % 2 === 0 ? 6 : -6, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-emerald-300/80"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= CONTEÚDO ================= */}
      <div className="relative px-6 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* branding */}
        <div className="space-y-5">
          <h3 className="title text-xl text-emerald-300">
            Medicina Veterinária Integrativa
          </h3>

          <p className="text text-sm text-gray-300 leading-relaxed">
            Um cuidado que respeita a natureza do seu pet, promovendo equilíbrio,
            saúde e bem-estar de forma integrada.
          </p>
        </div>

        {/* contato */}
        <div className="space-y-5">
          <h4 className="text-button text-sm font-semibold text-emerald-200 uppercase tracking-wider">
            Contato
          </h4>

          <div className="space-y-4 text-sm text-gray-300">

            {[
              { icon: Phone, text: "(11) 99839-4408" },
              { icon: Mail, text: "leticiaholandamv@gmail.com" },
              { icon: MapPin, text: "Atendimento domiciliar e Telemedicina" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 group cursor-default"
              >
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
                  <item.icon className="w-4 h-4 text-emerald-400" />
                </div>

                <span className="text text-xs group-hover:text-white transition">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA + redes */}
        <div className="space-y-6">

          <h4 className="text-button text-sm font-semibold text-emerald-200 uppercase tracking-wider">
            Conecte-se
          </h4>

          {/* redes */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/leticiaholandavet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#a73fa4] hover:via-[#f05c6b] hover:to-[#febe48] transition hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/leticiaholandamv/"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-800 transition hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61565385410195"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-500 transition hover:scale-110"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* CTA PRINCIPAL */}
          <motion.a
            href="https://wa.me/5511998394408"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="group hover:cursor-pointer relative inline-flex items-center gap-3 px-4 py-3.5 rounded-full text-sm font-semibold text-black bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 shadow-xl overflow-hidden"
          >
            {/* glow animado */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/20 blur-xl" />

            {/* pulso */}
            <span className="absolute -inset-1 bg-green-400/30 blur-xl rounded-full animate-pulse opacity-40" />

            {/* conteúdo */}
            <span className="text-button text-gray-800 relative flex items-center gap-2">
              Agendar consulta pelo WhatsApp
              <MessageCircle className="w-4 h-4" />
            </span>
          </motion.a>

        </div>

      </div>

      {/* ================= FOOTER FINAL ================= */}
      <div className="text-button relative border-t border-white/10 py-6 text-center text-xs text-gray-400">
        Feito por Vinicius Carvalho Rosa  © {new Date().getFullYear()} • Todos os direitos reservados
      </div>

      {/* ================= GLOW BACKGROUND ================= */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 blur-3xl rounded-full" />

    </footer>
  );
}