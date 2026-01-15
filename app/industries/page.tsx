import React from 'react';
import { Metadata } from 'next';
import { Building2, Factory, ShoppingCart, Droplet, Package, Wheat } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Industries We Serve - Transport Solutions by Industry | Qlaat Al Madeena',
  description: 'Specialized transport solutions for construction, manufacturing, retail, oil & gas, e-commerce, and more industries across UAE.',
};

export default function IndustriesPage() {
  const industries = [
    {
      icon: <Building2 size={48} />,
      name: 'Construction & Building Materials',
      description: 'Specialized transport for cement, steel, sand, gravel, and all construction supplies',
      solutions: [
        'Raw material delivery to construction sites',
        'Heavy equipment transport',
        'Bulk material handling',
        'Just-in-time delivery',
      ],
    },
    {
      icon: <Factory size={48} />,
      name: 'Manufacturing & Industrial',
      description: 'Reliable transport for manufacturing inputs, finished goods, and industrial equipment',
      solutions: [
        'Raw material supply chain',
        'Finished goods distribution',
        'Inter-facility transfers',
        'Industrial equipment moving',
      ],
    },
    {
      icon: <ShoppingCart size={48} />,
      name: 'Retail & FMCG',
      description: 'Fast and efficient distribution for retail businesses and consumer goods',
      solutions: [
        'Store deliveries',
        'Distribution center operations',
        'Last-mile delivery',
        'Inventory management support',
      ],
    },
    {
      icon: <Droplet size={48} />,
      name: 'Oil & Gas',
      description: 'Secure transport for oil & gas sector materials and equipment',
      solutions: [
        'Equipment transport',
        'Material supply to sites',
        'Safety-compliant transport',
        'Specialized handling',
      ],
    },
    {
      icon: <Package size={48} />,
      name: 'E-commerce & Distribution',
      description: 'Flexible delivery solutions for online retailers and distribution centers',
      solutions: [
        'Fulfillment center deliveries',
        'Multi-stop routing',
        'Express delivery options',
        'Returns handling',
      ],
    },
    {
      icon: <Wheat size={48} />,
      name: 'Agriculture & Food',
      description: 'Temperature-sensitive and time-critical transport for food products',
      solutions: [
        'Fresh produce transport',
        'Bulk agricultural materials',
        'Time-sensitive deliveries',
        'Proper handling protocols',
      ],
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Tailored transport solutions for diverse industries across UAE
          </p>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section background="white">
        <SectionHeader
          title="Specialized Industry Solutions"
          subtitle="We understand the unique requirements of different industries and provide customized transport solutions"
        />
        <div className="space-y-12">
          {industries.map((industry, index) => (
            <Card key={index} padding="lg">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="text-primary mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {industry.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                </div>
                <div className="lg:col-span-2">
                  <h4 className="font-heading font-semibold text-lg text-primary mb-4">
                    Our Solutions
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {industry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            We serve many other industries. Contact us to discuss your specific transport needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="secondary" size="lg">
              Get Custom Quote
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
        </div>
      </Section>
    </>
  );
}
