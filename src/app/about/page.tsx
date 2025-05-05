import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, PenTool } from 'lucide-react'; // Use PenTool or another relevant icon

export function Header() {
  // Updated nav items removing links to sections moved to About page
  const navItems = [
    { label: 'Home', href: '/#home' },
    { label: 'About', href: '/about' }, // Link to the new About page
    { label: 'Work', href: '/#featured-work' }, // Link to Featured Work section
    // Removed Experience, Education, Achievements
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/#home" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <PenTool className="h-6 w-6 text-primary" /> {/* Use a different icon */}
          {/* Apply heading font specifically to the name */}
          <span className="font-heading text-lg font-bold text-foreground">Manasvi Rathore</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              // Smooth scroll for homepage links, standard nav for others
              scroll={item.href.startsWith('/#')}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/#home" className="flex items-center gap-2 text-lg font-semibold mb-4">
                  <PenTool className="h-6 w-6 text-primary" />
                  <span className="font-heading text-foreground">Manasvi Rathore</span> {/* Heading font */}
                </Link>
                {navItems.map((item) => (
                  <SheetClose asChild key={item.label}>
                     <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      scroll={item.href.startsWith('/#')}
                     >
                       {item.label}
                     </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}