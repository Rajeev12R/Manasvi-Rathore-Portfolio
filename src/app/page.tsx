import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { AboutMe } from '@/components/sections/about-me';
import { WorkShowcase } from '@/components/sections/work-showcase';
import { AISummary } from '@/components/sections/ai-summary';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-secondary via-background to-background py-16 text-center"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
          <div className="container z-10 px-4 md:px-6">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl fade-in">
              Verity's Voice
            </h1>
            <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground md:text-xl slide-up" style={{ animationDelay: '0.2s' }}>
              Uncovering stories that matter. Explore the portfolio of an aspiring journalist dedicated to truth and clarity.
            </p>
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <a href="#work">View My Work <ArrowDown className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <AboutMe />

        {/* Showcase Work Section */}
        <WorkShowcase />

        {/* AI Portfolio Summary Section */}
        <AISummary />
      </main>
      <Footer />
    </div>
  );
}

// Add a simple grid pattern background style (optional)
const styles = `
.bg-grid-pattern {
  background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
  background-size: 40px 40px;
}
`;

// Inject styles into the head (or use a CSS module/global CSS)
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
