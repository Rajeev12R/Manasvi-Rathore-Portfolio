import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Achievements } from '@/components/sections/achievements';
import { Separator } from '@/components/ui/separator'; // Import Separator

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
           <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-12 text-center slide-up">
              About Me
           </h1>
           {/* Include the sections previously on the homepage */}
           <Experience />
           <Separator className="my-16 md:my-24 bg-primary/20 slide-up" style={{ animationDelay: '0.1s' }} />
           <Education />
           <Separator className="my-16 md:my-24 bg-primary/20 slide-up" style={{ animationDelay: '0.2s' }} />
           <Achievements />
        </div>
      </main>
      <Footer />
    </div>
  );
}
