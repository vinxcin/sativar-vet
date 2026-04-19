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
  const currentYear = new Date().getFullYear();

  return (
    <footer id='contato' className="relative bg-[#0b241b] text-white overflow-hidden">
      
      {/* ================= DIVIDER ANIMADO ================= */}
      {/* Adicionado pointer-events-none para que os ícones flutuantes não bloqueiem cliques */}
      <div className="relative w-full flex justify-center items-center py-14 overflow-hidden pointer-events-none">
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
      {/* z-10 garante que o conteúdo esteja acima dos glows de fundo */}
      <div className="relative z-10 px-6 pb-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* branding */}
        <div className="space-y-5">
          <h3 className="title text-xl text-emerald-300 font-medium">
            Medicina Veterinária Integrativa
          </h3>
          <p className="text-button text-sm text-gray-300 leading-relaxed">
            Abordagem que respeita a natureza do seu pet, promovendo equilíbrio,
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
              { icon: Phone, text: "(11) 99839-4408", href: "tel:5511998394408" },
              { icon: Mail, text: "leticiaholandamv@gmail.com", href: "mailto:leticiaholandamv@gmail.com" },
              { icon: MapPin, text: "Atendimento domiciliar e Telemedicina", href: null },
            ].map((item, i) => (
              <div key={i} className="text flex items-center gap-3 group">
                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <item.icon className="w-4 h-4 text-emerald-400" />
                </div>
                {item.href ? (
                  <a href={item.href} className="text-xs hover:text-white transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-xs">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA + redes */}
        <div className="space-y-6">
          <h4 className="text-button text-sm font-semibold text-emerald-200 uppercase tracking-wider">
            Conecte-se
          </h4>

          {/* redes sociais */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/leticiaholandavet/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#a73fa4] hover:via-[#f05c6b] hover:to-[#febe48] transition-all hover:scale-110 active:scale-95"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/leticiaholandamv/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-800 transition-all hover:scale-110 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61565385410195"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-blue-500 transition-all hover:scale-110 active:scale-95"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* CTA PRINCIPAL */}
          <motion.a
            href="https://wa.me/5511998394408"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-sm font-semibold text-gray-800 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 shadow-xl overflow-hidden touch-manipulation"
          >
            {/* Efeitos visuais - pointer-events-none para não interceptar o clique */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20 blur-xl pointer-events-none" />
            <span className="absolute -inset-1 bg-green-400/30 blur-xl rounded-full animate-pulse opacity-40 pointer-events-none" />

            <span className="text-button relative flex items-center gap-2">
              Agendar consulta pelo WhatsApp
              <MessageCircle className="w-4 h-4" />
            </span>
          </motion.a>
        </div>
      </div>

      {/* ================= FOOTER FINAL ================= */}
      <div className="text-button relative z-10 border-t border-white/10 py-6 text-center text-[11px] text-gray-400">
        Feito por Vinicius Carvalho Rosa © {currentYear} • Todos os direitos reservados
      </div>

      {/* ================= GLOW BACKGROUND ================= */}
      {/* Crucial: pointer-events-none evita que o "brilho" fique na frente dos botões no mobile */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

    </footer>
  );
}