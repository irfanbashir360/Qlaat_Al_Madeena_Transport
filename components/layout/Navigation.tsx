'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Raw Materials Transport', href: '/services#raw-materials' },
        { name: 'Heavy Truck Cargo', href: '/services#heavy-truck' },
        { name: 'Light Truck Cargo', href: '/services#light-truck' },
      ],
    },
    { name: 'Fleet', href: '/fleet' },
    { name: 'Coverage', href: '/coverage' },
    { name: 'Industries', href: '/industries' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 text-sm">
        <div className="container-custom flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:+971547502525" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone size={16} />
              <span>+971-54-7502525</span>
            </a>
            <a href="mailto:Dubaiuaeproservices@gmail.com" className="hidden sm:flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={16} />
              <span>Dubaiuaeproservices@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">License No: 1572603 | Register No: 2756051</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white'
          }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                QM
              </div>
              <div>
                <div className="font-heading font-bold text-xl text-primary leading-tight">
                  Qlaat Al Madeena
                </div>
                <div className="text-xs text-gray-600">Transport L.L.C</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) =>
                link.submenu ? (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors">
                      {link.name}
                      <ChevronDown size={16} />
                    </button>
                    <div
                      className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-lg py-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button href="/quote" variant="secondary" size="sm">
                Get Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) =>
                  link.submenu ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium flex items-center justify-between"
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${servicesOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>
                      {servicesOpen && (
                        <div className="pl-4 mt-1">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
                <Button href="/quote" variant="secondary" className="mt-4">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
