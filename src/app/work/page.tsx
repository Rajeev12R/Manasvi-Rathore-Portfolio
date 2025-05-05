import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WorkGrid } from '@/components/sections/work-grid'; // Import the renamed component
import { FileText } from 'lucide-react';

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

        <WorkGrid />

      <Footer />
    </div>
  );
}
