import { BG_ABOUT, DRA_LETICIA } from "@/assets/img";

export default function Sec() {
  return (
    <section className="min-h-[60vh] md:min-h-[80vh] flex justify-center items-center px-6 py-12 ">
      <div className="w-full max-w-5xl bg-cover bg-center bg-no-repeat  bg-[#FAFAFA] rounded-2xl shadow-lg p-10 md:p-16 text-center space-y-6">
      {/*   <div className="absolute inset-0 bg-emerald-950/50"></div> */}
        
        <h1 className="font-heading font-semibold tex text-3xl md:text-5xl text-green-600">
          Sistema Endocanabinoide (SEC)
        </h1>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          O <span className="font-semibold text-gray-800">Sistema Endocanabinóide </span> é o maestro da vida, responsável por manter o equilíbrio do organismo.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Esse sistema fisiológico fundamental está presente em todo o corpo do seu pet — do cérebro à pele — e atua como regulador da saúde e do bem-estar.
        </p>

        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          Modular o SEC é promover <span className="font-semibold text-gray-800">saúde com propósito</span>, gerando qualidade de vida. 
          Bem-estar é um estado ativo, que pode e deve ser cultivado com carinho, presença e escolhas conscientes.
        </p>
      </div>
    </section>
  );
}
