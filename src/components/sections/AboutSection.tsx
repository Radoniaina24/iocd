import React from 'react';
import { Target, Lightbulb, Network, Rocket } from 'lucide-react';

const AboutSection = () => {
  const objectives = [
    {
      icon: Target,
      title: 'Faciliter l\'accès au financement',
      description: 'Connecter les PME avec les institutions financières et les investisseurs spécialisés dans le tourisme durable.'
    },
    {
      icon: Lightbulb,
      title: 'Promouvoir l\'innovation',
      description: 'Encourager le développement de solutions technologiques et durables pour le secteur touristique.'
    },
    {
      icon: Network,
      title: 'Créer des partenariats',
      description: 'Favoriser les collaborations entre entrepreneurs, institutions et organismes de développement.'
    },
    {
      icon: Rocket,
      title: 'Accélérer la croissance',
      description: 'Accompagner les PME dans leur développement et leur expansion sur les marchés régionaux.'
    }
  ];

  return (
    <section id="apropos" className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          {/* Left Content */}
          <div>
            <div className="mb-10">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-sm font-bold mb-6 border-2 border-teal-200">
                🎯 NOTRE MISSION
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Transformer le <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Tourisme</span> de l'Océan Indien
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                IOCDAFRICA est une plateforme unique qui réunit entrepreneurs, investisseurs et institutions 
                pour développer un écosystème touristique durable et innovant dans la région de l'Océan Indien.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Cette conférence de deux jours vise à créer des synergies durables, faciliter l'accès au 
                financement et promouvoir des pratiques responsables dans le secteur du tourisme.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border-2 border-teal-200 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                🏝️ Pourquoi l'Île Maurice ?
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Hub stratégique de l'Océan Indien, l'Île Maurice offre un environnement d'affaires 
                favorable et une expertise reconnue en tourisme durable, en faisant le lieu idéal 
                pour cette rencontre internationale.
              </p>
            </div>
          </div>

          {/* Right Content - Objectives */}
          <div>
            <h3 className="text-3xl font-black text-gray-900 mb-12 text-center lg:text-left">
              🎯 Nos Objectifs
            </h3>
            <div className="space-y-8">
              {objectives.map((objective, index) => {
                const IconComponent = objective.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-6 p-8 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-200/50 hover:border-teal-300 transform hover:-translate-y-2"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 mb-3 hover:text-teal-700 transition-colors duration-300">
                        {objective.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed font-medium text-lg">
                        {objective.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;