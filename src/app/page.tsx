import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { AboutMe } from '@/components/sections/about-me';
import { WorkShowcase } from '@/components/sections/work-showcase';
import { VoiceMimics } from '@/components/sections/voice-mimics'; // Import new section
import { AISummary } from '@/components/sections/ai-summary';
import { Contact } from '@/components/sections/contact'; // Import new section
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
          id="home" // Keep id="home" for potential internal links or future use
          className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-secondary via-background to-background py-16 text-center overflow-hidden" // Added overflow-hidden
        >
          {/* Subtle Grid Pattern - Using Tailwind classes directly now */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 dark:opacity-5 mask-gradient"></div>

           {/* Content */}
          <div className="container z-10 px-4 md:px-6">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl fade-in">
              Verity's Voice
            </h1>
            <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground md:text-xl slide-up" style={{ animationDelay: '0.2s' }}>
              Uncovering stories that matter. Explore the portfolio of an aspiring journalist dedicated to truth, clarity, and compelling narratives across mediums.
            </p>
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              {/* Updated button link to point to the #work section */}
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <a href="#work">Explore My Work <ArrowDown className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* Work Showcase Section */}
        <WorkShowcase />

        {/* Voice Mimics Section */}
        <VoiceMimics />

         {/* About Me Section */}
        <AboutMe />

        {/* AI Portfolio Summary Section */}
        <AISummary />

        {/* Contact Section */}
        <Contact />

      </main>
      <Footer />
    </div>
  );
}

// Add gradient mask style
const styles = `
.mask-gradient {
  mask-image: radial-gradient(circle at center, white 60%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle at center, white 60%, transparent 100%);
}
`;

// Inject styles - Ensure this runs only client-side if needed, or move to globals.css
if (typeof window !== 'undefined') {
  let styleSheet = document.getElementById('gradient-mask-style');
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.id = 'gradient-mask-style';
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
}
