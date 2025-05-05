import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google'; // Import new fonts
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

// Configure Poppins for body text
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include necessary weights
  variable: '--font-poppins',
});

// Configure Playfair Display for headings
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'], // Include necessary weights for headings
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: "Manasvi Rathore | Media & Journalism Portfolio", // Updated title
  description: "Explore the portfolio of Manasvi Rathore, a media student showcasing skills in reporting, editing, content creation, and media ethics.", // Updated description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables to the body */}
      <body className={cn(
          "min-h-screen bg-background font-body antialiased",
           poppins.variable,
           playfairDisplay.variable
           )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
