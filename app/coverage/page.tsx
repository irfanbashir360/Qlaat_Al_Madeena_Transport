import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { MapPin, Check, Clock, Truck } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const GoogleMap = dynamic(() => import('@/components/ui/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <div className="text-sm font-semibold">Loading Map...</div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'Coverage Areas - Service Coverage Across UAE | Qlaat Al Madeena',
  description: 'We provide comprehensive transport services across Dubai and all UAE emirates with efficient route planning and timely delivery.',
};

export default function CoveragePage() {
  const emirates = [
    {
      name: 'Dubai',
      description: 'Complete coverage across all areas including Al-Khabeesi, Deira, Bur Dubai, Jebel Ali, and more',
      deliveryTime: 'Same Day Available',
      areas: ['Al-Khabeesi', 'Deira', 'Bur Dubai', 'Jebel Ali', 'Business Bay', 'Dubai Marina', 'Al Quoz'],
    },
    {
      name: 'Abu Dhabi',
      description: 'Full service coverage throughout Abu Dhabi and surrounding areas',
      deliveryTime: '1-2 Days',
      areas: ['Abu Dhabi City', 'Al Ain', 'Musaffah', 'Khalifa City', 'Yas Island'],
    },
    {
      name: 'Sharjah',
      description: 'Comprehensive transport services across Sharjah emirate',
      deliveryTime: 'Same Day Available',
      areas: ['Sharjah City', 'Industrial Area', 'Al Nahda', 'Muwaileh'],
    },
    {
      name: 'Ajman',
      description: 'Complete coverage across Ajman with flexible scheduling',
      deliveryTime: 'Same Day Available',
      areas: ['Ajman City', 'Al Nuaimiya', 'Industrial Area'],
    },
    {
      name: 'Ras Al Khaimah',
      description: 'Efficient transport services to and from RAK',
      deliveryTime: '1-2 Days',
      areas: ['RAK City', 'Industrial Zone', 'Al Hamra'],
    },
    {
      name: 'Umm Al Quwain',
      description: 'Reliable transport coverage across UAQ',
      deliveryTime: '1 Day',
      areas: ['UAQ City', 'Industrial Area'],
    },
    {
      name: 'Fujairah',
      description: 'Cross-emirate transport to Fujairah',
      deliveryTime: '1-2 Days',
      areas: ['Fujairah City', 'Port Area'],
    },
  ];

  const features = [
    {
      icon: <MapPin size={32} />,
      title: 'Strategic Routes',
      description: 'Optimized delivery routes for efficient transport across all emirates',
    },
    {
      icon: <Clock size={32} />,
      title: 'Flexible Scheduling',
      description: 'Same-day, next-day, and scheduled delivery options available',
    },
    {
      icon: <Truck size={32} />,
      title: 'Complete Coverage',
      description: 'No location too far - we serve all major and remote areas',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Service Coverage Areas
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Comprehensive transport services across all UAE emirates
          </p>
        </div>
      </Section>

      {/* Features */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Interactive Map Placeholder */}
      <Section background="gray">
        <SectionHeader
          title="UAE Coverage Map"
          subtitle="We serve all seven emirates with reliable transport solutions"
        />
        <Card padding="lg">
          <GoogleMap
            center={{ lat: 24.4539, lng: 54.3773 }}
            zoom={8}
            height="384px"
          />
        </Card>
      </Section>

      {/* Emirates Coverage Details */}
      <Section background="white">
        <SectionHeader
          title="Emirates We Serve"
          subtitle="Detailed coverage information for each emirate"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emirates.map((emirate, index) => (
            <Card key={index}>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-1">
                    {emirate.name}
                  </h3>
                  <div className="text-sm text-secondary font-semibold">{emirate.deliveryTime}</div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{emirate.description}</p>
              <div className="space-y-2">
                <div className="font-semibold text-sm text-gray-600 mb-2">Coverage Areas:</div>
                {emirate.areas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <Check size={16} className="text-secondary" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Need Transport to a Specific Location?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Contact us to discuss your specific delivery requirements
          </p>
          <Button href="/quote" variant="secondary" size="lg">
            Get Quote for Your Location
          </Button>
        </div>
      </Section>
    </>
  );
}
