import Link from 'next/link';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';

export default function NotFound() {
  return (
    <Section background="white" className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-9xl font-heading font-bold text-primary/10 mb-4">404</div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. Please check the URL or return to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/" variant="secondary">
            Go Home
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </Section>
  );
}
