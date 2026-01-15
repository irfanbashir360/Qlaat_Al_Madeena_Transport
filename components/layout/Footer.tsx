import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'Industries', href: '/industries' },
    { name: 'Get Quote', href: '/quote' },
  ];

  const services = [
    { name: 'Raw Materials Transport', href: '/services#raw-materials' },
    { name: 'Heavy Truck Cargo', href: '/services#heavy-truck' },
    { name: 'Light Truck Cargo', href: '/services#light-truck' },
  ];

  const resources = [
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary font-bold text-xl">
                QM
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-tight">
                  Qlaat Al Madeena
                </div>
                <div className="text-sm opacity-90">Transport L.L.C</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted transport partner in Dubai, providing professional cargo transport services with reliability and excellence.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">License No:</span>
                <span>1572603</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-semibold">Register No:</span>
                <span>2756051</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-secondary transition-colors inline-block"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-gray-300 hover:text-secondary transition-colors inline-block text-sm"
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-secondary" />
                <div>
                  <p className="text-gray-300">Al-Khabeesi area</p>
                  <p className="text-gray-300">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="flex-shrink-0 text-secondary" />
                <a
                  href="tel:+971547502525"
                  className="text-gray-300 hover:text-secondary transition-colors"
                >
                  +971-54-7502525
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="flex-shrink-0 text-secondary" />
                <a
                  href="mailto:Dubaiuaeproservices@gmail.com"
                  className="text-gray-300 hover:text-secondary transition-colors break-all"
                >
                  Dubaiuaeproservices@gmail.com
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>
              &copy; {currentYear} Qlaat Al Madeena Transport L.L.C S.O.C. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/contact" className="hover:text-secondary transition-colors">
                Contact Us
              </Link>
              <Link href="/faq" className="hover:text-secondary transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
