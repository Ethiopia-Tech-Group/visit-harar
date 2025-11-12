// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Header from './components/Header';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const georgia = Poppins({
  weight: ['400', '700'],
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Visit Harar - City of Saints | UNESCO World Heritage Site',
    template: '%s | Visit Harar'
  },
  description: 'Discover Harar\'s rich cultural heritage, history, and traditions through immersive storytelling and digital tourism',
  keywords: ['Harar', 'Ethiopia', 'UNESCO', 'tourism', 'cultural heritage', 'hyena feeding', 'Jugol Wall'],
  authors: [{ name: 'Ethiopia Tech Group' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Visit Harar - City of Saints',
    description: 'Explore the culture, history, and heart of Ethiopia\'s most iconic city',
    type: 'website',
    locale: 'en_US',
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${georgia.variable}`}>
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}