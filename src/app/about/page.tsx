import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import {
  User,
  GraduationCap,
  Briefcase,
  Sparkles,
  Target,
  PenTool,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ArrowLeft,
  Mic,
  MessageSquare,
  Languages,
  Edit3,
  Heart,
  Lightbulb,
  BrainCircuit,
  Film,
  Award,
} from 'lucide-react';

export default function AboutPage() {
  const skills = [
    { icon: Edit3, title: "News Reporting & Writing", description: "Adept at researching, analyzing, and crafting news articles and media strategies." },
    { icon: Mic, title: "Basic News Anchoring & Voice-Over", description: "Fundamental understanding of news presentation, delivery, and voice modulation." },
    { icon: BrainCircuit, title: "Social Media Content Management", description: "Experienced in creating and managing engaging content for social platforms." },
    { icon: MessageSquare, title: "Communication & Interpersonal Skills", description: "Strong verbal and written communication, effective collaboration." },
    { icon: Languages, title: "Languages", description: "Proficient in both Hindi and English." },
  ];

  const interests = [
      { icon: Heart, text: "Content Creation" },
      { icon: PenTool, text: "Journalism & Media Ethics" },
      { icon: Lightbulb, text: "Digital Trends & Innovation" },
      { icon: Target, text: "Political Analysis & Current Affairs" },
      { icon: BrainCircuit, text: "Social Sciences Research" },
  ];

  const achievements = [
    { icon: Award, title: "Bharatiya Patrakarita Mahotsav Masterclass", date: "Jun 2024", description: "Earned a certificate, enhancing journalistic skills." },
    { icon: Film, title: "\"Wetlands for Life\" Workshop", date: "Feb 2024", description: "Attended and created a short film, exploring environmental storytelling." },
    // Add MY FM if framed as achievement/recognition
    // { icon: Mic, title: "MY FM Radio Feature", date: "Jun 2024", description: "Provided voice-over for a radio segment." },
  ];


  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-secondary/10 to-background">
      <Header />
      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6">
          {/* Back Button */}
          <Button asChild variant="outline" className="mb-8 group transition-all hover:bg-primary/10 border-primary text-primary font-body slide-up">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Home
            </Link>
          </Button>

          {/* Profile Header */}
          <section className="mb-16 md:mb-24 text-center slide-up" style={{ animationDelay: '0.1s' }}>
            <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-primary shadow-lg">
              <AvatarImage src="https://picsum.photos/seed/manasvi-rathore-avatar/200/200" alt="Manasvi Rathore" data-ai-hint="professional indian woman student avatar" />
              <AvatarFallback>MR</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-heading font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-2">
              Manasvi Rathore
            </h1>
            <p className="text-xl font-medium text-primary mb-6">
              Media Student & Aspiring Journalist
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-muted-foreground text-sm md:text-base">
               <a href="tel:+916260320012" className="flex items-center gap-2 hover:text-primary transition-colors">
                 <Phone className="h-4 w-4" /> +91 6260320012
               </a>
               <a href="mailto:jiya21rathore@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                 <Mail className="h-4 w-4" /> jiya21rathore@gmail.com
               </a>
               <span className="flex items-center gap-2">
                 <MapPin className="h-4 w-4" /> Indore, India
               </span>
                <a href="https://www.linkedin.com/in/jiya-rathore-068aaa311/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" /> LinkedIn Profile
                </a>
             </div>
          </section>

          {/* Detailed Profile/About Section */}
          <section id="profile-detail" className="mb-16 md:mb-24 slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-md border-secondary overflow-hidden">
              <CardHeader className="bg-secondary/30">
                <CardTitle className="text-2xl font-heading font-semibold flex items-center gap-2 text-foreground">
                  <User className="h-6 w-6 text-primary" /> Profile Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4 text-muted-foreground font-body text-base md:text-lg">
                <p>
                  I am an enthusiastic and driven media student with a strong passion for journalism. My core interest lies in news reporting, meticulous editing, and upholding media ethics. I am committed to producing content that is not only well-researched and accurate but also engaging and impactful.
                </p>
                <p>
                  Continuously seeking to deepen my understanding of media dynamics and audience engagement strategies, I thrive in dynamic environments. I am adaptable, eager to learn new skills, and aim to contribute effectively to innovative media platforms within this ever-evolving industry. My academic foundation and practical experiences have equipped me with a versatile skill set ready for real-world application.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills-detail" className="mb-16 md:mb-24 slide-up" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow flex flex-col h-full">
                  <CardHeader className="flex flex-row items-center gap-4 pb-3 pt-5">
                    <skill.icon className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="text-lg font-semibold font-heading">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow pt-0">
                    <p className="text-sm text-muted-foreground font-body">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section id="interests-detail" className="mb-16 md:mb-24 slide-up" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground mb-8 text-center">Interests</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                  {interests.map((interest, index) => (
                     <Card key={index} className="bg-secondary/20 border-secondary p-4 flex items-center gap-3 hover:bg-secondary/40 transition-colors">
                         <interest.icon className="h-6 w-6 text-primary flex-shrink-0" />
                         <span className="text-base font-medium text-secondary-foreground font-body">{interest.text}</span>
                     </Card>
                  ))}
              </div>
          </section>

           {/* Achievements Section */}
           <section id="achievements-detail" className="slide-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground mb-8 text-center">Achievements & Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 p-6 border-secondary">
                     <achievement.icon className="h-10 w-10 text-primary mt-1 flex-shrink-0" />
                     <div className="flex-grow">
                      <CardTitle className="text-lg font-heading font-semibold text-foreground mb-1">{achievement.title}</CardTitle>
                      <p className="text-sm text-muted-foreground font-body mb-2">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground/80 font-mono">{achievement.date}</p>
                     </div>
                  </Card>
                ))}
              </div>
           </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
