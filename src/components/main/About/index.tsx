import { Images } from "@/constants"

export default function About() {
  return (
    <section id="about" className="relative h-[100vh] text-white py-48 text-center">

      <div className="absolute inset-0 z-0 overflow-hidden">
        {Images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.name}
            className="absolute w-52 opacity-35 animate-fadeInUp"
            style={{
              top: img.top,
              left: img.left,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl title  mb-6">Nossa Jornada</h1>
        
        <div className="max-w-[80vw] mx-auto">
          <p className="text-xl leading-relaxed text-gray-300 px-8 md:px-80 text-center">
            <span className="font-bold italic">Viagem ao Céu Noturno</span> é fruto de um projeto educacional que germinou ainda durante a graduação de seu idealizador.
            Diversas atividades e apresentações sobre astronomia
            foram realizadas para alunos do Ensino Médio e Fundamental de escolas do litoral norte de São Paulo.
            O objetivo era — e continua sendo — plantar a semente da curiosidade, do questionamento e do desejo de explorar o mistério que nos envolve: o Universo! ✨🌍
          </p>

          <p className="text-xl leading-relaxed text-gray-300 px-8 md:px-80 pt-10 text-center">
            Hoje, esse projeto ganha novas formas e caminhos. Levamos a <span className="italic">Astronomia</span> para além das salas de aula — conduzimos essa <span className="italic">jornada</span> até os festivais, conectando <span className="font-bold bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">ciência</span>, <span className="font-bold bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent">arte</span> e <span className="font-bold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">cultura alternativa</span> em uma experiência única.
          </p>
          {/* <p className="text-3xl leading-relaxed text-gray-300 px-8 md:px-80 pt-10 text-center">
            Este projeto também carrega um significado muito especial: é parte de um
            <span className="italic font-semibold"> legado </span>
            deixado por meu orientador na faculdade, Ricardo Roberto Plaza Teixeira, que recentemente nos deixou. Durante minha trajetória acadêmica,
            ele foi um grande incentivador — alguém que acreditava profundamente no poder da
            <span className="italic"> educação científica </span>
            e na importância de compartilhar o conhecimento com sensibilidade e paixão.
            <br /> Levar a <span className="italic">Viagem ao Céu Noturno</span> adiante é, para mim, uma forma de honrar tudo o que ele me ensinou e manter viva a luz que ele ajudou a acender em mim. 🌟 </p> */}

        </div>
      </div>
    </section>
  );
}