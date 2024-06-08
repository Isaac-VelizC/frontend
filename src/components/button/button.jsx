import React from 'react';

const MyButton = ({ name, onClick, color, outline }) => {
  // Determinar la clase de fondo del botón
  let bgColorClass = outline ? 'bg-transparent' : `bg-${color}-500`;
  // Determinar la clase de texto del botón
  let textColorClass = outline ? `text-${color}-500` : 'text-white';
  // Determinar la clase de hover del botón
  let hoverColorClass = outline ? `hover:text-gray-400 dark:hover:text-white` : `hover:bg-${color}-800`;
  // Determinar la clase del borde del botón
  let borderClass = outline ? `border border-${color}-500` : '';
  return (
    <button onClick={onClick} className={`flex items-center font-semibold text-sm cursor-pointer p-2 rounded-xl transition duration-200 gap-2 
    ${bgColorClass} ${textColorClass} ${hoverColorClass} ${borderClass}`}>
      <span>{name}</span>
    </button>
  );
};

export default MyButton;
