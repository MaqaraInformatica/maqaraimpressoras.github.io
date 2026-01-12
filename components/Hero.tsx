
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-red-600 py-16 md:py-24">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-black rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              A Solução Completa para sua <span className="underline decoration-white underline-offset-8">Impressão</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto lg:mx-0">
              Venda, aluguel e assistência técnica especializada em Araraquara. Garantimos o melhor desempenho para sua empresa ou residência.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#compre-ou-alugue" 
                className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:-translate-y-1"
              >
                Ver Planos de Aluguel
              </a>
              <a 
                href="#contato" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full transition-all"
              >
                Solicitar Orçamento
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full max-w-xl">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-white/10 rounded-2xl rotate-3"></div>
              <img 
                src="img/maq.png" 
                alt="Impressora Profissional" 
                className="relative z-10 w-full h-auto drop-shadow-2xl rounded-lg"
                onError={(e) => {
                   (e.target as HTMLImageElement).src = 'https://picsum.photos/id/433/600/400';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
