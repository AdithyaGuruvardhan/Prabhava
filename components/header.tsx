'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-20 z-[100] transition-all duration-300 pointer-events-none ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#216974]/10'
            : 'bg-white/90 backdrop-blur-sm border-b border-transparent'
        }`}
      />

      <header
        className="fixed top-0 inset-x-0 mx-auto flex h-20 w-full max-w-7xl items-center justify-center bg-transparent px-4 pointer-events-none z-[110] sm:px-6 lg:px-8"
        aria-label="Main navigation header"
      >
        <a href="/" className="sm-logo flex items-center select-none pointer-events-auto" aria-label="Logo">
          <Image
            src="/prabhava_logo.png"
            alt="Logo"
            width={400}
            height={104}
            sizes="(max-width: 768px) 128px, 160px"
            className="block h-8 md:h-10 w-auto object-contain transition-all duration-300"
            style={{ width: 'auto' }}
            draggable={false}
            priority
          />
        </a>
      </header>
    </>
  )
}
