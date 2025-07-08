import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BG_BLACK_HOLE } from "@/assets/img";

export default function BackgroundMedia() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isMobile ? (
        <motion.img
          key="img"
          src={BG_BLACK_HOLE}
          alt="Fundo alternativo"
          className="fixed rotate-180 top-0 left-0 w-full h-full object-cover z-[-1] translate-y-[-30vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      ) : (
        <motion.video
          key="video"
          autoPlay
          muted
          loop
          playsInline
          className="fixed rotate-180 top-0 left-0 w-full h-full object-cover z-[-1] translate-y-[-38vh] lg:translate-y-[-40vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <source src="/videos/blackhole.webm" type="video/webm" />
          Seu navegador não suporta vídeos em background.
        </motion.video>
      )}
    </AnimatePresence>
  );
}
