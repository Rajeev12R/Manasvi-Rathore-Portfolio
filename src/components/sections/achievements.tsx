import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Film, MicVocal, CalendarDays } from "lucide-react" // Use relevant icons

interface AchievementItem {
  icon: React.ElementType
  title: string
  description: string
  date: string
}

const achievements: AchievementItem[] = [
  {
    icon: Award, // Or potentially another relevant icon like 'BadgeCheck'
    title: "Bharatiya Patrakarita Mahotsav Masterclass",
    description:
      "Earned a certificate, enhancing practical journalism knowledge.",
    date: "Jun 21-23, 2024",
  },
  {
    icon: Film,
    title: '"Wetlands for Life" Workshop',
    description:
      "Attended and created a short film, developing environmental storytelling skills.",
    date: "Feb 3-5, 2024",
  },
  // Example of adding MY FM voice-over if framed as an achievement/recognition
  {
    icon: MicVocal,
    title: "MY FM Radio Voice-Over Contribution",
    description:
      "Provided a child's voice-over for a radio segment during the 'CT Topper Event'.",
    date: "Jun 2024",
  },
]

export function Achievements() {
  return (
    // Changed ID to match the detailed section on About page ('achievements-detail')
    <section
      id="achievements-detail"
      className="w-full py-10 md:py-14 bg-background flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8">
          <Award className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2
            className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Achievements & Recognition
          </h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body"
            style={{ animationDelay: "0.2s" }}
          >
            Highlighting key accomplishments and participation in relevant
            workshops and events that showcase skill development and initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface AchievementCardProps {
  achievement: AchievementItem
  index: number
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const delay = 0.3 + index * 0.1
  return (
    <Card
      className="shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start gap-4 p-6 slide-up border-secondary h-full bg-card transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      <achievement.icon className="h-10 w-10 text-primary mb-3 flex-shrink-0" />
      <div className="flex-grow flex flex-col">
        <CardTitle className="text-lg font-heading font-semibold text-foreground mb-2">
          {achievement.title}
        </CardTitle>
        <p className="text-sm text-muted-foreground font-body mb-4 flex-grow">
          {achievement.description}
        </p>
        <div className="flex items-center text-xs text-muted-foreground/80 font-mono mt-auto">
          <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
          {achievement.date}
        </div>
      </div>
    </Card>
  )
}
