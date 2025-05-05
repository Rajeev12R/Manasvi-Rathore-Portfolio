'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Twitter, Send, Loader2, Phone, MapPin } from 'lucide-react'; // Added Phone, MapPin
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // --- Placeholder Submit Logic ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted (placeholder):', { name, email, message });

    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);

     toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Manasvi will get back to you soon.",
      variant: "default",
    });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <Mail className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Get In Touch
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            Interested in collaborating, have a question, or just want to connect? Send a message or find me online.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form Card */}
          <Card className="shadow-md border-secondary slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-foreground">Send a Message</CardTitle>
              <CardDescription className="text-muted-foreground font-body">Fill out the form below.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-body">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background border-input focus:ring-primary font-body"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-body">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-input focus:ring-primary font-body"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="font-body">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="bg-background border-input focus:ring-primary font-body"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 shadow hover:shadow-md font-body">
                   {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Socials */}
          <div className="space-y-8 flex flex-col justify-center slide-up" style={{ animationDelay: '0.4s' }}>
             <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Contact Information</h3>
                 <div className="space-y-2 text-muted-foreground font-body">
                     <a href="tel:+6260320012" className="flex items-center gap-3 hover:text-primary transition-colors">
                         <Phone className="h-5 w-5 text-primary/80" />
                         <span>+626-032-0012</span>
                     </a>
                     <a href="mailto:jiya21rathore@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 text-primary/80" />
                        <span>jiya21rathore@gmail.com</span>
                     </a>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary/80" />
                        <span>22, Chitrabagh Colony, near Khandwa Naka, Indore</span>
                      </div>
                 </div>
             </div>

             <div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Connect Online</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10">
                    <a href="https://www.linkedin.com/in/jiya-rathore-068aaa311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                   {/* Add Twitter/X if applicable */}
                   {/* <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button> */}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
