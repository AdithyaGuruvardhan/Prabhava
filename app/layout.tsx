import React from "react"
import type { Metadata, Viewport } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import GlobalVideoProvider from '@/components/global-video-provider'
import { CopyProtection } from '@/components/copy-protection'

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: '--font-roboto',
  display: 'swap',
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
    icon: '/prabhava_logo.png',
    apple: '/prabhava_logo.png',
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
          {/* Preconnect/dns-prefetch optimized */}
          <link rel="dns-prefetch" href="https://www.youtube-nocookie.com" />
          {/* JSON-LD Schema Markup for SEO, AEO, AIO, GEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "https://nammaprabhava.com/#organization",
                    "name": "Prabhava by Sripada Studios",
                    "url": "https://nammaprabhava.com",
                    "logo": "https://nammaprabhava.com/prabhava_logo.png",
                    "description": "Prabhava is the dedicated film promotion and production vertical of Sripada Studios, Bengaluru, Karnataka. Specialising in Kannada cinema marketing, digital campaigns, trailer launches, OTT promotion, and celebrity PR.",
                    "address": {
                      "@type": "PostalAddress",
                      "addressLocality": "Bengaluru",
                      "addressRegion": "Karnataka",
                      "addressCountry": "IN"
                    },
                    "sameAs": [
                      "https://www.youtube.com/@SripadaStudios",
                      "https://www.instagram.com/sripadastudios"
                    ]
                  },
                  {
                    "@type": "WebSite",
                    "@id": "https://nammaprabhava.com/#website",
                    "url": "https://nammaprabhava.com",
                    "name": "Prabhava",
                    "publisher": {
                      "@id": "https://nammaprabhava.com/#organization"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://nammaprabhava.com/#faq",
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "What is Prabhava?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Prabhava is the specialised film production and digital promotion vertical of Sripada Studios, based in Bengaluru, Karnataka. It focuses on end-to-end movie marketing, trailer launches, celebrity digital PR, and post-production creative services for Kannada cinema."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Which Kannada movies has Prabhava promoted?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Prabhava has driven high-impact digital promotional campaigns for notable Kannada films including 'The Judgement' starring Ravichandran and 'Kerebete', managing teaser/trailer cuts, digital PR, event photos, and over 100+ creative promotion clips."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What marketing services does Prabhava provide for films?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Prabhava provides comprehensive film marketing services including trailer and teaser editing, lyrical video production, celebrity interview setups, digital PR, OTT platform campaigns, poster/creative design, and theatrical launch event coverage."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Where is Prabhava by Sripada Studios located?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Prabhava by Sripada Studios is located in Bengaluru, Karnataka, India, serving the Kannada film industry and regional cinema makers across South India."
                        }
                      }
                    ]
                  }
                ]
              })
            }}
          />
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
