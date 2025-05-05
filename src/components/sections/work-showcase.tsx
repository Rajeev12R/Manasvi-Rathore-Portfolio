'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ExternalLink, FolderOpen } from 'lucide-react'; // Added FolderOpen

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
  category: string;
}

// Keep the structure but empty the array or add relevant projects if available
const projects: Project[] = [
    // Example: Add the short film project if there's a link/visual
    // {
    //   id: 1,
    //   title: 'Short Film: Wetlands for Life Workshop',
    //   description: 'A short film created during the "Wetlands for Life" workshop focusing on environmental themes.',
    //   imageUrl: 'https://picsum.photos/seed/wetlandsfilm/600/400', // Placeholder image
    //   imageHint: 'wetlands nature film camera',
    //   link: '#', // Replace with actual link if available
    //   category: 'Video',
    // },
     // Add projects from internships if visual examples exist
    // {
    //   id: 2,
    //   title: 'News Video: The Publicat',
    //   description: 'Example news video produced during the internship, covering anchoring and voice-over.',
    //   imageUrl: 'https://picsum.photos/seed/newsvideo/600/400', // Placeholder image
    //   imageHint: 'news studio anchor video camera',
    //   link: '#', // Replace with actual link if available
    //   category: 'Video',
    // },
];

// Define categories based on the projects, plus 'All'
const categories = ['All', ...new Set(projects.map(p => p.category))].filter((c, i, arr) => arr.indexOf(c) === i); // Ensure 'All' is present even if projects is empty

export function WorkShowcase() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <FolderOpen className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Portfolio Highlights
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            A selection of projects showcasing practical skills. (More examples coming soon!)
          </p>
        </div>

        {/* Filter Buttons - Hide if no projects */}
        {projects.length > 0 && categories.length > 1 && (
            <div className="flex justify-center flex-wrap gap-2 mb-10 slide-up" style={{ animationDelay: '0.2s' }}>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className={`transition-colors duration-200 font-body ${filter === category ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/10'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
         )}

        {/* Project Grid or Placeholder */}
        <div className={`grid grid-cols-1 gap-6 ${projects.length > 0 ? 'sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2' : ''}`}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
             <p className="col-span-full text-center text-muted-foreground italic font-body">
                 No project examples available currently. Please check back later or contact me for specific work samples.
             </p>
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
  const delay = 0.3 + index * 0.05;
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col slide-up border-secondary" style={{ animationDelay: `${delay}s` }}>
      <CardHeader className="p-0 relative">
         <Image
            src={project.imageUrl}
            alt={project.title}
            width={600}
            height={400}
            className="aspect-video object-cover w-full"
            data-ai-hint={project.imageHint}
          />
           <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent w-full p-4">
             <p className="text-sm font-semibold text-background/90 mb-1 font-body">{project.category}</p>
             <CardTitle className="text-xl mb-0 text-background font-heading">{project.title}</CardTitle>
          </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardDescription className="text-muted-foreground font-body">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 border-accent transition-colors duration-300 font-body">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.category === 'Video' ? 'Watch Video' : 'View Project'} <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
