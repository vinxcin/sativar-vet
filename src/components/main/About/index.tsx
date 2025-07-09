import { Images } from "@/constants"

export default function About() {
  return (
    <section id="about" className="relative h-full text-white py-40 text-center">

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
        <h1 className="text-3xl sm:text-4xl title mb-6">Sobre o projeto</h1>

        <div className="max-w-[120vw] px-6 sm:px-8 md:max-w-[89vw] mx-auto text-gray-300">

          <p className="text-xl leading-relaxed md:px-80">
            <span className="font-bold italic">Viagem ao Céu Noturno </span>
            é um projeto educacional que une ciência, arte, cultura alternativa e o olhar ancestral para o céu, oferecendo vivências astronômicas por meio de observações com telescópios e apresentações sobre temas como buracos negros, ciclo de vida das estrelas e curiosidades do Universo!✨🌍
          </p>

          <p className="text-xl leading-relaxed md:px-80 pt-10">
            O projeto nasceu em 2019, ainda no início da graduação de seu idealizador, Vinicius Carvalho Rosa, como uma pesquisa educacional. Desde então, foram realizadas diversas atividades de observação do céu e apresentações sobre astronomia para estudantes de escolas públicas do litoral norte de São Paulo.
          </p>

        </div>
      </div>
    </section>
  );
}
