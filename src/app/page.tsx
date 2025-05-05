import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { AboutMe } from '@/components/sections/about-me';
import { Skills } from '@/components/sections/skills'; // New section
import { Experience } from '@/components/sections/experience'; // New section
import { Education } from '@/components/sections/education'; // New section
import { WorkShowcase } from '@/components/sections/work-showcase'; // Kept for project examples if any
import { Achievements } from '@/components/sections/achievements'; // New section
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-secondary via-background to-background py-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.4)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.4)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 dark:opacity-5 mask-gradient"></div>

          <div className="container z-10 px-4 md:px-6">
            {/* Name with heading font */}
            <h1 className="mb-2 text-5xl font-heading font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl fade-in">
              Manasvi Rathore
            </h1>
            {/* Title/Subtitle with body font */}
            <p className="mb-6 text-xl font-medium text-primary sm:text-2xl md:text-3xl slide-up" style={{ animationDelay: '0.1s' }}>
              Media Student
            </p>
            <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground md:text-xl slide-up" style={{ animationDelay: '0.2s' }}>
              Enthusiastic about journalism, with a keen interest in news reporting, editing, and media ethics. Exploring the dynamic world of media and communication.
            </p>
             {/* Contact Info */}
             <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-10 text-muted-foreground text-sm md:text-base slide-up" style={{ animationDelay: '0.3s' }}>
                <a href="tel:+6260320012" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    +626-032-0012
                </a>
                <a href="mailto:jiya21rathore@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    jiya21rathore@gmail.com
                </a>
                <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Indore, India
                </span>
             </div>
            <div className="slide-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                 {/* Changed link to About section */}
                <a href="#about">Learn More <ArrowDown className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section (Profile) */}
        <AboutMe />

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Education Section */}
        <Education />

         {/* Achievements Section */}
        <Achievements />

        {/* Optional: Work Showcase Section (If separate visual projects exist) */}
        {/* <WorkShowcase /> */}

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
