import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, Mic, MessageSquare, Languages, Edit3, Users } from 'lucide-react'; // Use relevant icons

export function Skills() {
  const skills = [
    { icon: Edit3, title: "News Reporting & Writing", description: "Adept at researching, analyzing, and writing for news reporting." },
    { icon: Mic, title: "Basic News Anchoring", description: "Fundamental understanding of news presentation and delivery." },
    { icon: BrainCircuit, title: "Media Strategy & Content", description: "Experienced in managing and creating content for social media platforms." },
    { icon: MessageSquare, title: "Communication", description: "Strong communication and interpersonal skills." },
    { icon: Languages, title: "Languages", description: "Proficient in both Hindi and English." },
    // { icon: Users, title: "Interpersonal Skills", description: "Effective collaboration and interaction abilities." }, // Already covered in Communication
  ];

  const interests = [
      "Content Creation",
      "Journalism & Media Ethics",
      "Digital Trends",
      "Political Analysis",
      "Current Affairs",
      "Social Sciences Research",
      "Technology & Media Innovation"
  ]

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up">
            Skills & Interests
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.1s' }}>
            A combination of practical media skills and diverse interests driving my passion for journalism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
              delay={0.2 + index * 0.05}
            />
          ))}
        </div>

         <div className="text-center">
             <h3 className="text-2xl font-heading font-semibold tracking-tight text-foreground mb-4 slide-up" style={{ animationDelay: '0.5s' }}>
                 Key Interests
             </h3>
             <div className="flex flex-wrap justify-center gap-2 slide-up" style={{ animationDelay: '0.6s' }}>
                 {interests.map((interest, index) => (
                    <span key={index} className="bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm border border-primary/30">
                        {interest}
                    </span>
                 ))}
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
  delay: number;
}

function SkillCard({ icon: Icon, title, description, delay }: SkillCardProps) {
  return (
    <Card className="bg-card border-border hover:shadow-md transition-shadow flex flex-col slide-up" style={{ animationDelay: `${delay}s` }}>
      <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5">
        <Icon className="h-8 w-8 text-primary flex-shrink-0" />
        <CardTitle className="text-lg font-semibold font-heading">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow pt-0">
        <p className="text-sm text-muted-foreground font-body">{description}</p>
      </CardContent>
    </Card>
  );
}
