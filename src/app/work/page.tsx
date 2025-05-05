import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { WorkGrid } from '@/components/sections/work-grid'; // Import the renamed component
import { FileText } from 'lucide-react';

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Title Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FileText className="h-12 w-12 text-primary mb-2 slide-up" />
              <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl slide-up" style={{ animationDelay: '0.1s' }}>
                My Portfolio
              </h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
                Explore a collection of my work, showcasing skills in journalism, content creation, and media production across various formats.
              </p>
            </div>
          </div>
        </section>

        {/* Work Grid Section */}
        <WorkGrid />

      </main>
      <Footer />
    </div>
  );
}
