import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Target, Eye, Award, Shield, Clock, Users } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Card from '@/components/ui/Card';

const GoogleMap = dynamic(() => import('@/components/ui/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <div className="text-sm font-semibold">Loading Map...</div>
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'About Us - Qlaat Al Madeena Transport',
  description: 'Learn about Qlaat Al Madeena Transport L.L.C, your trusted transport partner in Dubai. Licensed by Dubai Economic Development, we provide professional cargo transport services.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2014', event: 'Company Founded', description: 'Qlaat Al Madeena Transport established in Dubai' },
    { year: '2016', event: 'Fleet Expansion', description: 'Expanded fleet to 25+ vehicles' },
    { year: '2019', event: '1000+ Deliveries', description: 'Reached milestone of 1000 successful deliveries' },
    { year: '2021', event: 'GPS Integration', description: 'Implemented advanced GPS tracking system' },
    { year: '2024', event: '5000+ Deliveries', description: 'Celebrating over 5000 successful deliveries' },
  ];

  const values = [
    {
      icon: <Shield size={32} />,
      title: 'Safety First',
      description: 'We prioritize the safety of your cargo and our team in every operation.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Punctuality',
      description: 'On-time delivery is our commitment, ensuring your schedules are never disrupted.',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.',
    },
    {
      icon: <Users size={32} />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority, and we go the extra mile to ensure it.',
    },
  ];

  const certifications = [
    'Dubai Economic Development License No: 1572603',
    'Register No: 2756051',
    'Licensed Transport Operator',
    'ISO Quality Standards Compliant',
    'Safety & Environmental Compliance',
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            About Qlaat Al Madeena Transport
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Your trusted transport partner in Dubai, delivering excellence since 2014
          </p>
        </div>
      </Section>

      {/* Company Introduction */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Qlaat Al Madeena Transport L.L.C S.O.C</strong> (قلعة المدينة للنقليات) is a Dubai-based logistics and transportation company specializing in professional cargo transport services across the UAE.
              </p>
              <p>
                Licensed by Dubai Economic Development, we operate with full legal authorization and maintain the highest standards of safety and professionalism in all our operations. Our strategic location in the Al-Khabeesi area of Dubai enables us to provide efficient transport services throughout the emirate and beyond.
              </p>
              <p>
                With over a decade of experience in the logistics industry, we have built a reputation for reliability, punctuality, and excellence. Our modern fleet and experienced team ensure that your cargo is transported safely and delivered on time, every time.
              </p>
              <p>
                As a Limited Liability Company with Single Owner structure, we maintain agile decision-making processes while upholding corporate responsibility and professional standards in all our business dealings.
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-white/20 text-6xl">Company Image</div>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card padding="lg">
            <Target className="text-primary mb-4" size={48} />
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide reliable, safe, and efficient cargo transport solutions that exceed our clients' expectations. We are committed to building long-term partnerships through consistent service excellence, professional conduct, and unwavering dedication to customer satisfaction.
            </p>
          </Card>
          <Card padding="lg">
            <Eye className="text-primary mb-4" size={48} />
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the most trusted and preferred transport partner in the UAE, recognized for our commitment to excellence, innovation in logistics solutions, and contribution to the region's economic growth through superior transport services.
            </p>
          </Card>
        </div>
      </Section>

      {/* Values */}
      <Section background="white">
        <SectionHeader
          title="Our Core Values"
          subtitle="The principles that guide everything we do"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white mb-4 shadow-lg mx-auto">
                {value.icon}
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Company History Timeline */}
      <Section background="gray">
        <SectionHeader
          title="Our Journey"
          subtitle="Milestones that mark our growth and commitment to excellence"
        />
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden md:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
                  }`}
              >
                <Card hover={false} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white hidden md:block"></div>

                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-heading font-bold text-secondary">
                      {milestone.year}
                    </span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {milestone.event}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Certifications & Licenses */}
      <Section background="white">
        <SectionHeader
          title="Certifications & Licenses"
          subtitle="Fully authorized and compliant with all UAE regulations"
        />
        <Card padding="lg" className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-start gap-3">
                <Award className="text-secondary flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-sm text-gray-600 mb-1">Legal Type</div>
                <div className="font-semibold text-primary">Limited Liability Company - Single Owner</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">License Number</div>
                <div className="font-semibold text-primary">1572603</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Register Number</div>
                <div className="font-semibold text-primary">2756051</div>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* Location */}
      <Section background="gray">
        <SectionHeader
          title="Our Location"
          subtitle="Strategically positioned in Dubai for efficient service delivery"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card padding="lg">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Office Address
            </h3>
            <div className="space-y-3 text-gray-700">
              <p className="text-lg">
                <strong>Qlaat Al Madeena Transport L.L.C</strong>
              </p>
              <p>Al-Khabeesi area</p>
              <p>Dubai, United Arab Emirates</p>
              <div className="pt-4 space-y-2">
                <p>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+971547502525" className="text-secondary hover:underline">
                    +971-54-7502525
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:Dubaiuaeproservices@gmail.com" className="text-secondary hover:underline">
                    Dubaiuaeproservices@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </Card>
          <div className="rounded-2xl overflow-hidden">
            <GoogleMap height="384px" />
          </div>
        </div>
      </Section>
    </>
  );
}
