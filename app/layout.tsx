import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import GlobalVideoProvider from '@/components/global-video-provider'
import { CopyProtection } from '@/components/copy-protection'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: '--font-roboto'
});

const SITE_URL = 'https://www.sripadastudios.com'
const SHARE_IMAGE = `${SITE_URL}/prabhava/rishab_shetty_poster.webp`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Prabhava',
  description:
    'Prabhava is the film production and promotion vertical of Sripada Studios, Bengaluru. Specialising in Kannada movie marketing, teaser and trailer launches, OTT promotion, celebrity promotion, and digital PR for films in Karnataka.',
  keywords: [
    'Prabhava film production Bengaluru',
    'Kannada film promotion Sripada Studios',
    'Prabhava movie marketing Bengaluru',
    'Kannada cinema production Karnataka',
    'film promotion vertical Bengaluru',
    'OTT Kannada film promotion',
    'Kannada movie digital marketing',
    'film PR agency Bengaluru Prabhava',
    'movie release marketing Karnataka',
    'trailer launch Bengaluru',
    'teaser promotion Kannada film',
    'celebrity promotion Bengaluru',
    'influencer marketing Kannada movies',
    'entertainment marketing agency Bengaluru',
  ],
  alternates: { canonical: `${SITE_URL}/prabhava` },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/prabhava`,
    siteName: 'Prabhava Sripada Studios',
    title: 'Prabhava',
    description:
      'Prabhava by Sripada Studios — Bengaluru\'s dedicated Kannada film promotion and production unit. Teaser launches, OTT promotion, celebrity PR, and digital campaigns.',
    images: [{ url: SHARE_IMAGE, alt: 'Prabhava — Film Promotion Bengaluru' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prabhava',
    description:
      'Kannada film production and promotion by Prabhava — part of Sripada Studios, Bengaluru, Karnataka.',
    images: [SHARE_IMAGE],
  },
  generator: 'Next.js',
  applicationName: 'Prabhava',
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: '/ss_favicon.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en">
        <head>
          {/* Preconnect to Google Fonts CDN for pages that load custom fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          {/* Preconnect to YouTube for the About section thumbnail */}
          <link rel="preconnect" href="https://img.youtube.com" />
          <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
        </head>
        <body className={`${roboto.variable} copy-protected font-sans antialiased`}>
          <CopyProtection />
          <GlobalVideoProvider>
            {children}
          </GlobalVideoProvider>
        </body>
      </html>
  )
}
