
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Informações</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-location-dot text-red-600"></i>
                  </div>
                  <div>
                    <p className="font-bold">Endereço</p>
                    <p className="text-gray-600 text-sm">Rua Itália, 1104 – Centro, Araraquara - SP</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-phone text-red-600"></i>
                  </div>
                  <div>
                    <p className="font-bold">Telefones</p>
                    <p className="text-gray-600 text-sm">(16) 98149-7115</p>
                    <p className="text-gray-600 text-sm">(16) 3333-7608</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-envelope text-red-600"></i>
                  </div>
                  <div>
                    <p className="font-bold">E-mail</p>
                    <p className="text-gray-600 text-sm break-all">maqaraimpressorasinformatica@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <form className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-sm space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Assunto</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all bg-white">
                  <option>Assistência Técnica</option>
                  <option>Locação de Impressoras</option>
                  <option>Compra de Equipamento</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Mensagem</label>
                <textarea 
                  rows={4} 
                  placeholder="Como podemos te ajudar?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
