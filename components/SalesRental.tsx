
import React from 'react';

const SalesRental: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Venda e Locação</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Trabalhamos com as melhores marcas do mercado (HP, Epson, Brother, Samsung, Canon). 
                Seja para comprar um equipamento novo ou alugar para sua empresa, temos a opção certa.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-xl font-bold mb-2">Venda Direta</h4>
                <p className="text-sm text-gray-400">Equipamentos novos e revisados com garantia MaqAra.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-xl font-bold mb-2">Locação Mensal</h4>
                <p className="text-sm text-gray-400">Manutenção e suprimentos inclusos. Ideal para empresas.</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 mt-1"></i>
                <span>Suporte técnico imediato em caso de falhas.</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 mt-1"></i>
                <span>Substituição de suprimentos (toner/tinta) sem custo adicional no aluguel.</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check-circle text-red-600 mt-1"></i>
                <span>Equipamentos modernos com tecnologia wireless e duplex.</span>
              </div>
            </div>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-lg transition-colors shadow-lg uppercase text-sm tracking-wider">
              Solicitar Tabela de Preços
            </button>
          </div>

          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-transparent opacity-20 blur-xl"></div>
              <img 
                src="https://picsum.photos/id/160/800/600" 
                alt="Impressoras para Locação" 
                className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesRental;
