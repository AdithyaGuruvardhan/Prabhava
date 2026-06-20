'use client'

import dynamic from 'next/dynamic'

const Prabhava = dynamic(() => import('@/components/prabhava/Prabhava'), {
  ssr: false,
})

export default function PrabhavaPage() {
  return (
    <Prabhava />
  )
}
