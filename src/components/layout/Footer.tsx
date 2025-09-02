import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À Propos" },
    { href: "#programme", label: "Programme" },
    // { href: "#intervenants", label: "Intervenants" },
    { href: "#inscription", label: "Inscription" },
  ];

  const partners = [
    "Agence Française de Développement (AFD)",
    "Banque Africaine de Développement (BAD)",
    "Organisation Mondiale du Tourisme",
    "Commission de l'Océan Indien (COI)",
    "Chambre de Commerce Maurice",
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">IO</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">IOCDAFRICA</h3>
                <p className="text-sm text-gray-400">Tourisme Durable</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              La conférence de référence pour le développement du tourisme
              durable dans l'Océan Indien et l'Afrique.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:iocdafrica.edu@gmail.com"
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    iocdafrica.edu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Téléphone</p>
                  <a
                    href="tel:+230xxxxxxx"
                    className="text-white hover:text-teal-400 transition-colors"
                  >
                    Whatsapp 57509443
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-400 text-sm">Lieu</p>
                  <p className="text-white">
                    La Louise Q. Bornes
                    <br />
                    Île Maurice
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Partenaires</h4>
            <ul className="space-y-2">
              {partners.map((partner, index) => (
                <li
                  key={index}
                  className="text-gray-400 text-sm leading-relaxed"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 IOCDAFRICA. Tous droits réservés.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-400 transition-colors"
              >
                Conditions générales
              </a>
            </div>
          </div>
        </div>

        {/* Event Info Banner */}
        <div className="border-t border-gray-800 py-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              📅 <strong>18-19 Septembre 2024</strong> • 🏝️{" "}
              <strong>Île Maurice</strong> • 🎯{" "}
              <strong>500+ Participants</strong>
            </p>
            <p className="text-teal-400 text-sm font-medium">
              Transformons ensemble l'avenir du tourisme durable dans l'Océan
              Indien
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
