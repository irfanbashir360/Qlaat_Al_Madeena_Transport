import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function CTA() {
  return (
    <Section background="primary" className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 20px)',
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-200 mb-10 leading-relaxed">
          Get an instant quote for your transport needs or speak with our logistics experts. We're here to provide the best transport solution for your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            href="/quote"
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={20} />}
          >
            Request a Quote
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
          >
            Contact Us
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="tel:0555353942"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Phone className="text-secondary" size={24} />
            <div className="text-left">
              <div className="text-sm text-gray-200">Call Us Now</div>
              <div className="font-semibold">0555353942</div>
            </div>
          </a>
          <a
            href="mailto:contact@qamtransport.com"
            className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Mail className="text-secondary" size={24} />
            <div className="text-left">
              <div className="text-sm text-gray-200">Email Us</div>
              <div className="font-semibold text-sm">Get in Touch</div>
            </div>
          </a>
        </div>
      </div>
    </Section>
  );
}
