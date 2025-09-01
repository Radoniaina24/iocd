import React, { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Calendar,
  Heart,
} from "lucide-react";

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",

    // Informations professionnelles
    company: "",
    position: "",
    sector: "",
    country: "",

    // Participation
    participantType: "",
    interests: [] as string[],

    // Hébergement et préférences
    accommodation: "",
    dietaryRestrictions: "",

    // Communication
    newsletter: false,
    terms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Ici vous intégreriez avec votre système d'inscription
    alert("Merci pour votre inscription ! Nous vous recontacterons sous 48h.");
  };

  const participantTypes = [
    { value: "entrepreneur", label: "Entrepreneur PME (150€)" },
    { value: "institution", label: "Institution/ONG (100€)" },
    { value: "investor", label: "Investisseur/Financier (300€)" },
    { value: "student", label: "Étudiant/Chercheur (50€)" },
  ];

  const interestOptions = [
    "Accès au financement",
    "Marketing digital",
    "Tourisme responsable",
    "Innovation technologique",
    "Partenariats stratégiques",
    "Développement durable",
    "Réglementation",
    "Export/International",
  ];

  const accommodationOptions = [
    { value: "", label: "Sélectionnez une option" },
    { value: "hotel-partner", label: "Hôtel partenaire (tarif préférentiel)" },
    { value: "own-arrangement", label: "Hébergement personnel" },
    { value: "need-help", label: "Besoin d'aide pour l'hébergement" },
  ];

  return (
    <section
      id="inscription"
      className="py-24 bg-gradient-to-br from-teal-600 via-blue-700 to-purple-800 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-md text-yellow-200 rounded-full text-sm font-bold mb-6 border border-yellow-300/30">
            🎫 INSCRIPTION OUVERTE
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Manifestation
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
              d'Intérêt
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
            Rejoignez-nous pour cette expérience transformatrice. Remplissez le
            formulaire pour réserver votre place à IOCDAFRICA 2024.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-12 border-2 border-white/50 relative z-10"
        >
          {/* Personal Information */}
          <div className="mb-12">
            <h3 className="flex items-center text-2xl font-black text-gray-900 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-white" />
              </div>
              👤 Informations Personnelles
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Prénom *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 font-medium text-lg bg-white/80 backdrop-blur-sm"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Nom *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 font-medium text-lg bg-white/80 backdrop-blur-sm"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 font-medium text-lg bg-white/80 backdrop-blur-sm"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-3">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-teal-500/50 focus:border-teal-500 transition-all duration-300 font-medium text-lg bg-white/80 backdrop-blur-sm"
                  placeholder="+230 xxx xxxx"
                />
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="mb-8">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
              <Building className="w-5 h-5 mr-2 text-teal-600" />
              Informations Professionnelles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entreprise/Organisation *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Nom de votre entreprise"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Poste/Fonction *
                </label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Votre fonction"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secteur d'activité
                </label>
                <select
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Sélectionnez un secteur</option>
                  <option value="hotellerie">Hôtellerie</option>
                  <option value="transport">Transport touristique</option>
                  <option value="activites">Activités & Loisirs</option>
                  <option value="agence">Agence de voyage</option>
                  <option value="technologie">Technologie tourisme</option>
                  <option value="restauration">Restauration</option>
                  <option value="financement">Financement</option>
                  <option value="institution">Institution</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pays *
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Votre pays"
                />
              </div>
            </div>
          </div>

          {/* Participation Type */}
          <div className="mb-8">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
              <Calendar className="w-5 h-5 mr-2 text-teal-600" />
              Type de Participation
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {participantTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.participantType === type.value
                      ? "border-teal-500 bg-teal-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="participantType"
                    value={type.value}
                    checked={formData.participantType === type.value}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">
                      {type.label}
                    </div>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      formData.participantType === type.value
                        ? "border-teal-500 bg-teal-500"
                        : "border-gray-300"
                    }`}
                  >
                    {formData.participantType === type.value && (
                      <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Interests */}
          {/* <div className="mb-8">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
              <Heart className="w-5 h-5 mr-2 text-teal-600" />
              Centres d'Intérêt
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {interestOptions.map((interest) => (
                <label
                  key={interest}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                    formData.interests.includes(interest)
                      ? 'border-teal-500 bg-teal-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.interests.includes(interest)}
                    onChange={() => handleInterestChange(interest)}
                    className="sr-only"
                  />
                  <span className="text-sm text-gray-700">{interest}</span>
                  {formData.interests.includes(interest) && (
                    <CheckCircle className="w-4 h-4 text-teal-500 ml-auto" />
                  )}
                </label>
              ))}
            </div>
          </div> */}

          {/* Accommodation & Preferences */}
          <div className="mb-8">
            <h3 className="flex items-center text-xl font-semibold text-gray-900 mb-6">
              <MapPin className="w-5 h-5 mr-2 text-teal-600" />
              Hébergement & Préférences
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hébergement
                </label>
                <select
                  name="accommodation"
                  value={formData.accommodation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                >
                  {accommodationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Restrictions alimentaires
                </label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200"
                  placeholder="Végétarien, allergies, etc."
                />
              </div>
            </div>
          </div>

          {/* Terms and Newsletter */}
          <div className="mb-8 space-y-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleInputChange}
                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">
                Je souhaite recevoir les actualités IOCDAFRICA et les
                opportunités du réseau
              </span>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
              />
              <span className="text-sm text-gray-700">
                J'accepte les{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  conditions générales
                </a>
                et la{" "}
                <a href="#" className="text-teal-600 hover:underline">
                  politique de confidentialité
                </a>{" "}
                *
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5 mr-2" />
              Envoyer ma manifestation d'intérêt
            </button>
            <p className="text-sm text-gray-600 mt-4">
              Vous recevrez une confirmation par email dans les 48h avec les
              détails de paiement
            </p>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Email</h4>
            <p className="text-white">contact@iocdafrica.com</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Téléphone</h4>
            <p className="text-white">+230 xxx xxxx</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <h4 className="font-semibold text-white mb-2">Lieu</h4>
            <p className="text-white">Port Louis, Île Maurice</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
