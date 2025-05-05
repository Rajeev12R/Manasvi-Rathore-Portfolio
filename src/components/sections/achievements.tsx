import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Film, MicVocal } from 'lucide-react'; // Use relevant icons

interface AchievementItem {
  icon: React.ElementType;
  title: string;
  description: string;
  date: string;
}

const achievements: AchievementItem[] = [
  {
    icon: Award, // Or potentially another relevant icon like 'BadgeCheck'
    title: "Bharatiya Patrakarita Mahotsav Masterclass",
    description: "Earned a certificate at the masterclass.",
    date: "Jun 2024",
  },
  {
    icon: Film,
    title: "\"Wetlands for Life\" Workshop",
    description: "Attended and created a short film during the workshop.",
    date: "Feb 2024",
  },
   // Add more achievements here if needed, e.g., related to MY FM voice-over if framed as an achievement
   // {
   //   icon: MicVocal,
   //   title: "MY FM Radio Voice-Over",
   //   description: "Provided a child's voice-over for a radio segment.",
   //   date: "Jun 2024",
   // },
];

export function Achievements() {
  return (
    <section id="achievements" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Award className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Achievements & Recognition
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            Highlighting key accomplishments and participation in relevant workshops and events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface AchievementCardProps {
  achievement: AchievementItem;
  index: number;
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const delay = 0.3 + index * 0.1;
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 p-6 slide-up border-secondary" style={{ animationDelay: `${delay}s` }}>
       <achievement.icon className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
       <div className="flex-grow">
        <CardTitle className="text-lg font-heading font-semibold text-foreground mb-1">{achievement.title}</CardTitle>
        <p className="text-sm text-muted-foreground font-body mb-2">{achievement.description}</p>
        <p className="text-xs text-muted-foreground/80 font-mono">{achievement.date}</p>
       </div>
    </Card>
  );
}
