import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Menu, PenTool } from "lucide-react" // Use PenTool or another relevant icon

export function Header() {
  // Updated nav items removing links to sections moved to About page
  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/about" }, // Link to the new About page
    { label: "Work", href: "/work" }, // Link to the new Work page
    // Removed Experience, Education, Achievements
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <header className="w-full bg-beige shadow-md">
      <nav className="container flex items-center justify-between py-6 px-4 md:px-10">
        <div className="text-2xl text-luxury-heading tracking-wider uppercase">
          Manasvi
        </div>
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 items-center justify-center mx-auto">
          <li>
            <Link
              href="/"
              className="font-heading text-pink uppercase tracking-widest font-bold hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="font-heading text-luxury-heading uppercase tracking-widest font-bold hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className="font-heading text-luxury-heading uppercase tracking-widest font-bold hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-heading text-luxury-heading uppercase tracking-widest font-bold hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-7 w-7 text-pink" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-white px-0 pt-0 w-80 max-w-full flex flex-col justify-between h-full"
            >
              {/* Profile Section */}
              <div className="flex flex-col items-center pt-8 pb-4">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-2 shadow-md">
                  <span className="text-3xl font-heading font-extrabold text-pink">
                    M
                  </span>
                </div>
                <div className="text-lg font-heading font-bold text-luxury-heading tracking-widest uppercase">
                  Manasvi Rathore
                </div>
                <div className="text-pink text-xs font-heading tracking-widest uppercase mt-1">
                  Media Student
                </div>
              </div>
              <div className="border-t border-peach my-4"></div>
              {/* Nav Links */}
              <nav className="flex flex-col space-y-6 w-full items-center">
                <Link
                  href="/"
                  className="font-heading text-pink uppercase tracking-widest font-bold text-xl hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="font-heading text-luxury-heading uppercase tracking-widest font-bold text-xl hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
                >
                  About
                </Link>
                <Link
                  href="/work"
                  className="font-heading text-luxury-heading uppercase tracking-widest font-bold text-xl hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
                >
                  Work
                </Link>
                <Link
                  href="#contact"
                  className="font-heading text-luxury-heading uppercase tracking-widest font-bold text-xl hover:text-peach transition-colors border-b-2 border-transparent hover:border-pink-500 focus:border-peach-400 active:border-peach-400"
                >
                  Contact
                </Link>
              </nav>
              {/* Social Icons */}
              <div className="flex items-center space-x-4 justify-center mt-8 mb-6">
                <a
                  href="https://www.linkedin.com/in/jiya-rathore-068aaa311/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-pink hover:text-peach transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-9h4v1.5" />
                    <circle cx="6" cy="6" r="2" />
                    <rect x="2" y="9" width="8" height="12" rx="2" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/your_twitter_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="text-pink hover:text-peach transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.963-2.475 8.94 8.94 0 0 1-2.828 1.082A4.48 4.48 0 0 0 16.11 4c-2.48 0-4.49 2.01-4.49 4.49 0 .352.04.695.116 1.022C7.728 9.36 4.1 7.6 1.67 4.905c-.386.664-.607 1.437-.607 2.26 0 1.56.794 2.936 2.003 3.744a4.48 4.48 0 0 1-2.034-.563v.057c0 2.18 1.55 4.002 3.604 4.418-.377.103-.775.158-1.186.158-.29 0-.57-.028-.844-.08.57 1.78 2.23 3.08 4.2 3.12A8.98 8.98 0 0 1 2 19.54a12.67 12.67 0 0 0 6.86 2.01c8.23 0 12.74-6.82 12.74-12.74 0-.19-.004-.38-.013-.57A9.1 9.1 0 0 0 24 4.59a8.98 8.98 0 0 1-2.54.697z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/your_instagram_handle"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="text-pink hover:text-peach transition-colors"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
