import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Support", href: "/support" }
  ];

  const services = [
    "",
    "Agro Consultancy",
    "Fast Delivery",
    "Technical Support",
    "Custom Blending",
    "Training Programs"
  ];

  const legalLinks = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" }
  ];

  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <img
                src="/logo.svg"
                alt="Jagat Fertilizer Logo"
                className="w-20 h-20 object-contain"
              />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leading provider of premium fertilizers and agricultural solutions.
              Trusted by farmers for over two decades with commitment to sustainable farming practices.
            </p>

            {/* Social Media Buttons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61576316225650"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-green-600 hover:bg-gray-100"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://x.com/jagatfertilizer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-green-600 hover:bg-gray-100"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.instagram.com/jagatfertilizer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-green-600 hover:bg-gray-100"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/rahul-rajput-jfc/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-green-600 hover:bg-gray-100"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://www.youtube.com/@jagatfertilizer3096"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-green-600 hover:bg-gray-100"
                >
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href}>
                    <a className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-green-600 transition-colors duration-200 text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div className="text-gray-600 text-sm">
                  <p>Gata No\122, Mohamad Karimpur Urf Dhakar, Uttar Pradesh, 203131 India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">+91 7900400900</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-600 text-sm">info.jagatfertilizer@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © 2025 Jagat Fertilizer and Chemical. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a className="text-gray-600 hover:text-green-600 transition-colors duration-200">
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              Developed and Managed by{" "}
              <a
                href="https://greatertechhub.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                GreaterTechHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
