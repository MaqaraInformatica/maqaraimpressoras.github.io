
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#inicio" className="flex items-center gap-2">
              <img 
                src="img/maq.png" 
                alt="MaqAra Logo" 
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  // Fallback for demo if local image is missing
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/id/160/200/200';
                }}
              />
              <span className="text-xl font-bold text-gray-800 tracking-tight hidden sm:block">
                MaqAra <span className="text-red-600">Impressoras</span>
              </span>
            </a>
          </div>

          {/* Center Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold uppercase tracking-wide text-gray-600">
            <a href="#inicio" className="hover:text-red-600 transition-colors">Início</a>
            <a href="#servicos" className="hover:text-red-600 transition-colors">Serviços</a>
            <a href="#compre-ou-alugue" className="hover:text-red-600 transition-colors">Compre ou Alugue</a>
            <a href="#contato" className="hover:text-red-600 transition-colors">Contato</a>
          </nav>

          {/* Phones Section - Desktop */}
          <div className="hidden md:flex flex-col items-end text-right">
            <div className="flex items-center gap-2 text-red-600 font-bold">
              <i className="fa-solid fa-phone text-xs"></i>
              <span className="text-sm">(16) 3333-7608</span>
            </div>
            <div className="text-[10px] text-gray-500 font-medium">
              (16) 98149-7115 | (16) 3357-2355
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-red-600 focus:outline-none p-2"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with subtle animation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-6 animate-mobile-menu origin-top">
          <nav className="flex flex-col space-y-4 font-semibold text-gray-700">
            <a href="#inicio" onClick={() => setIsOpen(false)} className="hover:text-red-600 py-2 transition-colors">Início</a>
            <a href="#servicos" onClick={() => setIsOpen(false)} className="hover:text-red-600 py-2 transition-colors">Serviços</a>
            <a href="#compre-ou-alugue" onClick={() => setIsOpen(false)} className="hover:text-red-600 py-2 transition-colors">Compre ou Alugue</a>
            <a href="#contato" onClick={() => setIsOpen(false)} className="hover:text-red-600 py-2 transition-colors">Contato</a>
            <hr className="border-gray-100" />
            <div className="pt-2 text-sm">
              <p className="font-bold text-red-600 mb-1">Fale conosco:</p>
              <p>(16) 3333-7608</p>
              <p>(16) 98149-7115</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
