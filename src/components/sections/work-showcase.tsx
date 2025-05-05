import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Investigative Report: City Hall Corruption',
    description: 'An in-depth look into local government misconduct, uncovering hidden deals and misuse of funds.',
    imageUrl: 'https://picsum.photos/seed/cityhall/600/400',
    imageHint: 'city hall building government',
    link: '#', // Placeholder link
    category: 'Investigative',
  },
  {
    id: 2,
    title: 'Feature: The Rise of Urban Farming',
    description: 'Exploring the growing trend of urban agriculture and its impact on communities and food security.',
    imageUrl: 'https://picsum.photos/seed/urbanfarm/600/400',
    imageHint: 'urban farm rooftop garden',
    link: '#',
    category: 'Feature',
  },
  {
    id: 3,
    title: 'Blog Post: The Ethics of AI in Journalism',
    description: 'A thoughtful analysis of the ethical considerations journalists face with the advent of AI tools.',
    imageUrl: 'https://picsum.photos/seed/aiethics/600/400',
    imageHint: 'artificial intelligence robot ethics',
    link: '#',
    category: 'Opinion',
  },
  {
    id: 4,
    title: 'Multimedia Project: Voices of the Underserved',
    description: 'Combining interviews, photos, and video to tell the stories of marginalized community members.',
    imageUrl: 'https://picsum.photos/seed/communityvoices/600/400',
    imageHint: 'community people diversity',
    link: '#',
    category: 'Multimedia',
  },
];

export function WorkShowcase() {
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up">
            Featured Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up" style={{ animationDelay: '0.1s' }}>
            A selection of articles, reports, and multimedia projects demonstrating diverse skills and interests.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}


interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col slide-up" style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
      <CardHeader className="p-0">
         <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="aspect-video object-cover w-full"
            data-ai-hint={project.imageHint}
          />
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <p className="text-sm font-semibold text-primary mb-1">{project.category}</p>
        <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent transition-colors duration-300">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
