"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  ExternalLink,
  FileText,
  Video,
  MicVocal,
  ArrowRight,
  Newspaper,
  Radio,
} from "lucide-react" // Added Newspaper, Radio

interface WorkItem {
  id: number
  title: string
  description: string
  imageUrl: string
  imageHint: string
  link: string
  category: "Article" | "Video" | "Voice" | "Report" | "Radio" // Added Report, Radio categories
  icon: React.ElementType
}

// Placeholder Work Items - Added more examples
const workItems: WorkItem[] = [
  {
    id: 1,
    title: "Investigative Report on Local Water Quality",
    description:
      "An in-depth article exploring the findings of a recent water quality study in the Indore region.",
    imageUrl: "https://picsum.photos/seed/water-report/600/400",
    imageHint: "water sample test tube analysis",
    link: "/work/water-quality-report",
    category: "Report",
    icon: Newspaper, // Using Newspaper for reports
  },
  {
    id: 2,
    title: "Short Film: Wetlands for Life Workshop",
    description:
      "A short documentary created during the workshop, highlighting the importance of wetland conservation.",
    imageUrl: "https://picsum.photos/seed/wetlandsfilm/600/400",
    imageHint: "wetlands nature film camera sunset",
    link: "/work/wetlands-film",
    category: "Video",
    icon: Video,
  },
  {
    id: 3,
    title: "Voice Mimic Showcase: News Anchors",
    description:
      "Demonstration of voice mimicry skills, replicating the styles of prominent news anchors.",
    imageUrl: "https://picsum.photos/seed/voice-mimic/600/400",
    imageHint: "microphone audio wave sound studio",
    link: "/work/voice-mimic-anchors",
    category: "Voice",
    icon: MicVocal,
  },
  {
    id: 4,
    title: "Feature Article: The Rise of Digital Journalism",
    description:
      "Exploring the impact of technology on modern journalism practices and media consumption.",
    imageUrl: "https://picsum.photos/seed/digital-journalism/600/400",
    imageHint: "laptop screen code digital news",
    link: "/work/digital-journalism-feature",
    category: "Article",
    icon: FileText,
  },
  {
    id: 5,
    title: "MY FM Radio Voice-Over",
    description:
      "Contributed a child's voice-over for a segment during the 'CT Topper Event' on My FM radio.",
    imageUrl: "https://picsum.photos/seed/myfm-radio/600/400",
    imageHint: "radio tower broadcast microphone event",
    link: "#", // Placeholder link, perhaps to a section in About or no link if no artifact exists
    category: "Radio",
    icon: Radio,
  },
  {
    id: 6,
    title: "News Report: Local Community Event",
    description:
      "Authored news articles and produced video segments covering a recent local community initiative.",
    imageUrl: "https://picsum.photos/seed/community-event/600/400",
    imageHint: "community gathering people talking meeting event hall",
    link: "#", // Placeholder link
    category: "Report",
    icon: Newspaper,
  },
  {
    id: 7,
    title: "Podcast Episode: Media Ethics Today",
    description:
      "Hosted and produced a podcast episode discussing contemporary ethical challenges in media.",
    imageUrl: "https://picsum.photos/seed/podcast-ethics/600/400",
    imageHint: "podcast microphone headphones sound waves audio mixer",
    link: "#", // Placeholder link
    category: "Voice",
    icon: MicVocal,
  },
  {
    id: 8,
    title: "Video Interview: Local Artist Profile",
    description:
      "Conducted and edited a video interview profiling a local emerging artist and their work.",
    imageUrl: "https://picsum.photos/seed/artist-interview/600/400",
    imageHint: "artist painting easel studio interview camera",
    link: "#", // Placeholder link
    category: "Video",
    icon: Video,
  },
]

// Automatically derive categories from the work items
const categories = ["All", ...new Set(workItems.map((p) => p.category))]

export function WorkGrid() {
  const [filter, setFilter] = useState("All")

  const filteredWork = workItems.filter(
    (p) => filter === "All" || p.category === filter
  )

  return (
    <section
      id="work-grid"
      className="w-full py-10 md:py-14 bg-background flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        {/* Filter Buttons */}
        {categories.length > 1 && (
          <div
            className="flex justify-center flex-wrap gap-3 mb-6 slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`transition-all duration-300 ease-out font-body rounded-full px-5 py-2 text-sm md:text-base ${
                  filter === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 hover:shadow-sm"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        )}

        {/* Work Grid */}
        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ease-out`}
        >
          {filteredWork.length > 0 ? (
            filteredWork.map((item, index) => (
              <WorkCard key={item.id} item={item} index={index} />
            ))
          ) : (
            <p
              className="col-span-full text-center text-muted-foreground italic font-body py-12 text-lg slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              No projects match the selected filter.
            </p>
          )}
        </div>

        {/* Placeholder for empty state if needed */}
        {workItems.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground italic font-body py-12 text-lg slide-up">
            More work examples coming soon. Check back later!
          </p>
        )}
      </div>
    </section>
  )
}

interface WorkCardProps {
  item: WorkItem
  index: number
}

function WorkCard({ item, index }: WorkCardProps) {
  const delay = 0.2 + index * 0.08 // Adjusted delay timing
  return (
    <Card
      className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col slide-up border-border/50 group h-full bg-card hover:border-primary/60 transform hover:-translate-y-1.5"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardHeader className="p-0 relative">
        <Link href={item.link} aria-label={`View details for ${item.title}`}>
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={600}
            height={340}
            className="aspect-[16/9] object-cover w-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={item.imageHint}
          />
        </Link>
        {/* Category Icon Badge */}
        <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm text-primary-foreground p-2 rounded-full shadow-lg border border-primary-foreground/20">
          <item.icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent className="p-5 flex-grow flex flex-col">
        {" "}
        {/* Slightly reduced padding */}
        <CardTitle className="text-xl mb-2 text-foreground font-heading group-hover:text-primary transition-colors line-clamp-2">
          {item.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground font-body mb-4 flex-grow line-clamp-3">
          {item.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-5 pt-0 mt-auto border-t border-border/30">
        {" "}
        {/* Added border */}
        <Button
          variant="link"
          asChild
          className="text-primary hover:underline p-0 h-auto font-body group/link text-sm font-medium"
        >
          <Link href={item.link}>
            {item.category === "Article"
              ? "Read Article"
              : item.category === "Video"
              ? "Watch Video"
              : item.category === "Voice"
              ? "Listen Now"
              : item.category === "Report"
              ? "View Report"
              : item.category === "Radio"
              ? "Listen Segment"
              : "View Project"}
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
