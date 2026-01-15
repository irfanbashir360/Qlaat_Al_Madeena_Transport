'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: 'General',
      questions: [
        {
          q: 'What services does Qlaat Al Madeena Transport offer?',
          a: 'We offer three main services: Raw Materials Transport by Road, Cargo Transport by Heavy Trucks, and Cargo Transport by Light Trucks. We serve all types of businesses across UAE with reliable, licensed transport solutions.',
        },
        {
          q: 'What areas do you cover?',
          a: 'We provide comprehensive coverage across all seven UAE emirates, including Dubai, Abu Dhabi, Sharjah, Ajman, Fujairah, Ras Al Khaimah, and Umm Al Quwain.',
        },
        {
          q: 'Are you licensed and insured?',
          a: 'Yes, we are fully licensed by Dubai Economic Development (License No: 1572603, Register No: 2756051) and maintain comprehensive insurance coverage for all our operations.',
        },
      ],
    },
    {
      category: 'Booking & Pricing',
      questions: [
        {
          q: 'How do I get a quote?',
          a: 'You can get a quote by filling out our online quote request form, calling us at +971-54-7502525, or emailing us at Dubaiuaeproservices@gmail.com. We typically respond within a few hours.',
        },
        {
          q: 'What factors affect the transport cost?',
          a: 'Transport costs depend on several factors including distance, cargo weight and dimensions, service type (heavy/light truck), urgency, and special handling requirements.',
        },
        {
          q: 'Do you offer same-day delivery?',
          a: 'Yes, we offer same-day delivery services for urgent shipments within Dubai and selected nearby areas. Please contact us to check availability for your specific requirement.',
        },
      ],
    },
    {
      category: 'Operations',
      questions: [
        {
          q: 'Can I track my shipment?',
          a: 'Yes, all our vehicles are equipped with GPS tracking systems. Once your shipment is dispatched, you can track it in real-time or request updates from our team.',
        },
        {
          q: 'What are your operating hours?',
          a: 'Our standard operating hours are Sunday to Saturday, 7:00 AM to 8:00 PM. However, we can arrange special timing for urgent deliveries and provide 24/7 emergency services when needed.',
        },
        {
          q: 'Do you provide loading and unloading services?',
          a: 'Yes, our team can assist with loading and unloading services. Please mention this requirement when requesting a quote so we can provide accurate pricing.',
        },
        {
          q: 'What if my cargo gets damaged?',
          a: 'We take utmost care in handling all cargo and have comprehensive insurance coverage. In the rare event of damage, we have a clear claims process and work quickly to resolve any issues.',
        },
      ],
    },
    {
      category: 'Requirements',
      questions: [
        {
          q: 'What documents do I need for cargo transport?',
          a: 'Basic documentation requirements include cargo details, pickup and delivery addresses, and your contact information. For certain types of cargo, additional permits or documentation may be required.',
        },
        {
          q: 'Are there restrictions on what can be transported?',
          a: 'We transport a wide range of goods. However, hazardous materials, illegal items, and certain restricted goods require special permits or cannot be transported. Please contact us to discuss your specific cargo.',
        },
        {
          q: 'Do you require advance booking?',
          a: 'While advance booking is recommended to ensure availability, we also accommodate urgent requests based on fleet availability. Same-day bookings may incur additional charges.',
        },
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Find answers to common questions about our transport services
          </p>
        </div>
      </Section>

      {/* FAQ Sections */}
      {faqCategories.map((category, categoryIndex) => (
        <Section
          key={categoryIndex}
          background={categoryIndex % 2 === 0 ? 'white' : 'gray'}
        >
          <SectionHeader title={category.category} centered={false} />
          <div className="space-y-4">
            {category.questions.map((faq, index) => {
              const globalIndex = categoryIndex * 100 + index;
              const isOpen = openIndex === globalIndex;

              return (
                <Card key={index} hover={false}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                    className="w-full text-left flex items-start justify-between gap-4"
                  >
                    <h3 className="text-lg font-heading font-semibold text-primary">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      className={`flex-shrink-0 text-primary transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </Section>
      ))}

      {/* Contact CTA */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
            <Button
              href="tel:+971547502525"
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
            >
              Call Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
