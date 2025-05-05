import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Edit3, BookOpen, Award } from 'lucide-react'; // Keep icons relevant

export function AboutMe() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            {/* Use heading font for the section title */}
            <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up">
              About Me
            </h2>
            {/* Use body font for paragraphs */}
            <p className="text-muted-foreground md:text-lg slide-up font-body" style={{ animationDelay: '0.1s' }}>
              Enthusiastic about journalism, with a keen interest in news reporting, editing, and media ethics. I strive to produce well-researched and accurate content while continuously developing my understanding of media dynamics and audience engagement.
            </p>
            <p className="text-muted-foreground md:text-lg slide-up font-body" style={{ animationDelay: '0.2s' }}>
              Adaptable and eager to learn, I aim to contribute effectively to dynamic media platforms in an evolving industry. My interests span content creation, political analysis, current affairs, and the intersection of technology and media innovation.
            </p>
            {/* Removed SkillCards as skills have their own section now */}
          </div>
          <div className="flex items-center justify-center slide-up" style={{ animationDelay: '0.2s' }}>
            <Image
              // Consider using a more specific image seed or a real photo URL
              src="https://picsum.photos/seed/manasvi-rathore/500/500"
              alt="Manasvi Rathore - Media Student" // Updated alt text
              width={450}
              height={450}
              className="rounded-full shadow-lg object-cover aspect-square border-4 border-secondary transition-transform duration-300 hover:scale-105"
              data-ai-hint="professional indian woman student headshot" // Updated hint
            />
          </div>
        </div>
      </div>
    </section>
  );
}
