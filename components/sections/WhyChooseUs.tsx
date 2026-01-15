import React from 'react';
import { Shield, Users, Award, Clock, MapPin, Wrench } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Licensed & Certified',
      description: 'Fully authorized by Dubai Economic Development with all necessary permits and certifications.',
    },
    {
      icon: <Clock size={32} />,
      title: 'On-Time Delivery',
      description: 'Reliable and punctual service with 98% on-time delivery rate across all our operations.',
    },
    {
      icon: <Users size={32} />,
      title: 'Professional Team',
      description: 'Experienced drivers and logistics professionals committed to safe and efficient transport.',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Well-Maintained Fleet',
      description: 'Modern, regularly serviced vehicles ensuring reliability and safety for your cargo.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Wide Coverage',
      description: 'Comprehensive coverage across Dubai and UAE with strategic route planning.',
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Service',
      description: 'Committed to excellence with a focus on customer satisfaction and cargo safety.',
    },
  ];

  return (
    <Section background="white">
      <SectionHeader
        title="Why Choose Qlaat Al Madeena"
        subtitle="We combine experience, reliability, and professionalism to deliver exceptional transport services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading font-bold text-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
