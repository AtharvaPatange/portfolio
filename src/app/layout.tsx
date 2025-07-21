import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Preloader from './components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Atharva Patange - AI/ML Engineer',
  description: 'Portfolio of Atharva Patange - AI/ML Engineer, Hackathon Winner, and Full Stack Innovator',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}