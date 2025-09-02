import { Linkedin, Twitter, ExternalLink } from "lucide-react";

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Dr. Sarah Mauritius",
      title: "Expert ONU Tourisme",
      company: "Organisation Mondiale du Tourisme",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Spécialisée en développement touristique durable avec 15 ans d'expérience internationale.",
      expertise: [
        "Tourisme Durable",
        "Politiques Publiques",
        "Développement International",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Jean-Pierre Océan",
      title: "Directeur Régional AFD",
      company: "Agence Française de Développement",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Expert en financement de projets durables et développement économique en Afrique.",
      expertise: [
        "Financement",
        "Développement Durable",
        "Partenariats Publics-Privés",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Marie Dubois",
      title: "Digital Tourism Expert",
      company: "TechTourism Solutions",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Pionnière du marketing digital dans le tourisme, accompagne les PME dans leur transformation numérique.",
      expertise: [
        "Marketing Digital",
        "E-tourisme",
        "Innovation Technologique",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Ahmed Hassan",
      title: "CEO EcoTourism Africa",
      company: "Réseau Entrepreneurs Africains",
      image:
        "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Entrepreneur à succès, développe des projets d'écotourisme à travers l'Afrique de l'Est.",
      expertise: [
        "Écotourisme",
        "Entrepreneuriat",
        "Développement Communautaire",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Priya Patel",
      title: "Responsable Investissements",
      company: "Green Capital Partners",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Spécialisée dans les investissements verts et le financement de startups innovantes.",
      expertise: ["Capital-Risque", "Investissement Vert", "Due Diligence"],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Laurent Seychelles",
      title: "Ministre du Tourisme",
      company: "République des Seychelles",
      image:
        "https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Architecte des politiques de tourisme durable aux Seychelles, modèle régional.",
      expertise: [
        "Politiques Touristiques",
        "Développement Régional",
        "Durabilité",
      ],
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <section
      id="intervenants"
      className="py-24 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-md text-teal-300 rounded-full text-sm font-bold mb-6 border border-teal-400/30">
            ⭐ INTERVENANTS D'EXCEPTION
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Nos Experts
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Internationaux
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Rencontrez les leaders qui façonnent l'avenir du tourisme durable
            dans l'Océan Indien et au-delà.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 border-2 border-gray-200/50 hover:border-white relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-teal-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500"></div>

              {/* Image */}
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-teal-600 font-bold mb-2 text-lg">
                  {speaker.title}
                </p>
                <p className="text-gray-600 text-sm mb-6 font-medium">
                  {speaker.company}
                </p>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 font-medium">
                  {speaker.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {speaker.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gradient-to-r from-teal-100 to-blue-100 text-teal-800 rounded-full text-xs font-bold border border-teal-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3">
                  <a
                    href={speaker.social.linkedin}
                    className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={speaker.social.twitter}
                    className="w-10 h-10 bg-gradient-to-r from-sky-500 to-sky-600 rounded-xl flex items-center justify-center text-white hover:from-sky-400 hover:to-sky-500 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <button className="w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center text-white hover:from-gray-500 hover:to-gray-600 transition-all duration-300 transform hover:scale-110 shadow-lg">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border-2 border-white/20 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-6">
              🌟 Et bien d'autres experts vous attendent...
            </h3>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              Plus de 30 intervenants confirment leur présence pour partager
              leur expertise et échanger avec vous lors de cette conférence
              exceptionnelle.
            </p>
            <a
              href="#inscription"
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              🎯 Réserver votre place
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
