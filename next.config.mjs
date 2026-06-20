/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [60, 75],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'img.youtube.com' },
      { protocol: 'https', hostname: 'i.ytimg.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      { protocol: 'https', hostname: 'lookaside.instagram.com' },
    ],
  },
  async headers() {
    const securityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      {
        key: 'Content-Security-Policy',
        value: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.youtube-nocookie.com",
          "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
          "font-src 'self' https://fonts.gstatic.com",
          "img-src 'self' data: blob: https://img.youtube.com https://i.ytimg.com https://images.unsplash.com https://scontent.cdninstagram.com https://lookaside.instagram.com",
          "media-src 'self' blob:",
          "frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com",
          "connect-src 'self' https://www.youtube.com",
        ].join('; '),
      },
    ]

    const cacheImmutable = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]

    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/:path*.webm', headers: cacheImmutable },
      { source: '/:path*.mp4',  headers: cacheImmutable },
      { source: '/:path*.webp', headers: cacheImmutable },
      { source: '/:path*.avif', headers: cacheImmutable },
      { source: '/:path*.jpg',  headers: cacheImmutable },
      { source: '/:path*.png',  headers: cacheImmutable },
      { source: '/:path*.woff2',headers: cacheImmutable },
    ]
  },
}

export default nextConfig
