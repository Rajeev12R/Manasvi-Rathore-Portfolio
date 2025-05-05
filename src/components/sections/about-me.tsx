import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, BookOpen, Edit3 } from 'lucide-react'; // Minimalist icons

export function AboutMe() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up">
              About Verity
            </h2>
            <p className="text-muted-foreground md:text-lg slide-up" style={{ animationDelay: '0.1s' }}>
              Hi, I'm Verity, an aspiring journalist driven by a passion for uncovering truth and crafting compelling narratives. My journey into journalism began with a desire to understand the world and share impactful stories. I specialize in investigative reporting and feature writing, always striving for accuracy, depth, and clarity.
            </p>
            <p className="text-muted-foreground md:text-lg slide-up" style={{ animationDelay: '0.2s' }}>
              My approach combines meticulous research with empathetic storytelling, aiming to connect readers with the subjects and issues that shape our lives. I believe in the power of journalism to inform, inspire, and foster meaningful dialogue.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 slide-up" style={{ animationDelay: '0.3s' }}>
                <SkillCard icon={Edit3} title="Writing & Editing" description="Crafting clear, concise, and engaging articles." />
                <SkillCard icon={BookOpen} title="Research" description="Thorough investigation and fact-checking." />
                <SkillCard icon={Award} title="Storytelling" description="Weaving narratives that resonate and inform." />
            </div>
          </div>
          <div className="flex items-center justify-center slide-up" style={{ animationDelay: '0.2s' }}>
            <Image
              src="https://picsum.photos/seed/journalist-headshot/500/500"
              alt="Verity - Journalist Headshot"
              width={450}
              height={450}
              className="rounded-full shadow-lg object-cover aspect-square border-4 border-secondary transition-transform duration-300 hover:scale-105"
              data-ai-hint="professional woman headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


interface SkillCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function SkillCard({ icon: Icon, title, description }: SkillCardProps) {
    return (
        <Card className="bg-secondary/50 border-secondary hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    );
}
