'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link'; // Import Link
import { ExternalLink, FileText, Video, MicVocal, ArrowRight } from 'lucide-react'; // Use relevant icons

interface WorkItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string; // Link to the detailed work page (e.g., /work/article-slug)
  category: 'Article' | 'Video' | 'Voice'; // Define categories
  icon: React.ElementType; // Icon for the category
}

// Placeholder Work Items - Replace with actual content and links
const workItems: WorkItem[] = [
    {
      id: 1,
      title: 'Investigative Report on Local Water Quality',
      description: 'An in-depth article exploring the findings of a recent water quality study in the Indore region.',
      imageUrl: 'https://picsum.photos/seed/water-report/600/400',
      imageHint: 'water sample test tube analysis',
      link: '/work/water-quality-report', // Example detail page link
      category: 'Article',
      icon: FileText,
    },
    {
      id: 2,
      title: 'Short Film: Wetlands for Life Workshop',
      description: 'A short documentary created during the workshop, highlighting the importance of wetland conservation.',
      imageUrl: 'https://picsum.photos/seed/wetlandsfilm/600/400',
      imageHint: 'wetlands nature film camera sunset',
      link: '/work/wetlands-film', // Example detail page link
      category: 'Video',
      icon: Video,
    },
     {
      id: 3,
      title: 'Voice Mimic Showcase: News Anchors',
      description: 'Demonstration of voice mimicry skills, replicating the styles of prominent news anchors.',
      imageUrl: 'https://picsum.photos/seed/voice-mimic/600/400',
      imageHint: 'microphone audio wave sound studio',
      link: '/work/voice-mimic-anchors', // Example detail page link
      category: 'Voice',
      icon: MicVocal,
     },
     {
      id: 4,
      title: 'Feature Article: The Rise of Digital Journalism',
      description: 'Exploring the impact of technology on modern journalism practices and media consumption.',
      imageUrl: 'https://picsum.photos/seed/digital-journalism/600/400',
      imageHint: 'laptop screen code digital news',
      link: '/work/digital-journalism-feature', // Example detail page link
      category: 'Article',
      icon: FileText,
    },
    // Add more real or placeholder projects
];

// Automatically derive categories from the work items
const categories = ['All', ...new Set(workItems.map(p => p.category))];

export function FeaturedWork() {
  const [filter, setFilter] = useState('All');

  const filteredWork = workItems.filter(p => filter === 'All' || p.category === filter);

  return (
    <section id="featured-work" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           {/* Use a relevant icon */}
           <FileText className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Featured Work
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            A selection of projects demonstrating skills in writing, video production, and voice work.
          </p>
        </div>

        {/* Filter Buttons */}
        {categories.length > 1 && (
            <div className="flex justify-center flex-wrap gap-3 mb-10 slide-up" style={{ animationDelay: '0.2s' }}>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={filter === category ? 'default' : 'outline'}
                  onClick={() => setFilter(category)}
                  className={`transition-all duration-300 ease-out font-body rounded-full px-4 py-1 text-sm ${filter === category ? 'bg-primary text-primary-foreground shadow-md scale-105' : 'border-primary text-primary hover:bg-primary/10 hover:scale-105'}`}
                >
                  {category}
                </Button>
              ))}
            </div>
         )}

        {/* Work Grid */}
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-out`}>
          {filteredWork.length > 0 ? (
            filteredWork.map((item, index) => (
              <WorkCard key={item.id} item={item} index={index} />
            ))
          ) : (
             <p className="col-span-full text-center text-muted-foreground italic font-body py-8">
                 No projects match the selected filter.
             </p>
          )}
        </div>

         {/* Placeholder for empty state if needed */}
         {workItems.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground italic font-body py-8">
                 More work examples coming soon. Check back later!
             </p>
         )}
      </div>
    </section>
  );
}


interface WorkCardProps {
  item: WorkItem;
  index: number;
}

function WorkCard({ item, index }: WorkCardProps) {
  const delay = 0.3 + index * 0.05;
  return (
    <Card className="overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col slide-up border-secondary group h-full bg-card hover:border-primary/50">
      <CardHeader className="p-0 relative">
         <Image
            src={item.imageUrl}
            alt={item.title}
            width={600}
            height={340} // Adjust height for better aspect ratio
            className="aspect-[16/9] object-cover w-full transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
            data-ai-hint={item.imageHint}
          />
           {/* Category Icon Badge */}
            <div className="absolute top-3 right-3 bg-primary/80 backdrop-blur-sm text-primary-foreground p-2 rounded-full shadow-md">
                <item.icon className="h-5 w-5" />
            </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="text-xl mb-2 text-foreground font-heading group-hover:text-primary transition-colors">{item.title}</CardTitle>
        <CardDescription className="text-muted-foreground font-body mb-4 flex-grow">{item.description}</CardDescription>
      </CardContent>
       <CardFooter className="p-6 pt-0 mt-auto">
         {/* Link to the detail page */}
         <Button variant="link" asChild className="text-primary hover:underline p-0 h-auto font-body group/link">
           <Link href={item.link}>
             {item.category === 'Article' ? 'Read Article' : item.category === 'Video' ? 'Watch Video' : 'Listen Now'}
             <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
           </Link>
         </Button>
       </CardFooter>
    </Card>
  );
}
