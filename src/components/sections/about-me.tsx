import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AboutMe() {
  return (
    <section
      id="about"
      className="w-full py-10 md:py-10 bg-background flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-center">
          <div className="space-y-6 slide-up">
            <span className="block text-sm font-medium uppercase tracking-wider text-primary font-body text-center lg:text-left">
              About Me
            </span>
            <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl text-center lg:text-left">
              Driven by Storytelling
            </h2>
            <p
              className="text-muted-foreground md:text-lg font-body text-center lg:text-left leading-relaxed"
              style={{ animationDelay: "0.1s" }}
            >
              I'm Manasvi Rathore, a media student passionate about journalism
              and communication. My focus lies in ethical reporting, engaging
              content creation, and understanding the dynamic media landscape.
            </p>
            <p
              className="text-muted-foreground md:text-lg font-body text-center lg:text-left leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Eager to learn and adapt, I aim to contribute meaningful
              narratives in today's evolving industry.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 transition-colors font-body"
                style={{ animationDelay: "0.3s" }}
              >
                <Link href="/about">
                  Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          <div
            className="flex items-center justify-center slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Image
              src="https://picsum.photos/seed/manasvi-rathore-profile/500/500" // Slightly different seed for variety
              alt="Manasvi Rathore - Media Student"
              width={450}
              height={450}
              className="rounded-lg shadow-lg object-cover aspect-square border-4 border-secondary transition-transform duration-300 hover:scale-105"
              data-ai-hint="professional indian woman student portrait candid" // Updated hint
            />
          </div>
        </div>
      </div>
    </section>
  )
}
