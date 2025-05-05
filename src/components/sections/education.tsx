import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { GraduationCap, CalendarDays, Percent, School } from "lucide-react" // Added School icon

interface EducationItem {
  degree: string
  institution: string
  dates: string
  details?: string[] // Optional details like percentage/status
  isUniversity?: boolean // Flag for university styling
}

const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Arts in Journalism and Mass Communication",
    institution: "Devi Ahilya Vishwavidyalaya University",
    dates: "2023 - 2026 (Expected)",
    details: ["Currently pursuing - Completed 1st year"],
    isUniversity: true,
  },
  {
    degree: "High School Diploma (Class 12)",
    institution: "Madhya Pradesh Board of Secondary Education",
    dates: "2022 - 2023",
    details: ["Percentage: 82.2%"],
  },
  {
    degree: "Secondary School Certificate (Class 10)",
    institution: "Central Board of Secondary Education (CBSE)",
    dates: "2020 - 2021",
    details: ["Percentage: 74.6%"],
  },
]

export function Education() {
  return (
    // Changed ID to match the detailed section on About page ('education-detail')
    <section
      id="education-detail"
      className="w-full py-10 md:py-14 bg-secondary/30 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-3 text-center mb-8">
          <GraduationCap className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2
            className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Educational Background
          </h2>
          <p
            className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body"
            style={{ animationDelay: "0.2s" }}
          >
            My academic journey, building a solid foundation in journalism,
            communication, and essential skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {educationHistory.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface EducationCardProps {
  education: EducationItem
  index: number
}

function EducationCard({ education, index }: EducationCardProps) {
  const delay = 0.3 + index * 0.1
  return (
    <Card
      className="shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col slide-up border-secondary h-full bg-card"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-2">
          {education.isUniversity ? (
            <GraduationCap className="h-7 w-7 text-primary" />
          ) : (
            <School className="h-7 w-7 text-primary" />
          )}
          <CardTitle className="text-lg font-heading font-semibold text-foreground leading-tight">
            {education.degree}
          </CardTitle>
        </div>
        <CardDescription className="text-primary font-medium pt-1 font-body">
          {education.institution}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center text-sm text-muted-foreground gap-2 font-mono">
          <CalendarDays className="h-4 w-4" />
          <span>{education.dates}</span>
        </div>
        {education.details && (
          <ul className="space-y-1 pt-2 text-muted-foreground font-body text-sm">
            {education.details.map((detail, i) => (
              <li key={i} className="flex items-center gap-2 ml-1">
                {detail.includes("Percentage") && (
                  <Percent className="h-4 w-4 text-primary/80 flex-shrink-0" />
                )}
                {!detail.includes("Percentage") && (
                  <span className="w-4 h-4 flex-shrink-0"></span>
                )}{" "}
                {/* Spacer for alignment */}
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
