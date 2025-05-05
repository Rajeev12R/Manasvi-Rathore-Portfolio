import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react'; // Added MapPin

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
    location: "Geeta Bhawan, Indore",
    dates: "Jun 2024 - Aug 2024",
    details: [
      "Managed 'Knowledge Plus' initiative: handled posters, voice-overs, voice mimics, and anchored education beat news segments.",
      "Supported news writing and conducted content research.",
    ],
  },
  {
    role: "Intern",
    organization: "The Publicat",
    location: "Remote",
    dates: "Jul 2024 - Aug 2024",
    details: [
      "Reported on current events and authored news articles.",
      "Produced news videos, encompassing anchoring and voice-overs for clear and effective news delivery.",
    ],
  },
  {
    role: "Volunteer & Voice Artist", // Combined role
    organization: "MY FM 94.3",
    location: "Dainik Bhaskar, Indore",
    dates: "Jun 2024 (Event: Jun 3-6)",
    details: [
        "Assisted in managing the 'CT Topper Event' held at Labh Mandapam.",
        "Contributed a child's voice-over for a segment on My FM radio.",
        ],
  },
  {
      role: "Receptionist & Logistics Support", // Expanded role description
      organization: "BJYM'S YuvaSamwad Social Media Conclave",
      location: "Amarvillas Hotel, Indore",
      dates: "Oct 19, 2023",
      details: [
          "Managed front desk operations, guest registration, and inquiries.",
          "Provided administrative and logistical support to ensure smooth event coordination.",
        ],
    },
    {
      role: "Volunteer & Event Coordinator", // Combined role
      organization: "Litchowk Socio-Cultural Festival",
      location: "Indore",
      dates: "Oct 2023 - Dec 2023",
      details: [
          "Conducted research, planning, content editing, and executed mall outreach activities at NRK Business Park.",
          "Coordinated event setup at Gandhi Hall, managing stalls, vendor relations, and participant registration.",
        ],
    },
];

export function Experience() {
  return (
    // Changed ID to match the detailed section on About page ('experience-detail')
    <section id="experience-detail" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Briefcase className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Professional Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            Gaining practical insights and skills through internships and volunteer roles across media production and event management.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-[11px] after:w-0.5 after:bg-border/60 dark:after:bg-border/40">
           {experiences.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} index={index} isLast={index === experiences.length - 1} />
            ))}
        </div>

      </div>
    </section>
  );
}

interface ExperienceCardProps {
  experience: ExperienceItem;
  index: number;
  isLast: boolean; // Added prop to know if it's the last item
}

function ExperienceCard({ experience, index, isLast }: ExperienceCardProps) {
  const delay = 0.3 + index * 0.1;
  return (
      <div className={`relative pl-10 ${!isLast ? 'pb-10' : ''} slide-up`} style={{ animationDelay: `${delay}s` }}>
          {/* Timeline Dot */}
          <div className="absolute left-0 top-[5px] h-6 w-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow">
             <Briefcase className="h-3 w-3 text-primary-foreground" />
          </div>

          <Card className="shadow-sm hover:shadow-md transition-shadow duration-300 border-secondary ml-4">
            <CardHeader className="pb-3">
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-x-4 gap-y-1">
                 <div className="flex-1">
                     <CardTitle className="text-xl font-heading font-semibold text-foreground mb-1">{experience.role}</CardTitle>
                     <CardDescription className="text-primary font-medium text-base">{experience.organization}</CardDescription>
                     <div className="flex items-center text-sm text-muted-foreground gap-2 mt-1">
                        <MapPin className="h-4 w-4" />
                        <span>{experience.location}</span>
                    </div>
                 </div>
                 <div className="flex items-start text-sm text-muted-foreground gap-2 pt-1 sm:pt-0 flex-shrink-0">
                     <Calendar className="h-4 w-4 mt-0.5" />
                     <span className="font-mono">{experience.dates}</span>
                 </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground font-body text-sm">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
      </div>
  );
}
