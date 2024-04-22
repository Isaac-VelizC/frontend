import { useState, useEffect } from "react";
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px es el ancho típico de md en muchos sistemas de diseño responsivo
    };
    handleResize(); // Llama a handleResize una vez al inicio para establecer el estado inicial
    window.addEventListener("resize", handleResize); // Suscribirse a cambios en el tamaño de la ventana
    return () => {
      window.removeEventListener("resize", handleResize); // Desuscribirse del evento al desmontar el componente
    };
  }, []);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[56px] mt-[20px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          AIsakVeliz
        </div>
      </div>
      <div className="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1" onClick={isMobile ? onClose : null}>
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
