import type { Metadata } from 'next';
import { Poppins, Playfair_Display } from 'next/font/google'; // Import new fonts
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
  title: "Manasvi Rathore | Media Student", // Update title
  description: "Portfolio of Manasvi Rathore, an enthusiastic media student with skills in reporting, editing, and content creation.", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply font variables to the body */}
      <body className={`${poppins.variable} ${playfairDisplay.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
