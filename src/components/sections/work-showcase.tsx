'use client';

import { useState } from 'react';
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
  link: string; // Use '#' for placeholders if no real link exists
  category: string; // e.g., 'Article', 'Video', 'Investigative', 'Opinion', 'Multimedia'
}

// Updated project data with diverse categories
const projects: Project[] = [
  {
    id: 1,
    title: 'Investigative Report: City Hall Corruption',
    description: 'An in-depth look into local government misconduct, uncovering hidden deals and misuse of funds.',
    imageUrl: 'https://picsum.photos/seed/cityhall/600/400',
    imageHint: 'city hall building government document',
    link: '#',
    category: 'Investigative',
  },
  {
    id: 2,
    title: 'Feature Article: The Rise of Urban Farming',
    description: 'Exploring the growing trend of urban agriculture and its impact on communities and food security.',
    imageUrl: 'https://picsum.photos/seed/urbanfarm/600/400',
    imageHint: 'urban farm rooftop garden plants',
    link: '#',
    category: 'Article',
  },
  {
    id: 3,
    title: 'Opinion Piece: The Ethics of AI in Journalism',
    description: 'A thoughtful analysis of the ethical considerations journalists face with the advent of AI tools.',
    imageUrl: 'https://picsum.photos/seed/aiethics/600/400',
    imageHint: 'artificial intelligence robot ethics code',
    link: '#',
    category: 'Opinion',
  },
  {
    id: 4,
    title: 'Video Report: Voices of the Underserved',
    description: 'A short documentary combining interviews and visuals to tell the stories of marginalized community members.',
    imageUrl: 'https://picsum.photos/seed/communityvoices/600/400',
    imageHint: 'community people diversity interview microphone',
    link: '#',
    category: 'Video',
  },
   {
    id: 5,
    title: 'Multimedia Story: Local River Cleanup',
    description: 'An interactive piece using text, photos, and data visualization about a community-led environmental effort.',
    imageUrl: 'https://picsum.photos/seed/rivercleanup/600/400',
    imageHint: 'river pollution environment volunteers',
    link: '#',
    category: 'Multimedia',
  },
  {
      id: 6,
      title: 'Profile: Local Artisan Baker',
      description: 'A warm feature article highlighting the craft and passion of a neighborhood baker.',
      imageUrl: 'https://picsum.photos/seed/bakerprofile/600/400',
      imageHint: 'baker bread artisan shop',
      link: '#',
      category: 'Article',
    },
];

// Define categories based on the projects, plus 'All'
const categories = ['All', ...new Set(projects.map(p => p.category))];

export function WorkShowcase() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

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

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2 mb-10 slide-up" style={{ animationDelay: '0.2s' }}>
          {categories.map(category => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'outline'}
              onClick={() => setFilter(category)}
              className={`transition-colors duration-200 ${filter === category ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/10'}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
             <p className="col-span-full text-center text-muted-foreground italic">No projects found for the selected category.</p>
          )}
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
  // Base delay + index offset
  const delay = 0.3 + index * 0.05;
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col slide-up" style={{ animationDelay: `${delay}s` }}>
      <CardHeader className="p-0 relative">
         <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="aspect-video object-cover w-full"
            data-ai-hint={project.imageHint}
          />
           <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full p-4">
             <p className="text-sm font-semibold text-background/90 mb-1">{project.category}</p>
             <CardTitle className="text-xl mb-0 text-background">{project.title}</CardTitle>
          </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        {/* Title moved to overlay, description remains here */}
        <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent transition-colors duration-300">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.category === 'Video' ? 'Watch Video' : project.category === 'Multimedia' ? 'View Project' : 'Read More'} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
