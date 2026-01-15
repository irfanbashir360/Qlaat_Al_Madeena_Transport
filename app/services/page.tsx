import React from 'react';
import { Metadata } from 'next';
import { Package, Truck, Container, Check, Download, HelpCircle } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Services - Cargo Transport Solutions | Qlaat Al Madeena',
  description: 'Professional cargo transport services in Dubai: Raw materials transport, heavy truck cargo, and light truck cargo. Licensed, reliable, and efficient logistics solutions.',
};

export default function ServicesPage() {
  const services = [
    {
      id: 'raw-materials',
      icon: <Package size={48} />,
      title: 'Raw Materials Transport by Road',
      description: 'Specialized transport solutions for construction materials, industrial supplies, and bulk commodities across UAE.',
      applications: [
        'Construction materials (cement, sand, gravel, steel)',
        'Industrial raw materials',
        'Bulk commodities',
        'Building supplies',
        'Manufacturing inputs',
      ],
      industries: [
        'Construction & Building',
        'Manufacturing',
        'Industrial Production',
        'Mining & Quarrying',
      ],
      specifications: [
        'Heavy-duty vehicles for bulk transport',
        'Specialized loading equipment',
        'Secure cargo containment systems',
        'Weather-protected transport options',
      ],
      safety: [
        'Certified drivers with bulk material expertise',
        'Load securing protocols',
        'Weight distribution management',
        'Compliance with UAE transport regulations',
      ],
    },
    {
      id: 'heavy-truck',
      icon: <Truck size={48} />,
      title: 'Cargo Transport by Heavy Trucks',
      description: 'High-capacity heavy truck services for large-scale cargo operations with advanced safety protocols and GPS tracking.',
      applications: [
        'Large machinery and equipment',
        'Industrial cargo',
        'Heavy construction equipment',
        'Oversized load transport',
        'Long-distance freight',
      ],
      industries: [
        'Heavy Industry',
        'Construction',
        'Oil & Gas',
        'Manufacturing',
      ],
      specifications: [
        'Fleet of modern heavy-duty trucks',
        'Capacity: Up to 30+ tons',
        'GPS tracking on all vehicles',
        'Climate-controlled options available',
      ],
      safety: [
        'Experienced heavy vehicle operators',
        'Regular vehicle maintenance',
        'Advanced safety features',
        'Comprehensive insurance coverage',
      ],
    },
    {
      id: 'light-truck',
      icon: <Container size={48} />,
      title: 'Cargo Transport by Light Trucks',
      description: 'Flexible light truck services ideal for urban deliveries, smaller cargo requirements, and time-sensitive shipments.',
      applications: [
        'Urban deliveries',
        'Retail distribution',
        'E-commerce fulfillment',
        'Document and parcel transport',
        'Small to medium cargo',
      ],
      industries: [
        'Retail & FMCG',
        'E-commerce',
        'Small Business',
        'Distribution',
      ],
      specifications: [
        'Versatile light truck fleet',
        'Capacity: Up to 5 tons',
        'Suitable for narrow urban streets',
        'Quick loading and unloading',
      ],
      safety: [
        'Professional drivers',
        'Secure cargo handling',
        'Real-time delivery tracking',
        'Flexible scheduling',
      ],
    },
  ];

  const faqs = [
    {
      question: 'What areas do you cover?',
      answer: 'We provide transport services throughout Dubai and across the UAE, with coverage extending to all major emirates.',
    },
    {
      question: 'Do you offer same-day delivery?',
      answer: 'Yes, we offer same-day delivery services for urgent shipments. Contact us for availability and pricing.',
    },
    {
      question: 'How do you ensure cargo safety?',
      answer: 'We use secure loading practices, experienced drivers, GPS tracking, and comprehensive insurance coverage to ensure your cargo safety.',
    },
    {
      question: 'Can I track my shipment?',
      answer: 'Yes, all our vehicles are equipped with GPS tracking. You can monitor your shipment in real-time.',
    },
    {
      question: 'What types of cargo do you handle?',
      answer: 'We handle a wide range of cargo including raw materials, industrial equipment, construction materials, retail goods, and more.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Our Transport Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Comprehensive cargo transport solutions tailored to your business needs
          </p>
        </div>
      </Section>

      {/* Services Overview */}
      <Section background="white">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Qlaat Al Madeena Transport, we offer three core transport services designed to meet diverse logistics requirements across UAE. Each service is backed by our commitment to reliability, safety, and professional excellence.
          </p>
        </div>
      </Section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          background={index % 2 === 0 ? 'gray' : 'white'}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="text-primary mb-4">{service.icon}</div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  Applications & Use Cases
                </h3>
                <ul className="space-y-2">
                  {service.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-secondary flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries Served */}
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  Industries We Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>

              <Button href="/quote" variant="secondary">
                Request Quote for This Service
              </Button>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              {/* Vehicle Specifications */}
              <Card>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Vehicle Specifications
                </h3>
                <ul className="space-y-2">
                  {service.specifications.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Safety Protocols */}
              <Card>
                <h3 className="text-xl font-heading font-bold text-primary mb-4">
                  Safety & Quality Standards
                </h3>
                <ul className="space-y-2">
                  {service.safety.map((safety, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{safety}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Image Placeholder */}
              <div className="bg-gray-900 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-white/20 text-4xl">Service Image</div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* Service Comparison Table */}
      <Section background="white">
        <SectionHeader
          title="Service Comparison"
          subtitle="Choose the right transport solution for your needs"
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">Raw Materials</th>
                <th className="p-4 text-left">Heavy Truck</th>
                <th className="p-4 text-left">Light Truck</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Capacity</td>
                <td className="p-4">Bulk/Variable</td>
                <td className="p-4">Up to 30+ tons</td>
                <td className="p-4">Up to 5 tons</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Best For</td>
                <td className="p-4">Construction materials</td>
                <td className="p-4">Heavy machinery</td>
                <td className="p-4">Urban delivery</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">GPS Tracking</td>
                <td className="p-4">✓</td>
                <td className="p-4">✓</td>
                <td className="p-4">✓</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="p-4 font-semibold">Delivery Speed</td>
                <td className="p-4">Standard</td>
                <td className="p-4">Standard</td>
                <td className="p-4">Fast</td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Typical Range</td>
                <td className="p-4">Regional</td>
                <td className="p-4">Long distance</td>
                <td className="p-4">Urban/Local</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our services"
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} hover={false}>
              <div className="flex items-start gap-4">
                <HelpCircle className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-lg font-heading font-bold text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Request a quote for your transport needs or contact us to discuss your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/quote" variant="secondary" size="lg">
              Get Instant Quote
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
