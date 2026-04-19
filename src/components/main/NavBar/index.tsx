import { useState, useEffect } from "react";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened((prev) => !prev);
  const closeMenu = () => setMenuOpened(false);

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) =>
      e.key === "Escape" && closeMenu();

    const closeOnResize = () =>
      window.innerWidth >= 1280 && closeMenu();

    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnResize);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnResize);
    };
  }, []);

  const links = [
    { label: "Início", id: "inicio" },
    { label: "S.E.C.", id: "sec" },
    { label: "Sobre a Vet.", id: "sobre" },
    { label: "Serviços", id: "servicos" },
    { label: "Depoimentos", id: "depoimentos" },
    { label: "Contato", id: "contato" },
  ];

  const linkClass =
    "relative text-button max-w-prose md:text-2xl lg:text-[18px] text-gray-100 hover:text-emerald-300 cursor-pointer transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-emerald-400 after:transition-all after:duration-300 lg:hover:after:w-full";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="px-4 lg:px-32 flex justify-between items-center py-6 xl:py-4">

        {/* Logo */}
        <div className="title text-2xl xl:text-3xl font-extrabold bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 text-transparent bg-clip-text drop-shadow-lg tracking-wide">
          Sativar Vet
        </div>

        {/* Desktop */}
        <ul className="hidden xl:flex space-x-10">
          {links.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={linkClass}
            >
              {item.label}
            </li>
          ))}
        </ul>

        {/* Botão mobile */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpened ? "Fechar menu" : "Abrir menu"}
          className="xl:hidden text-white text-3xl hover:scale-110 transition-transform duration-300"
        >
          {menuOpened ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile */}
      {menuOpened && (
        <div className="fixed inset-0 z-40 xl:hidden">

          {/* overlay */}
          <button
            onClick={closeMenu}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          {/* menu */}
          <aside className="relative z-50 w-4/5 max-w-sm h-screen ml-auto bg-gradient-to-b from-emerald-950 to-emerald-900 shadow-2xl rounded-l-3xl p-6 overflow-auto animate-slideIn">

            <button
              onClick={closeMenu}
              className="text-3xl text-emerald-200 hover:text-emerald-400 float-right"
            >
              ✕
            </button>

            <ul className="flex flex-col space-y-6 mt-10">
              {links.map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    closeMenu();
                  }}
                  className={linkClass}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            <p className="pt-10 text-emerald-400 text-sm md:text-lg opacity-90">
              🌿 Cuidando com propósito
            </p>
          </aside>
        </div>
      )}
    </nav>
  );
}