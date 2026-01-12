
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-16 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Brief */}
          <div className="col-span-1 lg:col-span-2">
             <div className="flex items-center gap-2 mb-6">
              <img src="img/maq.png" alt="MaqAra" className="h-10 w-auto" onError={(e) => (e.target as HTMLImageElement).src = 'https://picsum.photos/id/160/100/100'} />
              <span className="text-xl font-bold tracking-tight">MaqAra <span className="text-red-600">Impressoras</span></span>
            </div>
            <p className="text-gray-500 max-w-sm mb-6">
              Sua assistência técnica de confiança em Araraquara. Soluções inteligentes para impressão empresarial e doméstica desde 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          {/* Column 1 - Contato (As requested) */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Contato</h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-red-600"></i>
                Rua Itália, 1104 – Centro, Araraquara - SP
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-phone mt-1 text-red-600"></i>
                Telefone: (16) 98149-7115 / 3333-7608
              </p>
              <p className="flex items-start gap-3">
                <i className="fa-solid fa-envelope mt-1 text-red-600"></i>
                <span className="break-all">maqaraimpressorasinformatica@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Column 2 - Horário (As requested) */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-6">Horário de Atendimento</h4>
            <div className="space-y-4 text-gray-600 text-sm">
              <p className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-semibold">8:30h às 18h</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-semibold">8:30h às 12h</span>
              </p>
              <p className="flex justify-between">
                <span>Domingo:</span>
                <span className="text-red-500 font-semibold">Fechado</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2025 MaqAra. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-red-600 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-red-600 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
