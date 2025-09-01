import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Île Maurice - Plage paradisiaque"
          className="w-full h-full object-cover opacity-40"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-teal-800/80 to-purple-900/70"></div> */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/30 to-blue-500/30 backdrop-blur-md rounded-full text-teal-100 text-sm font-semibold border border-teal-300/40 shadow-lg">
                Conférence Internationale
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-teal-100 to-blue-200 bg-clip-text text-transparent">
                IOCDAFRICA
              </span>
              <span className="block text-3xl md:text-5xl bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300 bg-clip-text text-transparent font-bold">
                Tourisme Durable
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-gray-100 leading-relaxed font-light">
              🚀 Transformez votre vision entrepreneuriale en impact durable.
              <br />
              🌍 Rejoignez les leaders du tourisme responsable à l'Île Maurice.
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Calendar className="w-5 h-5 text-teal-300" />
                <span className="text-lg font-medium">
                  18-19 Septembre 2024
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <MapPin className="w-5 h-5 text-teal-300" />
                <span className="text-lg font-medium">
                  Port Louis, Île Maurice
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <Users className="w-5 h-5 text-teal-300" />
                <span className="text-lg font-medium">500+ Participants</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#inscription"
                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-teal-500 via-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:from-teal-400 hover:via-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl text-lg animate-pulse"
              >
                🎯 S'inscrire Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#programme"
                className="inline-flex items-center justify-center px-10 py-5 bg-white/15 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/25 hover:border-white/50 transition-all duration-300 text-lg"
              >
                📋 Voir le Programme
              </a>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="lg:ml-auto">
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                🎯 Impact Prévu
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent mb-2">
                    500+
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    Participants
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                    150+
                  </div>
                  <div className="text-sm text-gray-200 font-medium">PME</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    Projets
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black bg-gradient-to-r from-pink-300 to-orange-300 bg-clip-text text-transparent mb-2">
                    20M€
                  </div>
                  <div className="text-sm text-gray-200 font-medium">
                    Financement
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full border border-yellow-300/30">
                  <span className="text-yellow-200 text-sm font-semibold">
                    💰 Opportunités d'investissement exceptionnelles
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce cursor-pointer">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1.5 h-4 bg-gradient-to-b from-teal-300 to-blue-300 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
