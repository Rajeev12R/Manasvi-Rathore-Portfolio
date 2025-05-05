import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Experience } from '@/components/sections/experience';
import { Education } from '@/components/sections/education';
import { Achievements } from '@/components/sections/achievements';
import { Separator } from '@/components/ui/separator'; // Import Separator
import { PenTool } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container px-4 md:px-6 py-16 md:py-24 lg:py-32">
           <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <PenTool className="h-12 w-12 text-primary mb-2 slide-up" />
              <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl slide-up" style={{ animationDelay: '0.1s' }}>
                  About Me
              </h1>
               <p className="max-w-[800px] text-muted-foreground md:text-lg lg:text-xl xl:text-xl slide-up font-body mt-4" style={{ animationDelay: '0.2s' }}>
                   Driven by an insatiable curiosity and a commitment to ethical storytelling, I am navigating the dynamic world of media and journalism. My journey is fueled by a passion for uncovering truths, crafting compelling narratives, and understanding the profound impact of media on society. Explore my experiences and educational path below.
               </p>
           </div>

           {/* Include the sections previously on the homepage */}
           <Experience />
           <Separator className="my-16 md:my-24 bg-primary/20 slide-up" style={{ animationDelay: '0.3s' }} />
           <Education />
           <Separator className="my-16 md:my-24 bg-primary/20 slide-up" style={{ animationDelay: '0.4s' }} />
           <Achievements />
        </div>
      </main>
      <Footer />
    </div>
  );
}
