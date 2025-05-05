'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Send, Loader2, Phone, MapPin } from 'lucide-react'; // Removed Twitter, added Send, Loader2
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
    if (isSubmitting) return; // Prevent double submission
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted (placeholder):', { name, email, message });

    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false);

     // Show success toast
     toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
      variant: "default", // Use 'default' or customize further if needed
    });
  };

  return (
    // Changed ID to match header link
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
           <Mail className="h-12 w-12 text-primary mb-2 slide-up" />
          <h2 className="text-3xl font-heading font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl slide-up" style={{ animationDelay: '0.1s' }}>
            Get In Touch
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl lg:text-base xl:text-xl slide-up font-body" style={{ animationDelay: '0.2s' }}>
            Whether you have a question, a collaboration idea, or just want to connect, feel free to reach out. I'm always open to discussing media, journalism, and potential opportunities.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact Form Card */}
          <Card className="shadow-lg border-secondary slide-up bg-card p-2 md:p-0" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-foreground">Send a Direct Message</CardTitle>
              <CardDescription className="text-muted-foreground font-body">Fill out the form below, and I'll respond promptly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="font-body font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-background border-input focus:ring-primary font-body text-base"
                    aria-label="Your Name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="font-body font-medium">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-background border-input focus:ring-primary font-body text-base"
                     aria-label="Your Email Address"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="font-body font-medium">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5} // Increased rows for more space
                    className="bg-background border-input focus:ring-primary font-body text-base"
                    aria-label="Your Message"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow hover:shadow-md font-body text-base py-3 disabled:opacity-70">
                   {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending... Please Wait
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
          <div className="space-y-10 flex flex-col justify-center slide-up" style={{ animationDelay: '0.4s' }}>
             <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 border-b border-primary/30 pb-2">Contact Information</h3>
                 <div className="space-y-3 text-muted-foreground font-body text-base md:text-lg">
                     <a href="tel:+916260320012" className="flex items-center gap-3 group hover:text-primary transition-colors">
                         <Phone className="h-5 w-5 text-primary/80 group-hover:scale-110 transition-transform" />
                         <span>+91 6260320012</span>
                     </a>
                     <a href="mailto:jiya21rathore@gmail.com" className="flex items-center gap-3 group hover:text-primary transition-colors">
                        <Mail className="h-5 w-5 text-primary/80 group-hover:scale-110 transition-transform" />
                        <span>jiya21rathore@gmail.com</span>
                     </a>
                      <div className="flex items-start gap-3"> {/* Use items-start for potential multi-line address */}
                        <MapPin className="h-5 w-5 text-primary/80 mt-1 flex-shrink-0" />
                        <span>22, Chitrabagh Colony, Near Khandwa Naka, Indore, Madhya Pradesh, India</span>
                      </div>
                 </div>
             </div>

             <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-4 border-b border-primary/30 pb-2">Connect Online</h3>
                <div className="flex space-x-4">
                  {/* LinkedIn Button */}
                  <Button variant="outline" size="icon" asChild className="text-primary border-primary hover:bg-primary/10 hover:scale-110 transform transition-all duration-300 rounded-full w-12 h-12">
                    <a href="https://www.linkedin.com/in/jiya-rathore-068aaa311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </Button>
                   {/* Add other relevant social links here if needed */}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
