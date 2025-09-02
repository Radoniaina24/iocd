import React from "react";
import { TrendingUp, Globe, Heart, Award } from "lucide-react";
import Carousel from "../caroussel";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "500+",
      label: "Participants Attendus",
      description: "Entrepreneurs, décideurs et experts",
      color: "from-teal-500 to-blue-600",
    },
    {
      icon: Globe,
      number: "15",
      label: "Pays Représentés",
      description: "Océan Indien et Afrique",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Heart,
      number: "150+",
      label: "PME Ciblées",
      description: "Secteur tourisme durable",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Award,
      number: "20M€",
      label: "Financement Mobilisé",
      description: "Pour projets innovants",
      color: "from-pink-500 to-orange-600",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-6">
            <span className="text-teal-800 font-bold text-sm">
              🌟 ÉVÉNEMENT EXCEPTIONNEL
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Une Conférence{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              d'Envergure
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            IOCDAFRICA rassemble les acteurs clés du tourisme durable pour créer
            un écosystème entrepreneurial robuste dans l'Océan Indien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border-2 border-gray-100/50 hover:border-white relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                <div className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div
                    className={`text-5xl font-black mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg">
            <span className="text-gray-900 font-bold text-lg">
              ⚡ Places limitées - Réservez maintenant !
            </span>
          </div>
        </div>
      </div>

      <Carousel />
    </section>
  );
};

export default StatsSection;
