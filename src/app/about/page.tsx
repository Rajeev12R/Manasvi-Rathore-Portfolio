import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Experience } from "@/components/sections/experience"
import { Education } from "@/components/sections/education"
import { Achievements } from "@/components/sections/achievements"
import { Separator } from "@/components/ui/separator"
import { Award, BookOpen, Briefcase, Heart, Star, Users } from "lucide-react"
import Link from "next/link"
import jiya from "@/assets/jiya.jpg"
export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section with Profile */}
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 relative bg-background overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-60 -z-10"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-full blur-3xl opacity-40 -z-10"></div>
          <div className="absolute top-1/4 left-0 w-[200px] h-[200px] bg-gradient-to-tr from-secondary/5 to-primary/5 rounded-full blur-3xl opacity-30 -z-10"></div>

          {/* Profile image with animated border */}
          <div className="mb-8 flex flex-col items-center relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-70 blur-xl animate-pulse"></div>
            <img
              src={jiya.src}
              alt="Manasvi Rathore portrait"
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl border-4 border-background object-cover z-10"
            />
          </div>

          {/* Creative icon */}
          <div className="mb-4 flex items-center justify-center"></div>

          {/* Name and creative heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold font-serif text-foreground text-center mb-3 tracking-tight">
            Hi, I'm Manasvi Rathore
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full mx-auto mb-6"></div>

          {/* Friendly, simple English intro */}
          <div className="max-w-2xl mx-auto text-center space-y-5 text-lg md:text-xl text-muted-foreground font-body px-4">
            <p>
              I'm a media student who loves telling stories that matter. Ever
              since I was young, I've been curious about the world and the
              people in it. That curiosity led me to journalism, where I get to
              explore, learn, and share new things every day.
            </p>
            <p>
              My journey has been full of exciting experiences—writing articles,
              making videos, and even trying my hand at voice-overs. I believe
              in honest, ethical reporting and always aim to make a positive
              impact through my work.
            </p>
            <p>
              I enjoy meeting new people, learning from different perspectives,
              and using creativity to solve problems. Whether I'm working on a
              news story or a creative project, I put my heart into everything I
              do.
            </p>
            <p>
              Thank you for visiting my portfolio. I hope you enjoy exploring my
              work as much as I enjoy creating it!
            </p>
          </div>
        </section>

        {/* Values and Interests Section */}
        <section className="w-full py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Drives Me
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto mb-4"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The values that guide my work and the things I'm passionate
                about
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Ethical Storytelling
                </h3>
                <p className="text-muted-foreground">
                  I believe in telling stories with honesty, respect, and
                  integrity. Every piece I create aims to represent the truth
                  and respect the dignity of those involved.
                </p>
              </div>

              {/* Value 2 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Impact</h3>
                <p className="text-muted-foreground">
                  My work is driven by a desire to make a positive difference in
                  communities. I focus on stories that can inspire change,
                  create awareness, or bring people together.
                </p>
              </div>

              {/* Value 3 */}
              <div className="bg-background rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Creative Expression
                </h3>
                <p className="text-muted-foreground">
                  I love finding creative ways to tell stories across different
                  media. Whether through writing, video, or audio, I enjoy
                  experimenting with formats that best serve the story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <div className="container px-4 md:px-6 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The path that has shaped my skills and perspective in media and
              journalism
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Experience</h3>
              <p className="text-muted-foreground">
                From internships to freelance projects, each role has taught me
                valuable skills and shaped my approach to media.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Educational Background</h3>
              <p className="text-muted-foreground">
                My academic journey has provided me with both theoretical
                knowledge and practical skills in journalism and media.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3">
              <div className="p-4 bg-primary/10 rounded-full">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">
                Achievements & Recognition
              </h3>
              <p className="text-muted-foreground">
                Milestones that mark my growth and the recognition my work has
                received along the way.
              </p>
            </div>
          </div>

          {/* Include the sections previously on the homepage */}
          <Experience />
          <Separator className="my-12 bg-primary/20" />
          <Education />
          <Separator className="my-12 bg-primary/20" />
          <Achievements />
        </div>

        {/* Personal Touch Section */}
        <section className="w-full py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Beyond Journalism
              </h2>
              <div className="w-16 h-1 bg-primary/40 rounded-full mx-auto mb-8"></div>

              <div className="bg-background rounded-xl p-8 shadow-md">
                <p className="text-lg mb-4">
                  When I'm not chasing stories or working on media projects, you
                  might find me:
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">•</div>
                    <p>
                      Exploring local bookstores and adding to my ever-growing
                      collection of books on media theory, creative writing, and
                      biographies of inspiring journalists
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">•</div>
                    <p>
                      Practicing photography in my neighborhood, trying to
                      capture everyday moments that tell meaningful stories
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">•</div>
                    <p>
                      Volunteering with a local literacy program, helping young
                      people develop their writing and communication skills
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 text-primary">•</div>
                    <p>
                      Attending documentary screenings and media events to stay
                      connected with the creative community
                    </p>
                  </li>
                </ul>

                <p className="text-lg">
                  These activities not only bring me joy but also enrich my
                  perspective as a storyteller and media professional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Connect
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always interested in new opportunities, collaborations, or
                just having a conversation about media and storytelling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
