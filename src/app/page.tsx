import { Header } from '@/components/layout/header';
import { AboutMe } from '@/components/sections/about-me';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'; // Changed ArrowDown to ArrowRight for consistency
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center bg-gradient-to-b from-secondary/50 via-background to-background py-16 text-center overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30 dark:opacity-20 mask-gradient-soft"></div>

          <div className="container z-10 px-4 md:px-6">
            <h1 className="mb-2 text-5xl font-heading font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl fade-in">
              Manasvi Rathore
            </h1>
            <p className="mb-6 text-xl font-medium text-primary sm:text-2xl md:text-3xl slide-up" style={{ animationDelay: '0.1s' }}>
              Media Student & Aspiring Journalist
            </p>
            <p className="mx-auto mb-8 max-w-[700px] text-lg text-muted-foreground md:text-xl slide-up" style={{ animationDelay: '0.2s' }}>
              Passionate about reporting, editing, and ethical storytelling. Exploring the evolving media landscape with enthusiasm and a drive for impactful communication.
            </p>
             {/* Contact Info - Kept concise */}
             <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-10 text-muted-foreground text-sm md:text-base slide-up" style={{ animationDelay: '0.3s' }}>
                <a href="tel:+916260320012" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    +91 6260320012
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
              {/* Updated button to link to the new Work page */}
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                <Link href="/work">
                  Explore My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Me Section (Shortened) */}
        <AboutMe />

        {/* Featured Work Section is removed from here */}

        {/* Contact Section */}
        <Contact />

      </main>
      <Footer />
    </div>
  );
}
