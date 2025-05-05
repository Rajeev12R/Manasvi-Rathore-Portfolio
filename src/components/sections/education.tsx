import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, CalendarDays, Percent } from 'lucide-react'; // Use relevant icons

interface EducationItem {
  degree: string;
  institution: string;
  dates: string;
  details?: string[]; // Optional details like percentage
}

const educationHistory: EducationItem[] = [
  {
    degree: "Bachelor of Arts in Journalism and Mass Communication",
    institution: "Devi Ahilya Vishwavidyalaya University",
    dates: "2023 - 2026 (Expected)",
    details: ["Completed 1st year"],
  },
  {
    degree: "High School Diploma - Class 12",
    institution: "Madhya Pradesh Board of Secondary Education",
    dates: "2022 - 2023",
    details: ["Percentage: 82.2%"],
  },
  {
    degree: "Secondary School - Class 10",
    institution: "Central Board of Secondary Education",
    dates: "2020 - 2021",
    details: ["Percentage: 74.6%"],
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <GraduationCap className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Education
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            My academic journey building a foundation in journalism and communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {educationHistory.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface EducationCardProps {
  education: EducationItem;
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  const delay = 0.3 + index * 0.1;
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow flex flex-col slide-up border-secondary" style={{ animationDelay: `${delay}s` }}>
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-heading font-semibold text-foreground">{education.degree}</CardTitle>
        <CardDescription className="text-primary font-medium pt-1">{education.institution}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-2">
        <div className="flex items-center text-sm text-muted-foreground gap-2">
          <CalendarDays className="h-4 w-4" />
          <span>{education.dates}</span>
        </div>
        {education.details && (
          <ul className="list-disc space-y-1 pl-5 text-muted-foreground font-body text-sm">
            {education.details.map((detail, i) => (
              <li key={i} className="flex items-center gap-2">
                 {detail.includes('Percentage') && <Percent className="h-4 w-4 text-primary/80" />}
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
}
