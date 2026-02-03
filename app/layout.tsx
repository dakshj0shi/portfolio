import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'Daksh Joshi | Blockchain Developer & Builder',
  description: 'Portfolio of Daksh Joshi - Blockchain Developer, Hackathon Winner, Dev Advocate, and Open Source Contributor specializing in Web3 technologies.',
  keywords: ['blockchain', 'developer', 'web3', 'hackathon', 'solidity', 'ethereum', 'full-stack'],
  authors: [{ name: 'Daksh Joshi' }],
  openGraph: {
    title: 'Daksh Joshi | Blockchain Developer & Builder',
    description: 'Portfolio of Daksh Joshi - Blockchain Developer, Hackathon Winner, Dev Advocate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daksh Joshi | Blockchain Developer & Builder',
    description: 'Portfolio of Daksh Joshi - Blockchain Developer, Hackathon Winner, Dev Advocate',
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-black text-[#F5F5F7]`}>
        {children}
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress MetaMask extension errors for portfolios that don't use Web3
              if (typeof window !== 'undefined') {
                const originalError = console.error;
                console.error = (...args) => {
                  if (args[0]?.toString().includes('MetaMask') || args[0]?.toString().includes('ethereum')) {
                    return;
                  }
                  originalError.apply(console, args);
                };
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
