import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import { CursorEffect } from '@/components/ui/cursor-effect';

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CursorEffect />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
