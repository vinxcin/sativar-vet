import { useEffect, useState } from "react";

export default function MediaBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? (
    <img
      src="/images/bg-fallback.jpg"
      alt="Fundo alternativo"
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1] opacity-80"
    />
  ) : (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed rotate-180 top-0 left-0 w-full h-full object-cover z-[-1] translate-y-[-38vh] lg:translate-y-[-40vh]"
    >
      <source src="/videos/blackhole.webm" type="video/webm" />
      Seu navegador não suporta vídeos em background.
    </video>
  );
}
