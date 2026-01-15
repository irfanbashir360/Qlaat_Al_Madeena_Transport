'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ahmed Al-Mansouri',
      company: 'Al-Mansouri Construction',
      role: 'Project Manager',
      content: 'Qlaat Al Madeena has been our go-to transport partner for over 3 years. Their reliability in delivering construction materials on time has been crucial to our project success. Highly professional team!',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Dubai Industrial Supplies',
      role: 'Operations Director',
      content: 'Outstanding service! The team is always responsive, and their fleet is well-maintained. We trust them with our most critical shipments across UAE. The GPS tracking feature gives us peace of mind.',
      rating: 5,
    },
    {
      name: 'Mohammed Hassan',
      company: 'Emirates Trading LLC',
      role: 'Logistics Coordinator',
      content: 'Professional, efficient, and cost-effective. Qlaat Al Madeena Transport has streamlined our logistics operations. Their attention to detail and commitment to safety is impressive.',
      rating: 5,
    },
    {
      name: 'Fatima Al-Hashimi',
      company: 'Al-Hashimi Group',
      role: 'CEO',
      content: 'We have worked with several transport companies in Dubai, but Qlaat Al Madeena stands out for their professionalism and customer service. They handle our cargo with utmost care.',
      rating: 5,
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section background="gray">
      <SectionHeader
        title="What Our Clients Say"
        subtitle="Don't just take our word for it - hear from businesses that trust us with their transport needs"
      />

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 relative">
          <Quote className="absolute top-8 left-8 text-secondary/20" size={48} />

          <div className="relative z-10">
            <div className="flex gap-1 mb-6 justify-center">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} size={24} className="fill-secondary text-secondary" />
              ))}
            </div>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
              "{currentTestimonial.content}"
            </p>

            <div className="text-center">
              <div className="font-heading font-bold text-xl text-primary mb-1">
                {currentTestimonial.name}
              </div>
              <div className="text-gray-600">
                {currentTestimonial.role}, {currentTestimonial.company}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
