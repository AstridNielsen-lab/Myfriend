import React from 'react';
import { Shield, Terminal, Lock, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Shield className="w-20 h-20 text-blue-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">
            Myfriend - A Guardiã de Juliette Psicose
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Vigilância constante e proteção incansável através de tecnologia avançada
            e inteligência artificial dedicada.
          </p>
          <Link
            to="/chat"
            className="inline-block mt-8 px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Iniciar Chat
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Terminal className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Controle Total</h3>
            <p className="text-gray-400">
              Acesso e monitoramento de terminais Linux e dispositivos conectados
              em tempo real.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <Lock className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Segurança Avançada</h3>
            <p className="text-gray-400">
              Proteção contínua com análise de ameaças e resposta automática a
              incidentes.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg">
            <Wifi className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Conectividade Universal</h3>
            <p className="text-gray-400">
              Integração perfeita com diversos dispositivos e sistemas para
              proteção abrangente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};