import { Feather, Linkedin, Twitter, Mail } from 'lucide-react'; // Add social icons
import Link from 'next/link'; // Use Link for internal navigation if needed
import { Button } from '@/components/ui/button'; // Use Button for icon links

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row md:gap-0 md:py-6">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <Feather className="hidden h-5 w-5 text-muted-foreground md:inline-block" />
          <p className="text-sm leading-loose text-muted-foreground">
            © {new Date().getFullYear()} Verity's Voice. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-3">
           {/* Replace '#' with actual profile links */}
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
           <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary transition-colors">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
           {/* Optional: Link to Contact section */}
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
