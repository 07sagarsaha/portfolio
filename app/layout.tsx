
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import { CursorEffect } from '@/components/ui/cursor-effect';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sagar Saha - Software Developer Portfolio',
  description: 'Personal portfolio of Sagar Saha, a software developer showcasing projects and experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "min-h-screen bg-gradient-to-br from-background via-background to-accent/20 bg-fixed"
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background/80 pointer-events-none" />
          <CursorEffect />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
