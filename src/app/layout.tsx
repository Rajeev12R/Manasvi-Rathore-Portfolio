import type { Metadata } from 'next';
import { Inter } from 'next/font/google'; // Using Inter as a clean, modern font
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Correctly configure Inter

export const metadata: Metadata = {
  title: "Verity's Voice", // Update title
  description: "Professional portfolio of an aspiring journalist.", // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Added suppressHydrationWarning */}
      <body className={`${inter.variable} font-sans antialiased`}> {/* Use Inter font variable */}
        {children}
        <Toaster /> {/* Add Toaster here */}
      </body>
    </html>
  );
}
