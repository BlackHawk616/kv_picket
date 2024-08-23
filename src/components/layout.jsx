import { Manrope } from 'next/font/google';
import { cn } from '@/lib/utils';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head';

const fontHeading = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function Layout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Kendriya Vidyalaya Picket</title>
        <meta name="description" content="Welcome to the official website of Kendriya Vidyalaya Picket" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
