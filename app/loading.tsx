import Section from '@/components/ui/Section';

export default function Loading() {
  return (
    <Section background="white" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block">
          <div className="w-16 h-16 border-4 border-primary border-t-secondary rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-600 font-medium">Loading...</p>
      </div>
    </Section>
  );
}
