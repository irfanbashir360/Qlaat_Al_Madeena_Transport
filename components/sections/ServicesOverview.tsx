import React from 'react';
import Link from 'next/link';
import { Truck, Container, Package, ArrowRight } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

export default function ServicesOverview() {
  const services = [
    {
      icon: <Package size={40} />,
      title: 'Raw Materials Transport',
      description: 'Specialized transport solutions for construction materials, industrial supplies, and bulk commodities across UAE.',
      features: ['Bulk Material Handling', 'Construction Supplies', 'Industrial Transport', 'Secure Loading'],
      link: '/services#raw-materials',
    },
    {
      icon: <Truck size={40} />,
      title: 'Heavy Truck Cargo',
      description: 'High-capacity heavy truck services for large-scale cargo operations with advanced safety protocols.',
      features: ['Large Capacity', 'Heavy Equipment', 'Long Distance', 'GPS Tracking'],
      link: '/services#heavy-truck',
    },
    {
      icon: <Container size={40} />,
      title: 'Light Truck Cargo',
      description: 'Flexible light truck services ideal for urban deliveries and smaller cargo requirements.',
      features: ['Fast Delivery', 'Urban Access', 'Flexible Scheduling', 'Cost Effective'],
      link: '/services#light-truck',
    },
  ];

  return (
    <Section background="gray">
      <SectionHeader
        title="Our Transport Services"
        subtitle="Comprehensive cargo transport solutions tailored to meet your specific logistics needs across Dubai and UAE"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="group">
            <div className="mb-4 text-primary group-hover:text-secondary transition-colors">
              {service.icon}
            </div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-2 mb-6">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href={service.link}
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold transition-colors group"
            >
              Learn More
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Card>
        ))}
      </div>
    </Section>
  );
}
