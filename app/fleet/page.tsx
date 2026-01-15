import React from 'react';
import { Metadata } from 'next';
import { Truck, Shield, Wrench, Gauge, MapPin, Check } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Our Fleet - Modern Transport Vehicles | Qlaat Al Madeena',
  description: 'Explore our modern, well-maintained fleet of heavy and light trucks equipped with GPS tracking and advanced safety features for reliable cargo transport across UAE.',
};

export default function FleetPage() {
  const vehicleCategories = [
    {
      name: 'Heavy Duty Trucks',
      count: '20+',
      capacity: 'Up to 30 tons',
      description: 'Modern heavy-duty trucks for large cargo and long-distance transport',
      features: [
        'GPS tracking enabled',
        'Regular maintenance schedule',
        'Advanced safety features',
        'Climate control options',
        'Hydraulic lifting systems',
      ],
    },
    {
      name: 'Medium Trucks',
      count: '15+',
      capacity: '10-20 tons',
      description: 'Versatile medium trucks ideal for various cargo types and distances',
      features: [
        'Flexible cargo space',
        'Urban-friendly design',
        'GPS tracking',
        'Efficient fuel consumption',
        'Quick loading systems',
      ],
    },
    {
      name: 'Light Trucks',
      count: '15+',
      capacity: 'Up to 5 tons',
      description: 'Agile light trucks perfect for urban deliveries and smaller loads',
      features: [
        'Compact & maneuverable',
        'Fast delivery capable',
        'GPS tracking',
        'Economical operations',
        'Easy access loading',
      ],
    },
  ];

  const specifications = [
    {
      category: 'Heavy Duty Trucks',
      specs: {
        'Engine Type': 'Diesel, Euro 5',
        'Transmission': 'Automatic/Manual',
        'Cargo Volume': '40-60 cubic meters',
        'Wheelbase': 'Long wheelbase',
        'Special Features': 'Tail lift, side doors, GPS',
      },
    },
    {
      category: 'Medium Trucks',
      specs: {
        'Engine Type': 'Diesel, Euro 4/5',
        'Transmission': 'Manual/Automatic',
        'Cargo Volume': '25-40 cubic meters',
        'Wheelbase': 'Medium wheelbase',
        'Special Features': 'Tail lift, GPS, cargo securing',
      },
    },
    {
      category: 'Light Trucks',
      specs: {
        'Engine Type': 'Diesel/Petrol',
        'Transmission': 'Manual',
        'Cargo Volume': '10-20 cubic meters',
        'Wheelbase': 'Short wheelbase',
        'Special Features': 'GPS, easy loading, covered cargo',
      },
    },
  ];

  const maintenanceFeatures = [
    {
      icon: <Wrench size={32} />,
      title: 'Regular Maintenance',
      description: 'All vehicles undergo scheduled maintenance every 5,000 km or monthly',
    },
    {
      icon: <Shield size={32} />,
      title: 'Safety Inspections',
      description: 'Comprehensive safety checks before every major trip',
    },
    {
      icon: <Gauge size={32} />,
      title: 'Performance Monitoring',
      description: 'Real-time monitoring of vehicle performance and diagnostics',
    },
    {
      icon: <MapPin size={32} />,
      title: 'GPS Tracking',
      description: 'All vehicles equipped with advanced GPS tracking systems',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Our Modern Fleet
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Well-maintained vehicles equipped with the latest technology for safe and efficient transport
          </p>
        </div>
      </Section>

      {/* Fleet Overview Stats */}
      <Section background="white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
              50+
            </div>
            <div className="text-gray-600">Total Vehicles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-gray-600">GPS Tracked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
              30+
            </div>
            <div className="text-gray-600">Tons Capacity</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-gray-600">Availability</div>
          </div>
        </div>
      </Section>

      {/* Vehicle Categories */}
      <Section background="gray">
        <SectionHeader
          title="Fleet Categories"
          subtitle="Diverse range of vehicles to meet all your transport requirements"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicleCategories.map((category, index) => (
            <Card key={index}>
              <div className="text-center mb-6">
                <Truck className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                  {category.name}
                </h3>
                <div className="flex justify-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="font-semibold">{category.count} Vehicles</span>
                  <span>|</span>
                  <span>{category.capacity}</span>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
              <ul className="space-y-2">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Check className="text-secondary flex-shrink-0" size={18} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technical Specifications */}
      <Section background="white">
        <SectionHeader
          title="Technical Specifications"
          subtitle="Detailed specifications of our fleet vehicles"
        />
        <div className="space-y-6">
          {specifications.map((spec, index) => (
            <Card key={index}>
              <h3 className="text-xl font-heading font-bold text-primary mb-4">
                {spec.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(spec.specs).map(([key, value]) => (
                  <div key={key} className="border-l-4 border-secondary pl-4">
                    <div className="text-sm text-gray-600 mb-1">{key}</div>
                    <div className="font-semibold text-gray-800">{value}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Maintenance & Safety */}
      <Section background="gray">
        <SectionHeader
          title="Maintenance & Safety Standards"
          subtitle="Our commitment to vehicle excellence and safety"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {maintenanceFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Fleet Gallery */}
      <Section background="white">
        <SectionHeader
          title="Fleet Gallery"
          subtitle="Take a look at our well-maintained vehicles"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-gray-900 rounded-xl h-64 flex items-center justify-center group overflow-hidden card-hover"
            >
              <div className="text-white/20 text-2xl">Fleet Image {item}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Modern Features */}
      <Section background="primary">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Modern Technology Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <h3 className="text-xl font-heading font-bold mb-3">GPS Tracking</h3>
              <p className="text-gray-200">
                Real-time location tracking for all vehicles, providing you with complete visibility of your shipment.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <h3 className="text-xl font-heading font-bold mb-3">Route Optimization</h3>
              <p className="text-gray-200">
                Advanced route planning software ensures the most efficient delivery paths.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <h3 className="text-xl font-heading font-bold mb-3">Safety Systems</h3>
              <p className="text-gray-200">
                Modern safety features including ABS, traction control, and collision avoidance systems.
              </p>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
              <h3 className="text-xl font-heading font-bold mb-3">Communication</h3>
              <p className="text-gray-200">
                Direct communication channels with drivers for real-time updates and coordination.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Book Our Fleet
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to transport your cargo with our modern, reliable fleet? Get a quote today.
          </p>
          <Button href="/quote" variant="secondary" size="lg">
            Request Fleet Booking
          </Button>
        </div>
      </Section>
    </>
  );
}
