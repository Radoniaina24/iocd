import { Target, Lightbulb, Network, Rocket, Users, Globe } from "lucide-react";

const AboutSection = () => {
  const objectives = [
    {
      icon: Lightbulb,
      title: "Créer une prise de conscience",
      description:
        "Sensibiliser à l’importance du tourisme durable et de l’éco-living pour l’avenir de la région.",
    },
    {
      icon: Target,
      title: "Analyser les défis et opportunités",
      description:
        "Évaluer les problématiques régionales et identifier les leviers pour une croissance responsable.",
    },
    {
      icon: Network,
      title: "Faciliter l’échange des bonnes pratiques",
      description:
        "Partager des solutions innovantes et des modèles de réussite entre acteurs du secteur.",
    },
    {
      icon: Users,
      title: "Favoriser les partenariats",
      description:
        "Encourager les collaborations entre gouvernements, communautés, PME et secteur privé.",
    },
    {
      icon: Rocket,
      title: "Développer des stratégies concrètes",
      description:
        "Élaborer des plans d’action et des cadres de développement durable pour le tourisme et l’éco-habitat.",
    },
  ];

  return (
    <section
      id="apropos"
      className="py-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 relative overflow-hidden"
    >
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
                🌍 INTRODUCTION
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
                Vers un{" "}
                <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Tourisme Durable
                </span>{" "}
                et un Éco-Living Responsable
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                Le tourisme est un moteur économique essentiel pour de
                nombreuses nations de l’Océan Indien et de l’Afrique. Mais sa
                croissance non maîtrisée entraîne destruction des habitats,
                pollution et perturbations socio-culturelles.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Le <strong>tourisme durable</strong> et l’
                <strong>éco-living</strong> apparaissent comme des solutions
                équilibrant bénéfices économiques, intégrité écologique et
                cohésion sociale. Cette conférence met en avant l’intégration
                des principes de durabilité dans les politiques, les initiatives
                communautaires et les pratiques d’affaires.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-3xl p-8 border-2 border-teal-200 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                🎯 Objectif Principal
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed font-medium">
                Promouvoir les pratiques de tourisme durable et d’éco-living
                dans la région de l’Océan Indien et de l’Afrique grâce au
                partage de connaissances, au renforcement des capacités, au B2B
                et à la collaboration régionale.
              </p>
            </div>
          </div>

          {/* Right Content - Objectives */}
          <div>
            {/* Participants */}
            <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border-2 border-purple-200 shadow-lg">
              <h3 className="text-2xl font-black text-gray-900 mb-4 flex items-center">
                <Globe className="w-6 h-6 mr-2 text-purple-600" /> Participants
                Ciblés
              </h3>
              <ul className="text-gray-700 text-lg leading-relaxed font-medium space-y-2 list-disc list-inside">
                <li>
                  VIPs & Officiels gouvernementaux : Ministres, Ambassadeurs,
                  décideurs
                </li>
                <li>
                  Associations professionnelles & PME : Chambres de commerce,
                  groupes sectoriels
                </li>
                <li>
                  Secteur privé : Hôtels, tourisme médical & bien-être,
                  agro-industrie, finance, construction & habitat
                  éco-responsable
                </li>
                <li>
                  Société civile & ONG : femmes entrepreneures, ONG
                  développement durable, arts & culture
                </li>
                <li>
                  Recherche & Académie : universités, centres de recherche,
                  instituts de formation
                </li>
                <li>
                  Secteurs créatifs & culturels : artisanat, digital media,
                  cinéma, tourisme culturel
                </li>
                <li>
                  Participants régionaux & internationaux : Océan Indien,
                  Afrique, monde
                </li>
                <li>
                  Communautés locales, leaders communautaires & secteur
                  hospitalité
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-10">
          <h3 className="text-3xl font-black text-center text-gray-900 mb-12  ">
            🚀 Nos Objectifs
          </h3>
          <div className="grid cols-1 md:grid-cols-3 gap-5 place-">
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
    </section>
  );
};

export default AboutSection;
