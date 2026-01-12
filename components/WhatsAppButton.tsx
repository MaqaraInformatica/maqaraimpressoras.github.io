
import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5516981497115';
  const message = encodeURIComponent('Olá MaqAra, gostaria de solicitar um orçamento!');
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Falar no WhatsApp"
    >
      <i className="fa-brands fa-whatsapp text-4xl"></i>
      {/* Tooltip */}
      <span className="absolute right-20 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
        Fale conosco agora!
      </span>
    </a>
  );
};

export default WhatsAppButton;
