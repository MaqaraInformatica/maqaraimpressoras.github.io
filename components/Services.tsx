
import React from 'react';

const services = [
  {
    title: 'Assistência Técnica',
    description: 'Manutenção corretiva e preventiva em impressoras jato de tinta, laser e multifuncionais.',
    icon: 'fa-screwdriver-wrench'
  },
  {
    title: 'Recarga de Cartuchos',
    description: 'Recarga de toners e cartuchos com tintas de alta qualidade e rendimento garantido.',
    icon: 'fa-fill-drip'
  },
  {
    title: 'Instalação e Rede',
    description: 'Configuração de impressoras em rede sem fio e instalação de drivers para diversos sistemas.',
    icon: 'fa-network-wired'
  },
  {
    title: 'Limpeza Preventiva',
    description: 'Aumente a vida útil do seu equipamento com limpezas periódicas e lubrificação.',
    icon: 'fa-broom'
  }
];

const Services: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos suporte completo para manter sua produtividade sempre em alta com soluções rápidas e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-red-100 group"
            >
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <i className={`fa-solid ${service.icon} text-2xl text-red-600 group-hover:text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
