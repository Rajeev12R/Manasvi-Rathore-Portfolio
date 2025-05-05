import { PenTool, Linkedin, Twitter, Mail } from 'lucide-react'; // Use PenTool icon
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:gap-0 md:py-6">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <PenTool className="hidden h-5 w-5 text-muted-foreground md:inline-block" /> {/* Use PenTool */}
          <p className="text-sm leading-loose text-muted-foreground font-body">
             © {currentYear} Manasvi Rathore. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
          {/* LinkedIn */}
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
            <a href="https://www.linkedin.com/in/jiya-rathore-068aaa311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
           {/* Optional: Twitter/X */}
           {/* <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              <Twitter className="h-5 w-5" />
            </a>
          </Button> */}
           {/* Link to Contact section */}
           <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
             <Link href="#contact" aria-label="Contact Section">
               <Mail className="h-5 w-5" />
             </Link>
           </Button>
        </div>
      </div>
    </footer>
  );
}
