import { BG_HOME, DRA_LETICIA } from "@/assets/img";

export default function Hero() {
  return (
  <section className="h-screen flex items-center bg-cover bg-center bg-no-repeat px-6 md:px-12 relative"
  style={{ backgroundImage: `url(${BG_HOME})` }}>
    
  <div className="absolute inset-0 bg-emerald-950/50"></div>

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
    
    <div className="flex-1 text-center md:text-left">
      <h1 className="font-heading text-4xl md:text-4xl font-bold text-white drop-shadow-lg mb-4">
        Cuidado natural, ciência que transforma!
      </h1>

      <p className="text-gray-200 text-lg md:text-xl leading-relaxed">
        Na <span className="font-semibold text-green-300">Sativar Vet</span>, acreditamos que cada pet é único
        e merece ser cuidado com o olhar integrativo que respeita suas individualidades!
        <br />
        <br />
        A Dra. Leticia Holanda, especializada em{" "}
        <span className="font-medium">Endocanabinologia Veterinária</span>, utiliza terapias naturais que
        trazem o equilíbrio da natureza para a vida do seu pet.
      </p>
  
      <a href="https://wa.me/5511998394408" target="_blank">
        <button
          className="relative hover:cursor-pointer mt-6 px-6 py-3 rounded-lg font-medium bg-green-600 text-white overflow-hidden hover:scale-105 transition-transform duration-300">

          <span className="relative z-10">Agende uma consulta</span>
          <span
            className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"
          ></span>
        </button>
      </a>
    </div>



    <div className="flex-1 flex justify-center md:justify-end">
      <img
        src={DRA_LETICIA}
        alt="Dra. Letícia Holanda com um pet"
        className="w-80 md:w-[520px] rounded-2xl  object-cover"
      />
    </div>

  </div>


</section>

  );
}
