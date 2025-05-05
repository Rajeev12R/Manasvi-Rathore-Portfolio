import { Linkedin, Twitter, Mail } from "lucide-react" // Use PenTool icon
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-beige pt-8 pb-4">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0 max-w-[90%] mx-auto">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-luxury-heading text-lg font-bold tracking-wider uppercase mb-2">
            © {currentYear} Manasvi Rathore
          </div>
          <div className="text-luxury-muted text-sm">All rights reserved.</div>
          <div
            className="luxury-divider"
            style={{
              background: "var(--color-peach)",
              width: "2.5rem",
              margin: "1rem 0",
            }}
          ></div>
        </div>
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-pink hover:text-peach transition-colors"
          >
            <a
              href="https://www.linkedin.com/in/jiya-rathore-068aaa311/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-pink hover:text-peach transition-colors"
          >
            <a
              href="https://twitter.com/your_twitter_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-pink hover:text-peach transition-colors"
          >
            <a
              href="https://instagram.com/your_instagram_handle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-pink hover:text-peach transition-colors"
          >
            <Link href="#contact" aria-label="Contact Section">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}
