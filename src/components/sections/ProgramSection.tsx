import { useState } from "react";
import {
  Clock,
  Users,
  MapPin,
  ChevronRight,
  Calendar,
  Star,
  Award,
} from "lucide-react";

const ProgramSection = () => {
  const [activeDay, setActiveDay] = useState(1);

  const program = {
    day1: {
      date: "Jeudi 18 Septembre 2025",
      title:
        "🚀 Conférence SMEs Preparedness for Sustainable Tourism & Eco-Living",
      sessions: [
        {
          time: "08:30 - 09:00",
          title: "Welcome & Registration",
          speaker: "Organizing Committee",
          location: "Main Hall",
          type: "ceremonie",
          importance: "standard",
        },
        {
          time: "09:00 - 09:45",
          title: "Opening Program & Keynote Address",
          speaker:
            "Hon. Minister of Tourism in presence of Personalities & Participants",
          location: "Auditorium",
          type: "keynote",
          importance: "premium",
        },
        {
          time: "09:45 - 10:00",
          title: "Tea & Refreshments",
          speaker: "",
          location: "Networking Area",
          type: "pause",
          importance: "standard",
        },
        {
          time: "10:00 - 10:30",
          title:
            "Panel: SMEs as Catalysts for Sustainable Tourism & Eco-Living in Mauritius",
          speaker:
            "Dr. Boopen DOOBAH (IOCDAFRICA), MSB Representative, Mr. Daniel Saramandif",
          location: "Auditorium",
          type: "panel",
          importance: "premium",
        },
        {
          time: "10:30 - 11:00",
          title:
            "Panel Discussion 1: Eco-Living, Agrotourism & Sustainable Habitat – Opportunities for SMEs & Communities",
          speaker:
            "Mrs Rachel Kalou (CEO HYDRAULOCK, Côte d’Ivoire), Mr Johnny REBOULE GRAAFAL (Réunion), Local & Foreign Experts",
          location: "Auditorium",
          type: "panel",
          importance: "premium",
        },
        {
          time: "11:00 - 11:15",
          title: "Networking Break",
          speaker: "",
          location: "Lounge",
          type: "networking",
          importance: "standard",
        },
        {
          time: "11:15 - 11:45",
          title:
            "Workshop 1: Building Resilient Complementary SMEs Models for Sustainable Tourism & Eco-Living",
          speaker:
            "Mr. Ravin BEDADUN, Ms. Chaya POONYTH & Mr. Michael THISBE (MLO Construction)",
          location: "Conference Room",
          type: "atelier",
          importance: "high",
        },
        {
          time: "11:45 - 12:15",
          title:
            "Case Studies: Mauritian SMEs Leading Sustainable Tourism Practices",
          speaker:
            "Mr. Siven SEELOYE (Asian-African Chamber of Commerce), Mr. Siddick BODHI (Le Grand Bleu Hotel)",
          location: "Auditorium",
          type: "table-ronde",
          importance: "high",
        },
        {
          time: "12:15 - 13:15",
          title: "Lunch Break",
          speaker: "",
          location: "Restaurant",
          type: "dejeuner",
          importance: "standard",
        },
        {
          time: "13:15 - 14:00",
          title:
            "Panel Discussion 2: Financing & Policy Support for SMEs in Sustainable Tourism & Eco-Living",
          speaker:
            "Prabhu Moorthy Maduraimuthu (C32-PEX), Betsaleel DOOBAH (FINAS Plus), Banks, Gov. Officials, NGOs",
          location: "Auditorium",
          type: "panel",
          importance: "premium",
        },
        {
          time: "14:00 - 14:45",
          title:
            "Workshop 2: Digital Tools, AI & ICT for Promoting Sustainable Tourism & Eco-Living",
          speaker:
            "Mr. Satyam RAMGOOLAM (Software Engineer), Dr. Rojo C. Amdrianasolo (EMEDIA - GATE Africa), Panelists",
          location: "Conference Room",
          type: "masterclass",
          importance: "high",
        },
        {
          time: "14:45 - 15:00",
          title: "Coffee Break ☕",
          speaker: "",
          location: "Networking Area",
          type: "pause",
          importance: "standard",
        },
        {
          time: "15:00 - 15:45",
          title:
            "Roundtable: Collaborative Strategies for SME Growth in Eco-Living",
          speaker:
            "Mr. Judex SOULANGE (Chartered Marine Engineer), Mr. M. POORUN (Engineer/Restaurator), Open Forum",
          location: "Auditorium",
          type: "table-ronde",
          importance: "high",
        },
        {
          time: "15:45 - 16:15",
          title:
            "Closing Keynote: Vision 2030 – Positioning Mauritius as a Sustainable Tourism & Eco-Living Leader",
          speaker:
            "Dr. Boopen DOOBAH, Dr. Kevin Ramdhun, Mrs. Irene N. & Experts",
          location: "Auditorium",
          type: "keynote",
          importance: "premium",
        },
        {
          time: "16:15 - 16:30",
          title: "Closing Remarks & Certificate Distribution",
          speaker: "Organizing Committee",
          location: "Auditorium",
          type: "ceremonie",
          importance: "standard",
        },
      ],
    },
    day2: {
      date: "Vendredi 19 Septembre 2025",
      title: "💡 Business Matchmaking & Networking",
      sessions: [
        {
          time: "09:00 - 17:00",
          title:
            "Continuation of Day 1 – Business Matchmaking, B2B, Networking & Exchanges, MoUs",
          speaker: "IOCDAFRICA & Partners",
          location: "Dedicated Spaces",
          type: "matching",
          importance: "premium",
        },
      ],
    },
  };

  const getSessionTypeColor = (type: string) => {
    const colors = {
      networking: "bg-blue-100 text-blue-800 border-blue-200",
      ceremonie: "bg-purple-100 text-purple-800 border-purple-200",
      keynote: "bg-red-100 text-red-800 border-red-200",
      pause: "bg-gray-100 text-gray-700 border-gray-200",
      panel: "bg-green-100 text-green-800 border-green-200",
      dejeuner: "bg-orange-100 text-orange-800 border-orange-200",
      atelier: "bg-teal-100 text-teal-800 border-teal-200",
      pitch: "bg-yellow-100 text-yellow-800 border-yellow-200",
      gala: "bg-indigo-100 text-indigo-800 border-indigo-200",
      "table-ronde": "bg-emerald-100 text-emerald-800 border-emerald-200",
      masterclass: "bg-pink-100 text-pink-800 border-pink-200",
      matching: "bg-cyan-100 text-cyan-800 border-cyan-200",
      signature: "bg-violet-100 text-violet-800 border-violet-200",
    };
    return (
      colors[type as keyof typeof colors] ||
      "bg-gray-100 text-gray-800 border-gray-200"
    );
  };

  const getImportanceStyle = (importance: string) => {
    switch (importance) {
      case "premium":
        return "bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-l-yellow-400 shadow-lg";
      case "high":
        return "bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-l-blue-400";
      default:
        return "bg-white";
    }
  };

  const currentDay = activeDay === 1 ? program.day1 : program.day2;

  return (
    <section
      id="programme"
      className="py-24 bg-gradient-to-br from-white via-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-100 to-blue-100 rounded-full mb-6">
            <Calendar className="w-5 h-5 mr-2 text-teal-700" />
            <span className="text-teal-800 font-bold text-sm">
              PROGRAMME DÉTAILLÉ
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            Deux Journées{" "}
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Intensives
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Un programme riche en contenu, networking et opportunités d'affaires
            pour transformer le paysage du tourisme durable dans l'Océan Indien.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl border-2 border-gray-200/50">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                activeDay === 1
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              🚀 Jour 1 - 18 Sept
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg ${
                activeDay === 2
                  ? "bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg transform scale-105"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              💡 Jour 2 - 19 Sept
            </button>
          </div>
        </div>

        {/* Program Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">
              {currentDay.title}
            </h3>
            <p className="text-xl text-gray-600 font-medium">
              {currentDay.date}
            </p>
          </div>

          {/* Program Table */}
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border-2 border-gray-200/50 overflow-hidden">
            {/* Table Header */}
            <div className="bg-gradient-to-r from-teal-600 to-blue-700 px-8 py-6">
              <div className="grid grid-cols-12 gap-4 text-white font-bold text-sm">
                <div className="col-span-2">⏰ HORAIRE</div>
                <div className="col-span-5">📋 SESSION</div>
                <div className="col-span-3">👥 INTERVENANT(S)</div>
                <div className="col-span-2">📍 LIEU</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200">
              {currentDay.sessions.map((session, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-12 gap-4 px-8 py-6 hover:bg-gray-50 transition-all duration-300 group ${getImportanceStyle(
                    session.importance
                  )}`}
                >
                  {/* Time */}
                  <div className="col-span-2 flex items-center">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span className="font-bold text-gray-900 text-sm">
                        {session.time}
                      </span>
                    </div>
                  </div>

                  {/* Session Title */}
                  <div className="col-span-5">
                    <div className="flex items-start space-x-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-2 group-hover:text-teal-700 transition-colors duration-300 text-base leading-tight">
                          {session.title}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${getSessionTypeColor(
                              session.type
                            )}`}
                          >
                            {session.type.charAt(0).toUpperCase() +
                              session.type.slice(1)}
                          </span>
                          {session.importance === "premium" && (
                            <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-xs font-bold flex items-center">
                              <Star className="w-3 h-3 mr-1" />
                              Premium
                            </span>
                          )}
                          {session.importance === "high" && (
                            <span className="px-2 py-1 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-full text-xs font-bold flex items-center">
                              <Award className="w-3 h-3 mr-1" />
                              Important
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Speaker */}
                  <div className="col-span-3 flex items-center">
                    {session.speaker && (
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 font-medium text-sm">
                          {session.speaker}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Location */}
                  <div className="col-span-2 flex items-center">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 font-medium text-sm">
                        {session.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-6 text-center">
              🏷️ Légende des Sessions
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 rounded-full text-sm font-bold mb-2">
                  <Star className="w-4 h-4 mr-1" />
                  Premium
                </div>
                <p className="text-gray-600 text-sm">
                  Sessions exclusives avec les plus grands experts
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-400 to-teal-400 text-white rounded-full text-sm font-bold mb-2">
                  <Award className="w-4 h-4 mr-1" />
                  Important
                </div>
                <p className="text-gray-600 text-sm">
                  Sessions clés pour votre développement
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-bold mb-2">
                  Standard
                </div>
                <p className="text-gray-600 text-sm">
                  Sessions networking et pauses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-3xl p-12 shadow-2xl border border-teal-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-6">
              🎯 Prêt à Rejoindre l'Aventure ?
            </h3>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Ne manquez pas cette opportunité unique de développer votre réseau
              et d'accéder aux financements pour vos projets de tourisme
              durable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#inscription"
                className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-lg"
              >
                🚀 S'inscrire Maintenant
                <ChevronRight className="ml-2 w-6 h-6" />
              </a>
              <a
                href="#intervenants"
                className="inline-flex items-center px-10 py-5 bg-white/20 backdrop-blur-md text-white font-bold rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 text-lg"
              >
                👥 Voir les Experts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
