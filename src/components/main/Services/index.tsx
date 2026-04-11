import { motion } from "framer-motion";
import { Leaf, Activity, HeartPulse } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Consulta especializada em Endocanabinologia",
      text: "Avaliação clínica individualizada da saúde do SEC e sua modulação integrativa multimodal.",
    },
    {
      icon: <Activity className="w-6 h-6 text-emerald-600" />,
      title: "Medicina nutracêutica e fitoterápica",
      text: "Uso terapêutico de alimentos funcionais e plantas medicinais com ação sinérgica em protocolos individualizados.",
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-lime-600" />,
      title: "Acompanhamento contínuo",
      text: "Monitoramento do paciente e sua evolução clínica, garantindo segurança e suporte clínico.",
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden">

      {/* título */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="title text-2xl md:text-4xl text-[#1c8646]">
          Serviços
        </h2>
      </div>

      {/* linha de conexão (desktop) */}
      <div className="hidden md:block absolute top-[55%] left-0 w-full h-[2px] bg-gradient-to-r from-green-200 via-emerald-400 to-lime-300 opacity-40" />

      {/* cards */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* conexão visual (ponto) */}
            {/* <div className="hidden md:flex absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full shadow-md" /> */}

            {/* card */}
            <div className="h-full bg-white/70 backdrop-blur-md border border-green-100 rounded-[28px] p-8 shadow-lg hover:cursor-pointer hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">

              {/* ícone */}
              <div className="mb-5 p-3 w-fit rounded-xl bg-green-100/60 group-hover:scale-110 transition">
                {service.icon}
              </div>

              {/* título */}
              <h3 className="text-button font-semibold text-green-800 mb-3 leading-snug">
                {service.title}
              </h3>

              {/* texto */}
              <p className="text text-sm md:text-[15px] text-[#604a40] leading-relaxed">
                {service.text}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* mensagem de conexão */}
      <div className="text-center max-w-xl mx-auto mt-16">
        <p className="text-button p-1 text-sm md:text-[14px] text-button font-semibold text-white bg-[#123825d4] border-1 rounded-[5px] leading-relaxed">
          Esses serviços atuam de forma integrada e complementar, promovendo uma abordagem completa e individualizada para a saúde do seu pet.
        </p>
      </div>

      {/* glow leve */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-200/20 blur-3xl rounded-full" />

    </section>
  );
}