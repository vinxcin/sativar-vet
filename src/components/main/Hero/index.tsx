import { BG_HOME, LUNA } from "@/assets/img";
import { netlifyImageUrl, netlifyImageSrcSet } from "@/lib/netlifyImage";

export default function Hero() {
  return (
    <section
      id='inicio'
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${netlifyImageUrl(BG_HOME, 1920)})` }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-emerald-950/80"></div>

      {/* Conteúdo principal — posicionado à esquerda */}
      <div className="absolute px-4 lg:pl-32 top-1/2 -translate-y-1/2 max-w-3xl z-10 text-left">

        <div className="lg:max-w-[40vw]">
          <h1 className="title text-2xl lg:text-4xl  text-white drop-shadow-lg mb-4 leading-snug">
            Cuidado natural, ciência que transforma!
          </h1>

          <p className="text-button text-gray-100/90 text-lg md:text-[18px] leading-relaxed mb-8">
            Na <span className="font-semibold text-green-300">Sativar Vet</span>, acreditamos que cada pet é único
            e merece ser cuidado com o olhar integrativo que respeita suas individualidades!
            <br />
            <br />
            Nosso foco é restabelecer o equilíbrio natural do organismo, através de terapias naturais que modulam o Sistema Endocanabinóide, promovendo saúde com propósito.

          </p>

          <a href="https://wa.me/5511998394408" target="_blank" rel="noopener noreferrer">
            <button
              className="text-button
                w-full lg:w-[18.5vw] h-14 hover:cursor-pointer rounded-lg font-semibold text-green-100
                bg-gradient-to-r from-green-800 via-emerald-700 to-green-800
                hover:from-emerald-600 hover:to-green-700
                border border-green-400/30
                shadow-md hover:shadow-lg hover:shadow-green-700/30
                transition-all duration-300 ease-out
              "
            >
              Agendar uma consulta
            </button>
          </a>
        </div>
      </div>

      {/* Imagem fixa no rodapé direito */}
      <div className="hidden md:block absolute bottom-0 right-0 z-20">
        <img
          src={netlifyImageUrl(LUNA, 800)}
          srcSet={netlifyImageSrcSet(LUNA)}
          sizes="(min-width: 1024px) 650px, 72vw"
          loading="lazy"
          width={800}
          height={1200}
          alt="LUNA"
          className="sm:w-[52vw] md:w-[72vw] lg:w-[38vw] lg:max-w-[650px] object-contain rounded-t-2xl drop-shadow-2xl translate-y-[10%] "
        />
      </div>
    </section>
  );
}
