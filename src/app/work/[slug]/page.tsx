'use client'; // Keep as client component for potential future interactions

import React, { use } from 'react'; // Import use from React
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Video, MicVocal, Calendar, Tag, Newspaper, Radio, ExternalLink } from 'lucide-react'; // Added Newspaper, Radio, ExternalLink
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation'; // Import notFound for handling missing slugs

// --- Placeholder Data Fetching/Structure ---
// In a real app, you'd fetch this data based on the `slug` parameter
// This could come from a CMS, database, or local markdown files.

interface WorkDetail {
  slug: string;
  title: string;
  category: 'Article' | 'Video' | 'Voice' | 'Report' | 'Radio'; // Added Report, Radio categories
  date: string; // e.g., "August 10, 2024"
  tags: string[];
  imageUrl: string;
  imageHint: string;
  content: string; // This would be the main body (Markdown, HTML, etc.)
  externalLink?: string; // Optional link for video/audio embeds or source
}

// Expanded list to match work-grid.tsx
const allWorkItems: WorkDetail[] = [
  {
    slug: 'water-quality-report',
    title: 'Investigative Report on Local Water Quality',
    category: 'Report', // Updated category
    date: 'August 10, 2024',
    tags: ['Investigation', 'Environment', 'Local News', 'Indore'],
    imageUrl: 'https://picsum.photos/seed/water-report-detail/1200/600',
    imageHint: 'water sample test tube analysis microscope',
    content: `
## Uncovering the State of Indore's Water

This report delves into the recent findings concerning the water quality within the Indore region. Based on extensive research and data analysis from [Source/Study Name], we explore the key metrics, potential concerns, and implications for public health.

### Key Findings:

*   **Parameter 1:** Levels were found to be [Describe finding, e.g., slightly above recommended limits].
*   **Parameter 2:** Analysis showed [Describe finding, e.g., consistent compliance with standards].
*   **Potential Contaminants:** Traces of [Mention specific contaminants if found] were detected in certain areas, warranting further investigation.

### Methodology:

Data was collected from [Number] sampling points across the region between [Start Date] and [End Date]. Standard testing protocols outlined by [Authority Name] were followed rigorously.

### Conclusion & Recommendations:

While overall quality remains largely within acceptable parameters, specific areas require attention. Recommendations include increased monitoring frequency at [Specific Locations] and public awareness campaigns regarding potential sources of contamination like [Example Source].

*Full data tables and detailed analysis are available upon request.*
    `,
  },
  {
    slug: 'wetlands-film',
    title: 'Short Film: Wetlands for Life Workshop',
    category: 'Video',
    date: 'February 5, 2024',
    tags: ['Documentary', 'Environment', 'Conservation', 'Workshop'],
    imageUrl: 'https://picsum.photos/seed/wetlandsfilm-detail/1200/600',
    imageHint: 'wetlands nature film camera sunset drone shot',
    content: `
## Wetlands for Life: A Visual Journey

This short documentary was produced as part of the "Wetlands for Life" workshop. It aims to capture the beauty and ecological significance of local wetlands, emphasizing the urgent need for their conservation.

Through interviews with experts and evocative visuals, the film explores the diverse flora and fauna that depend on these vital ecosystems and the threats they face from human activity and climate change.

*(Video embed would go here in a real implementation)*
    `,
    externalLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder external link
  },
  {
    slug: 'voice-mimic-anchors',
    title: 'Voice Mimic Showcase: News Anchors',
    category: 'Voice',
    date: 'July 20, 2024',
    tags: ['Voice-Over', 'Mimicry', 'Broadcasting', 'Demo'],
    imageUrl: 'https://picsum.photos/seed/voice-mimic-detail/1200/600',
    imageHint: 'microphone audio wave sound studio control room',
    content: `
## Replicating the Voices of the Newsroom

This audio showcase demonstrates my ability to mimic the vocal styles and intonations of various well-known news anchors. It highlights vocal flexibility and control, essential skills for voice-over work and broadcasting.

Listen below to hear examples replicating the delivery of anchors from [Mention Network/Anchor Type 1], [Mention Network/Anchor Type 2], and more.

*(Audio player embed would go here in a real implementation)*
    `,
     externalLink: '#', // Placeholder for audio link/embed
  },
   {
    slug: 'digital-journalism-feature',
    title: 'Feature Article: The Rise of Digital Journalism',
    category: 'Article',
    date: 'June 15, 2024',
    tags: ['Feature', 'Media Trends', 'Technology', 'Digital Media'],
    imageUrl: 'https://picsum.photos/seed/digital-journalism-detail/1200/600',
    imageHint: 'laptop screen code digital news network globe',
    content: `
## Navigating the Digital News Frontier

The landscape of journalism has been irrevocably transformed by technology. This feature article examines the rise of digital journalism, exploring its impact on news gathering, dissemination, and consumption.

### Key Themes Explored:

*   **The Speed of Information:** How social media and instant updates have changed the news cycle.
*   **New Storytelling Formats:** The emergence of multimedia narratives, data visualization, and interactive content.
*   **Challenges and Ethics:** Addressing misinformation, algorithmic bias, and the sustainability of digital news models.
*   **The Future Outlook:** Predictions for the next phase of digital journalism and the skills required for future journalists.

This piece incorporates insights from industry experts and analysis of current trends to provide a comprehensive overview of this dynamic field.
    `,
  },
   {
    slug: 'myfm-radio-voiceover', // Example slug
    title: 'MY FM Radio Voice-Over Contribution',
    category: 'Radio',
    date: 'June 2024',
    tags: ['Voice-Over', 'Radio', 'Event', 'Volunteer'],
    imageUrl: 'https://picsum.photos/seed/myfm-radio-detail/1200/600',
    imageHint: 'radio studio microphone sound waves broadcast event',
    content: `
## Voice for the Airwaves: CT Topper Event

During the 'CT Topper Event' organized by My FM 94.3 in June 2024, I had the opportunity to contribute a child's voice-over for a radio segment. This experience allowed me to apply my vocal skills in a professional broadcasting environment.

*(Audio snippet or link would be ideal here)*
    `,
     externalLink: '#', // Placeholder link if audio is available elsewhere
   },
   {
    slug: 'community-event-report', // Example slug
    title: 'News Report: Local Community Initiative',
    category: 'Report',
    date: 'July 28, 2024',
    tags: ['News Reporting', 'Video Production', 'Community', 'Local News'],
    imageUrl: 'https://picsum.photos/seed/community-event-detail/1200/600',
    imageHint: 'people meeting community center presentation reporting camera',
    content: `
## Covering the [Event Name] Community Initiative

As part of my internship with The Publicat, I reported on the recent [Event Name] community initiative. This involved:

*   **News Writing:** Crafting informative articles detailing the event's purpose and impact.
*   **Video Production:** Producing short news video segments, including anchoring and voice-overs, to effectively communicate key highlights.

This project enhanced my skills in multimedia news delivery and community reporting.

*(Link to article or video could be placed here)*
    `,
    externalLink: '#', // Placeholder
   },
   {
     slug: 'podcast-media-ethics', // Example slug
     title: 'Podcast Episode: Media Ethics Today',
     category: 'Voice',
     date: 'September 5, 2024',
     tags: ['Podcast', 'Media Ethics', 'Discussion', 'Hosting'],
     imageUrl: 'https://picsum.photos/seed/podcast-ethics-detail/1200/600',
     imageHint: 'two people podcasting microphones headphones audio mixer discussion',
     content: `
## Exploring Modern Media Ethics

This podcast episode delves into the complex ethical landscape confronting journalists and media professionals today. As host and producer, I guided a discussion covering topics such as:

*   The impact of social media on journalistic standards.
*   Navigating source confidentiality in the digital age.
*   The challenges of objectivity vs. advocacy journalism.

*(Link to the podcast episode would be placed here)*
     `,
     externalLink: '#', // Placeholder link
   },
   {
     slug: 'video-interview-local-artist', // Example slug
     title: 'Video Interview: Local Artist Profile',
     category: 'Video',
     date: 'October 12, 2024',
     tags: ['Video Production', 'Interview', 'Arts', 'Local Culture'],
     imageUrl: 'https://picsum.photos/seed/artist-interview-detail/1200/600',
     imageHint: 'artist studio interview camera lights painting sculpture',
     content: `
## Spotlight on [Artist Name]

This video profile features an interview with local artist [Artist Name], exploring their creative process, inspirations, and recent works.

The production involved:

*   **Interviewing:** Conducting an engaging conversation to draw out the artist's story.
*   **Filming:** Capturing visuals of the artist and their work in their studio environment.
*   **Editing:** Assembling the footage into a concise and compelling narrative.

*(Embedded video player or link would go here)*
     `,
     externalLink: '#', // Placeholder link
   },
];

// Helper function to get work item by slug
const getWorkItem = (slug: string): WorkDetail | undefined => {
  return allWorkItems.find((item) => item.slug === slug);
};

// --- Component ---

// Type for the props, especially the params which might be a Promise
type WorkDetailPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};


export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  // Use React.use to resolve the params if it's a Promise
  const resolvedParams = use(params);
  const workItem = getWorkItem(resolvedParams.slug);

  // If the work item is not found, display a 404 page
  if (!workItem) {
    notFound();
  }

  // Map category to icon
  const categoryIcon =
    workItem.category === 'Article' ? FileText :
    workItem.category === 'Video' ? Video :
    workItem.category === 'Voice' ? MicVocal :
    workItem.category === 'Report' ? Newspaper :
    workItem.category === 'Radio' ? Radio :
    FileText; // Default icon

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-secondary/5 to-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Back Button - Updated link to /work */}
          <Button asChild variant="outline" className="mb-8 group transition-all hover:bg-primary/10 border-primary text-primary font-body slide-up">
            <Link href="/work">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
            </Link>
          </Button>

          {/* Work Item Header */}
          <header className="mb-10 slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 text-primary font-medium mb-2 text-sm font-body">
              {React.createElement(categoryIcon, { className: "h-5 w-5" })}
              <span>{workItem.category}</span>
            </div>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl mb-4">
              {workItem.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground font-body">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <span>{workItem.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Tag className="h-4 w-4" />
                <span>{workItem.tags.join(', ')}</span>
              </div>
            </div>
          </header>

          {/* Image / Video / Audio Placeholder */}
          <div className="mb-10 rounded-lg overflow-hidden shadow-lg slide-up" style={{ animationDelay: '0.2s' }}>
            {workItem.category === 'Video' && workItem.externalLink && workItem.externalLink !== '#' ? (
               <div className="aspect-video bg-muted flex items-center justify-center">
                 {/* Basic Video Embed Placeholder */}
                  <iframe
                    width="100%"
                    height="100%"
                    src={workItem.externalLink.includes('youtube.com') ? workItem.externalLink.replace('watch?v=', 'embed/') : workItem.externalLink} // Basic YouTube embed conversion
                    title={workItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  ></iframe>
               </div>
            ) : (workItem.category === 'Voice' || workItem.category === 'Radio') && workItem.externalLink && workItem.externalLink !== '#' ? (
                 <div className="bg-muted flex items-center justify-center p-8 rounded-lg">
                     {/* Basic Audio Placeholder */}
                     <audio controls className="w-full">
                       <source src={workItem.externalLink} type="audio/mpeg" /> {/* Adjust type if needed */}
                       Your browser does not support the audio element.
                      <a href={workItem.externalLink} target="_blank" rel="noopener noreferrer" className="text-primary underline ml-2">Listen Here</a>
                     </audio>
                 </div>
            ) : (
              <Image
                src={workItem.imageUrl}
                alt={workItem.title}
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                data-ai-hint={workItem.imageHint}
                priority // Prioritize loading the main image
              />
             )}
          </div>

          {/* Content Area */}
          <article className="prose prose-lg dark:prose-invert max-w-none font-body text-foreground slide-up" style={{ animationDelay: '0.3s' }}>
            {/* Render Markdown or HTML content here */}
            {/* In a real app, use react-markdown or similar */}
            <div dangerouslySetInnerHTML={{ __html: workItem.content.replace(/\n/g, '<br />') }} />

             {/* Link for non-article types if applicable and link exists */}
             {(workItem.category === 'Video' || workItem.category === 'Voice' || workItem.category === 'Radio') && workItem.externalLink && workItem.externalLink !== '#' && (
                <p className="mt-8">
                    <Button asChild variant="outline" className="border-accent text-accent-foreground hover:bg-accent/10">
                        <a href={workItem.externalLink} target="_blank" rel="noopener noreferrer">
                           View Original {workItem.category} <ExternalLink className="ml-2 h-4 w-4" /> {/* Use ExternalLink icon */}
                        </a>
                    </Button>
                </p>
             )}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static paths if you know all slugs beforehand
// export async function generateStaticParams() {
//   return allWorkItems.map((item) => ({
//     slug: item.slug,
//   }));
// }
