import React from 'react';
import { Building, Users, Briefcase, GraduationCap, CheckCircle, Star } from 'lucide-react';

const ParticipantsSection = () => {
  const participantTypes = [
    {
      icon: Building,
      title: 'Entrepreneurs PME',
      description: 'Dirigeants d\'entreprises touristiques cherchant financement et partenariats',
      price: '150€',
      originalPrice: '200€',
      features: [
        'Accès complet aux 2 journées',
        'Sessions de pitch personnalisées',
        'Rendez-vous investisseurs',
        'Kit entrepreneur premium',
        'Accès VIP aux événements networking'
      ],
      popular: true
    },
    {
      icon: Users,
      title: 'Institutions & ONG',
      description: 'Représentants d\'organisations de développement et institutions publiques',
      price: '100€',
      originalPrice: '',
      features: [
        'Accès complet aux 2 journées',
        'Espaces d\'exposition dédiés',
        'Sessions de partenariat',
        'Documentation technique',
        'Networking ciblé'
      ],
      popular: false
    },
    {
      icon: Briefcase,
      title: 'Investisseurs & Financiers',
      description: 'Fonds d\'investissement, banques et institutions financières',
      price: '300€',
      originalPrice: '',
      features: [
        'Accès VIP aux 2 journées',
        'Due diligence sessions',
        'Présélection de projets',
        'Salon privé investisseurs',
        'Rapports d\'opportunités exclusifs'
      ],
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'Étudiants & Chercheurs',
      description: 'Étudiants en tourisme, économie et développement durable',
      price: '50€',
      originalPrice: '100€',
      features: [
        'Accès aux conférences principales',
        'Ateliers formation',
        'Networking junior',
        'Certificat de participation',
        'Ressources pédagogiques'
      ],
      popular: false
    }
  ];

  const benefits = [
    'Documentation complète de la conférence',
    'Accès à la plateforme networking digitale',
    'Certificat de participation officiel',
    'Suivi post-conférence pendant 6 mois',
    'Accès aux webinaires de suivi'
  ];

  return (
    <section id="participants" className="py-24 bg-gradient-to-br from-white via-blue-50 to-teal-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-sm font-bold mb-6 border-2 border-teal-200">
            🎪 QUI PEUT PARTICIPER ?
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Trouvez <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Votre Place</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            IOCDAFRICA s'adresse à tous les acteurs du tourisme durable, 
            des entrepreneurs aux investisseurs en passant par les institutions.
          </p>
        </div>

        {/* Participant Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 relative z-10">
          {participantTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className={`relative bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-2 border-2 ${
                  type.popular ? 'border-teal-500 ring-4 ring-teal-200/50' : 'border-gray-200/50'
                }`}
              >
                {type.popular && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-3 rounded-full text-sm font-black flex items-center shadow-lg animate-pulse">
                      <Star className="w-4 h-4 mr-1" />
                      🔥 POPULAIRE
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-3xl flex items-center justify-center shadow-lg ${
                    type.popular 
                      ? 'bg-gradient-to-r from-teal-500 to-blue-600 group-hover:from-teal-400 group-hover:to-blue-500' 
                      : 'bg-gradient-to-r from-gray-200 to-gray-300 group-hover:from-teal-200 group-hover:to-blue-200'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${
                      type.popular ? 'text-white' : 'text-gray-700 group-hover:text-teal-700'
                    }`} />
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-teal-700 transition-colors duration-300">{type.title}</h3>
                  <p className="text-gray-600 text-sm mb-8 leading-relaxed font-medium">{type.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className={`text-4xl font-black ${type.popular ? 'bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent' : 'text-gray-900'}`}>{type.price}</span>
                      {type.originalPrice && (
                        <span className="text-lg text-red-500 line-through font-bold">{type.originalPrice}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-2 font-medium">par personne</p>
                    {type.originalPrice && (
                      <p className="text-xs text-green-600 font-bold mt-1">💰 Économisez {parseInt(type.originalPrice) - parseInt(type.price)}€ !</p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-left">
                        <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#inscription"
                    className={`w-full inline-flex items-center justify-center px-8 py-4 rounded-2xl font-black transition-all duration-300 transform hover:scale-105 text-lg ${
                      type.popular
                        ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-400 hover:to-blue-500 shadow-xl hover:shadow-2xl'
                        : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-teal-100 hover:to-blue-100 hover:text-teal-700 shadow-lg'
                    }`}
                  >
                    🎯 Choisir ce tarif
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Benefits */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Bénéfices Inclus pour Tous
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            <strong>Réservation anticipée jusqu'au 1er septembre</strong> - Places limitées à 500 participants
          </p>
          <a
            href="#inscription"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Réserver ma place maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;