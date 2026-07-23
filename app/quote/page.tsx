'use client';

import React, { useState } from 'react';
import { Package, MapPin, Calendar, FileText, Check, ChevronRight, ChevronLeft } from 'lucide-react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Service Selection
    serviceType: '',

    // Step 2: Locations
    pickupLocation: '',
    pickupDetails: '',
    deliveryLocation: '',
    deliveryDetails: '',

    // Step 3: Schedule
    pickupDate: '',
    pickupTime: '',
    deliveryDate: '',
    urgency: 'standard',

    // Step 4: Cargo Details
    cargoType: '',
    weight: '',
    dimensions: '',
    quantity: '',
    specialRequirements: '',

    // Step 5: Contact Information
    fullName: '',
    email: '',
    phone: '',
    company: '',
    additionalNotes: '',
  });

  const totalSteps = 5;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Quote request submitted successfully! We will contact you shortly.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Package className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Select Service Type
              </h2>
              <p className="text-gray-600">Choose the transport service you need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Raw Materials Transport', 'Heavy Truck Cargo', 'Light Truck Cargo'].map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => setFormData({ ...formData, serviceType: service })}
                  className={`p-6 border-2 rounded-lg text-left transition-all ${
                    formData.serviceType === service
                      ? 'border-primary bg-primary/5'
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <div className="font-semibold text-lg mb-2">{service}</div>
                  <div className="text-sm text-gray-600">
                    {service === 'Raw Materials Transport' && 'For construction materials and bulk commodities'}
                    {service === 'Heavy Truck Cargo' && 'For large machinery and heavy equipment'}
                    {service === 'Light Truck Cargo' && 'For urban deliveries and smaller loads'}
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <MapPin className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Pickup & Delivery Locations
              </h2>
              <p className="text-gray-600">Where should we pick up and deliver?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Pickup Location</h3>
                <Input
                  label="Pickup Address"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Enter pickup address"
                  required
                />
                <Textarea
                  label="Additional Pickup Details"
                  name="pickupDetails"
                  value={formData.pickupDetails}
                  onChange={handleInputChange}
                  placeholder="Building name, floor, access instructions..."
                  rows={3}
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Delivery Location</h3>
                <Input
                  label="Delivery Address"
                  name="deliveryLocation"
                  value={formData.deliveryLocation}
                  onChange={handleInputChange}
                  placeholder="Enter delivery address"
                  required
                />
                <Textarea
                  label="Additional Delivery Details"
                  name="deliveryDetails"
                  value={formData.deliveryDetails}
                  onChange={handleInputChange}
                  placeholder="Building name, floor, access instructions..."
                  rows={3}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Calendar className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Schedule & Timing
              </h2>
              <p className="text-gray-600">When do you need the transport service?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Pickup Schedule</h3>
                <Input
                  label="Pickup Date"
                  name="pickupDate"
                  type="date"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  label="Preferred Pickup Time"
                  name="pickupTime"
                  type="time"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary">Delivery Options</h3>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="standard">Standard Delivery</option>
                    <option value="express">Express Delivery</option>
                    <option value="sameday">Same Day Delivery</option>
                  </select>
                </div>
                <Input
                  label="Preferred Delivery Date (Optional)"
                  name="deliveryDate"
                  type="date"
                  value={formData.deliveryDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Cargo Details
              </h2>
              <p className="text-gray-600">Tell us about what you're transporting</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Cargo Type"
                name="cargoType"
                value={formData.cargoType}
                onChange={handleInputChange}
                placeholder="e.g., Construction materials, Furniture, Electronics"
                required
              />
              <Input
                label="Total Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder="Enter weight in kilograms"
                required
              />
              <Input
                label="Dimensions (L x W x H in meters)"
                name="dimensions"
                value={formData.dimensions}
                onChange={handleInputChange}
                placeholder="e.g., 2 x 1.5 x 1"
              />
              <Input
                label="Quantity/Units"
                name="quantity"
                type="number"
                value={formData.quantity}
                onChange={handleInputChange}
                placeholder="Number of items/pallets"
              />
            </div>

            <Textarea
              label="Special Requirements"
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              placeholder="Fragile items, temperature control, handling instructions, etc."
              rows={4}
            />
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Check className="mx-auto text-primary mb-4" size={48} />
              <h2 className="text-2xl font-heading font-bold text-primary mb-2">
                Contact Information
              </h2>
              <p className="text-gray-600">How can we reach you with the quote?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
              <Input
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+971-XX-XXXXXXX"
                required
              />
              <Input
                label="Company Name (Optional)"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
            </div>

            <Textarea
              label="Additional Notes"
              name="additionalNotes"
              value={formData.additionalNotes}
              onChange={handleInputChange}
              placeholder="Any other information you'd like us to know..."
              rows={4}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Page Header */}
      <Section background="gradient" className="pt-32 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Get Instant Quote
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Fill out the form below and we'll get back to you with a competitive quote
          </p>
        </div>
      </Section>

      {/* Quote Form */}
      <Section background="white" className="py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <React.Fragment key={step}>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      step === currentStep
                        ? 'bg-primary text-white'
                        : step < currentStep
                        ? 'bg-secondary text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step < currentStep ? <Check size={20} /> : step}
                  </div>
                  {step < 5 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step < currentStep ? 'bg-secondary' : 'bg-gray-200'
                      }`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="text-center text-sm text-gray-600">
              Step {currentStep} of {totalSteps}
            </div>
          </div>

          {/* Form Card */}
          <Card padding="lg">
            <form onSubmit={handleSubmit}>
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10 pt-6 border-t">
                <Button
                  type="button"
                  onClick={prevStep}
                  variant="outline"
                  disabled={currentStep === 1}
                  icon={<ChevronLeft size={20} />}
                >
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    variant="secondary"
                    icon={<ChevronRight size={20} />}
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" variant="secondary">
                    Submit Quote Request
                  </Button>
                )}
              </div>
            </form>
          </Card>

          {/* Help Text */}
          <div className="mt-8 text-center text-gray-600">
            <p>
              Need help? Call us at{' '}
              <a href="tel:0555353942" className="text-primary hover:text-secondary font-semibold">
                0555353942
              </a>{' '}
              or email{' '}
              <a href="mailto:contact@qamtransport.com" className="text-primary hover:text-secondary font-semibold">
                contact@qamtransport.com
              </a>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
