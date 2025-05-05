import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar } from 'lucide-react';

interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  dates: string;
  details: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Intern",
    organization: "The Journalist",
    location: "Geeta Bhawan",
    dates: "Jun 2024 - Aug 2024",
    details: [
      "Managed Knowledge Plus, handling posters, voice-overs, voice mimics, education beat news anchoring.",
      "Assisted 'The Journalist' with news writing and content research."
    ],
  },
  {
    role: "Intern",
    organization: "The Publicat",
    location: "Remote",
    dates: "Jul 2024 - Aug 2024",
    details: [
      "Reported news stories and wrote articles.",
      "Produced news videos, handling anchoring and voice-overs for effective news delivery."
    ],
  },
  {
    role: "Volunteer",
    organization: "MY FM 94.3",
    location: "Dainik Bhaskar",
    dates: "Jun 2024",
    details: [
        "Managed the 'CT Topper Event' at Labh Mandapam, Indore.",
        "Provided a child's voice-over for My FM radio."
        ],
  },
  {
      role: "Receptionist",
      organization: "BJYM'S YuvaSamwad Social Media Conclave",
      location: "Amarvillas Hotel",
      dates: "Oct 2023",
      details: [
          "Assisted front desk operations.",
          "Managed administration and logistics for smooth coordination."
        ],
    },
    {
      role: "Volunteer",
      organization: "Litchowk Socio-Cultural Festival",
      location: "Indore",
      dates: "Oct 2023 - Dec 2023",
      details: [
          "Executed research, planning, editing, and mall outreach at NRK Business Park.",
          "Coordinated event setup at Gandhi Hall, overseeing stalls, vendors, and registration."
        ],
    },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Briefcase className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Work Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            Hands-on experience gained through internships and volunteer roles in media and event management.
          </p>
        </div>

        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border/60">
           {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} />
            ))}
        </div>

      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
}

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const delay = 0.3 + index * 0.1;
  return (
      <div className="relative mb-10 pl-8 slide-up" style={{ animationDelay: `${delay}s` }}>
          {/* Timeline Dot */}
          <div className="absolute left-[-26px] top-[5px] h-3 w-3 rounded-full bg-primary border-2 border-background" />

          <Card className="shadow-sm hover:shadow-md transition-shadow border-secondary">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                 <CardTitle className="text-xl font-heading font-semibold text-foreground">{experience.role} at {experience.organization}</CardTitle>
                 <div className="flex items-center text-sm text-muted-foreground gap-2">
                     <Calendar className="h-4 w-4" />
                     <span>{experience.dates}</span>
                 </div>
              </div>
              <CardDescription className="text-muted-foreground pt-1">{experience.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1 pl-5 text-muted-foreground font-body text-sm">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
      </div>
  );
}
