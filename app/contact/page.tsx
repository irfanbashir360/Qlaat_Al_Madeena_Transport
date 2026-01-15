'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

const GoogleMap = dynamic(() => import('@/components/ui/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center">
      <div className="text-center text-gray-500">
        <div className="text-sm font-semibold">Loading Map...</div>
      </div>
    </div>
  ),
});

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you shortly.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+971-54-7502525',
      link: 'tel:+971547502525',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'Dubaiuaeproservices@gmail.com',
      link: 'mailto:Dubaiuaeproservices@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      content: 'Al-Khabeesi area, Dubai, UAE',
      link: '#',
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Sun - Sat: 7:00 AM - 8:00 PM',
      link: '#',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Have questions? We're here to help. Contact us today.
          </p>
        </div>
      </Section>

      {/* Contact Information Cards */}
      <Section background="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                {info.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-primary mb-2">
                {info.title}
              </h3>
              <a
                href={info.link}
                className="text-gray-700 hover:text-secondary transition-colors"
              >
                {info.content}
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Contact Form & Map */}
      <Section background="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <Card padding="lg">
              <form onSubmit={handleSubmit}>
                <Input
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+971-XX-XXXXXXX"
                  required
                />
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                />
                <Textarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                />
                <Button type="submit" variant="secondary" className="w-full" icon={<Send size={20} />}>
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Map & Additional Info */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
              Our Location
            </h2>
            <Card padding="lg" className="mb-6">
              <div className="mb-6">
                <GoogleMap height="320px" />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Address</h3>
                  <p className="text-gray-700">
                    Qlaat Al Madeena Transport L.L.C<br />
                    Al-Khabeesi area<br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">License Information</h3>
                  <p className="text-gray-700">
                    License No: 1572603<br />
                    Register No: 2756051
                  </p>
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card padding="lg" className="bg-gradient-to-br from-primary to-primary-dark text-white">
              <h3 className="text-xl font-heading font-bold mb-4">24/7 Emergency Service</h3>
              <p className="mb-4">For urgent transport requirements, call us anytime:</p>
              <a
                href="tel:+971547502525"
                className="text-2xl font-bold hover:text-secondary transition-colors"
              >
                +971-54-7502525
              </a>
            </Card>
          </div>
        </div>
      </Section>

      {/* WhatsApp CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-4">
            Prefer WhatsApp?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Chat with us directly on WhatsApp for quick responses
          </p>
          <Button
            href="https://wa.me/971547502525"
            variant="secondary"
            size="lg"
          >
            Start WhatsApp Chat
          </Button>
        </div>
      </Section>
    </>
  );
}
