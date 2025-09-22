import { useState } from "react";

export default function NavBar() {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto  py-4 flex justify-between items-center">

        <div className="text-2xl font-bold text-green-600">Sativar Vet</div>

        <ul className="hidden md:flex space-x-12">
          {["Início", "S.E.C.", "Sobre a Vet.", "Serviços","Pacientes", "Contato"].map((item) => (
            <li
              key={item}
              className="font-medium hover:text-green-600 cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>


        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="md:hidden focus:outline-none"
        >
          {menuOpened ? (
            <span className="text-3xl">&times;</span> 
          ) : (
            <span className="text-3xl">&#9776;</span> 
          )}
        </button>
      </div>

      {menuOpened && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col space-y-4 p-4">
            {["Início", "S.E.C.", "Sobre mim", "Pacientes", "Contato"].map((item) => (
              <li
                key={item}
                className="font-semibold hover:text-green-600 cursor-pointer transition-colors"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
