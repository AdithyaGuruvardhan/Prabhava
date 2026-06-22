'use client'
import { useEffect, useRef, useState } from 'react'
import { LocalVideo } from '@/components/ui/local-video'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const caseStudies = [
  {
    title: 'THE JUDGEMENT MOVIE',
    description:
      'From crafting the perfect trailer and teaser to producing a myriad of promotional reels, Sripada Studios will be there every step of the way, offering robust digital marketing support for your movie’s promotional activities. And when it comes to celebrating the success story of your release events, you can count on Sripada Studios to have your back, ensuring your movie shines brightly in the digital spotlight.',
    embedUrl: 'https://www.youtube.com/embed/h6QG0Jhl5ys?rel=0&modestbranding=1',
  },
  {
    title: 'KEREBETE MOVIE',
    description:
      'Sripada Studios has been a successful hand behind the digital promotion of the movie Kerebete, playing a key role in its success. With over 100 engaging videos, and 2 catchy lyrical ones and captivating trailers, We’ve made sure Kerebete grabs attention online. From premieres to capturing every moment with event photos and videos, We’ve covered all bases to get Kerebete noticed.',
    embedUrl: 'https://www.youtube.com/embed/SV0hNyYXlhs?rel=0&modestbranding=1',
  },
]

const creativeImages = [
  '/prabhava/film_posters/45.webp',
  '/prabhava/film_posters/ap.webp',
  '/prabhava/film_posters/dm.webp',
  '/prabhava/film_posters/jd (2).webp',
  '/prabhava/film_posters/jd.webp',
  '/prabhava/film_posters/kaalapathar.webp',
  '/prabhava/film_posters/lm.webp',
  '/prabhava/film_posters/mk.webp',
  '/prabhava/film_posters/pentagon.webp',
  '/prabhava/film_posters/sf (2).webp',
  '/prabhava/film_posters/sf.webp',
  '/prabhava/film_posters/tt.webp',
  '/prabhava/film_posters/ui.webp',
]

const filmyClients = [
  { name: 'Film Client 45', logo: '/film-clients/color/45.png' },
  { name: 'Film Client 100', logo: '/film-clients/color/KP.png' },
  { name: 'Film Client De', logo: '/film-clients/color/GP2.png' },
  { name: 'Film Client GP2', logo: '/film-clients/color/JD.png' },
  { name: 'Film Client JD', logo: '/film-clients/color/De.png' },
  { name: 'Film Client KB', logo: '/film-clients/color/KB.png' },
  { name: 'Film Client KP', logo: '/film-clients/color/100.png' },
  { name: 'Film Client KPS', logo: '/film-clients/color/TT.png' },
  { name: 'Film Client MK', logo: '/film-clients/color/MK.png' },
  { name: 'Film Client TT', logo: '/film-clients/color/KPS.png' },
  { name: 'Film Client Ui', logo: '/film-clients/color/Ui.png' },
  { name: 'Film Client YK', logo: '/film-clients/color/YK.png' },
]

const videoEditCards = [
  {
    title: 'Dr.RajKumar Tribute Video',
    video: '/video-edits/Dr.Raj_Kumar.mp4',
  },
  {
    title: '45 Motion Poster Making',
    video: '/video-edits/45_making.mp4',
  },
  {
    title: 'Gorukana Lyrics song',
    video: '/video-edits/Dhanya_Ramkumar.mp4',
  },
  {
    title: 'Kaalapathar End Credits',
    video: '/video-edits/kalapathar_credits_making.mp4',
  },
  {
    title: 'Longoti Man\nPromotional Materials',
    video: '/video-edits/longoti_making.mp4',
  },
]

const btsVideos = [
  '/prabhava/bts/shivanna_bts.mp4',
  '/prabhava/bts/45_event (1).mp4',
]

const showreelVideo = '/prabhava/rishab_shetty.mp4'

const eventHighlightVideos = [
  {
    title: '45 Event Highlights',
    video: '/prabhava/events/45_event.mp4',
    orientation: 'horizontal',
    previewStart: 3,
  },
  {
    title: 'Manada Kadalu Event Highlights',
    video: '/prabhava/events/mk_event.mp4',
    orientation: 'vertical',
    previewStart: 3,
  },
  {
    title: 'Yash Event Highlights',
    video: '/prabhava/events/yash_event.mp4',
    orientation: 'horizontal',
    previewStart: 66,
  },
]

const podcastHighlights = [
  { image: '/nearby/podcast/podcast.webp' },
  { image: '/prabhava/MK_Podcast.jpg', href: 'https://youtu.be/WvAJMU_mpsI?si=aps0dbLKdPnnQQAJ' },
  { image: '/prabhava/kiccha_MK.jpg', href: 'https://youtu.be/DcXNdYuRkA8?si=3QZ3sqNnomdYb7lZ' },
]

const trailerEdits = [
  {
    title: 'THE JUDGEMENT',
    type: 'Trailer Edit',
    video: 'https://youtu.be/ZD75Uq9qQkE?si=xz1nr68D1yEfAfaW',
    thumbnail: 'https://img.youtube.com/vi/ZD75Uq9qQkE/maxresdefault.jpg',
    focus: 'Hook + intrigue',
    description:
      'Built to open with tension, reveal just enough, and hold curiosity without giving the story away too early.',
  },
  {
    title: 'Aade Nam God',
    type: 'Trailer Edit',
    video: 'https://youtu.be/W66fEQlHJ4c?si=7TkdsA1b3Cysez8Z',
    thumbnail: 'https://img.youtube.com/vi/W66fEQlHJ4c/maxresdefault.jpg',
    focus: 'Pacing + emotional lift',
    description:
      'Structured around rhythm changes, character beats, and music lifts so the cut keeps building instead of flattening out.',
  },
  {
    title: 'America America',
    type: 'Trailer Edit',
    video: '/prabhava/AA_30%20Years%20Trailer%20cut%20V2.mp4',
    thumbnail: '/prabhava/America_America.webp',
    focus: 'Impact + recall',
    description:
      'Trimmed for stronger payoff moments, cleaner transitions, and sharper recall across launch-day promotions.',
  },
]

const lyricalVideoEdits = [
  {
    title: 'Animation Lyrical Videos',
    note: 'From concept to screen — we script, design, & animate using Adobe tools to craft visuals that captivate.',
    video: '/lyrical-video-edits/ant_video.mp4',
    previewStart: 30,
    previewDuration: 10,
  },
  {
    title: 'Conceptual Lyrical Videos',
    note: 'We script, shoot, & innovate across studios, landscapes, & green screens to redefine visual storytelling.',
    video: '/lyrical-video-edits/Nooraru Rangiro - Lyrical Video.mp4',
    previewStart: 40,
    previewDuration: 10,
  },
  {
    title: 'Text-Based Lyrical Videos',
    note: 'We blend text, graphics, visuals, & behind-the-scenes glimpses into a compelling narrative.',
    video: '/lyrical-video-edits/Mali Athu Beli Athu Lyrical video Title Track_ Kerebete.mp4',
    previewStart: 35,
    previewDuration: 10,
  },
]

const outdoorPromotionImages = [
  '/outdoor-gallery/promotions_2.jpg',
  '/outdoor-gallery/promotions.jpg',
  '/outdoor-gallery/promotions_6.jpg',
  '/outdoor-gallery/promotions_7.jpg',
]

const photographyGalleryImages = [
  { src: '/prabhava/photogallery/IMG_0298.webp', width: 1200, height: 888 },
  { src: '/prabhava/photogallery/IMG_0299.webp', width: 1200, height: 865 },
  { src: '/prabhava/photogallery/IMG_2671.webp', width: 900, height: 1200 },
  // { src: '/prabhava/photogallery/IMG_3506.webp', width: 900, height: 1200 },
  // { src: '/prabhava/photogallery/IMG_3545.webp', width: 900, height: 1200 },
  { src: '/prabhava/photogallery/IMG_4147.webp', width: 1200, height: 799 },
  { src: '/prabhava/photogallery/IMG_6153.webp', width: 1200, height: 900 },
  { src: '/prabhava/photogallery/SSD_0412.webp', width: 1200, height: 800 },
  { src: '/prabhava/photogallery/SSD_4137.webp', width: 1200, height: 799 },
  { src: '/prabhava/photogallery/SSD_4145.webp', width: 1200, height: 800 },
  { src: '/prabhava/photogallery/SSD_9547.webp', width: 1200, height: 799 },
  { src: '/prabhava/photogallery/WhatsApp_16.48.26.webp', width: 1200, height: 799 },
  { src: '/prabhava/photogallery/WhatsApp_17.01.02.webp', width: 1200, height: 799 },
  { src: '/prabhava/photogallery/b0d43329-0d72-4ee7-b6c9-8d551fd964a1.webp', width: 900, height: 1200 },
  { src: '/prabhava/photogallery/eb40056e-75af-45f2-b203-6a3d10359c91.webp', width: 900, height: 1200 },
]

const marketingCaseStudy = {
  eyebrow: 'Lyrical Video Case Study',
  title: 'Pentagon',
  description: 'A multi-phase promotional rollout designed to maximize early awareness and sustain engagement through release week. By mixing high-impact outdoor visuals with rapid-fire digital edits, we created an inescapable footprint for the film.',
  image: '/prabhava/pentagon_thumbnail.jpg',
  trailerUrl: '/lyrical-video-edits/PENTAGON - Theme Lyrical Video Song.mp4',
}

const promotionPackages = [
  {
    title: 'Digital Creative Package',
    eyebrow: 'Film Promotion Package',
    description: 'A structured digital rollout built to support the film from early announcements to release-phase momentum.',
    columns: [
      {
        heading: 'For Production House Management',
        items: [
          'Content calendar creation',
          'Countdown and follow-up poster design',
          'Reels and promo video editing',
          'Cast and crew introductions',
          'Film announcements and title reveals',
          'Theatrical release promotions',
          'Milestone celebrations',
          'Hashtag campaign management',
          'Influencer and artist collaborations',
          'OTT and TV release buzz',
        ],
      },
      {
        heading: 'Campaign Support',
        items: [
          'Festival and award submissions',
          'Comment and DM management',
          'Cast birthday and event wishes',
          'Regular documentation',
          'Monthly strategy updates',
          'Monthly timetable planning',
          'Social media reporting',
          'Audience growth support across social platforms',
        ],
      },
    ],
    bonus: 'Includes movie page creation and maintenance support.',
  },
  {
    title: 'Outside Publicity Package',
    eyebrow: 'Film Promotion Package',
    description: 'On-ground and culture-facing publicity ideas designed to extend the campaign beyond feeds and into public attention.',
    columns: [
      {
        heading: 'For Film Promotions',
        items: [
          'Behind-the-scenes content',
          'Character reveal posters',
          'Dialogue promo videos',
          'Theatre visits',
          'Fan meets',
          'City-wise promotional tours',
          'Auto design and publicity',
          'BMTC design and publicity',
          'Metro train design and publicity',
        ],
      },
      {
        heading: 'Publicity Amplifiers',
        items: [
          'Influencer collaborations',
          'Brand collaborations',
          'Radio and podcast interviews',
          'Meme and trend marketing',
          'BookMyShow and district handling',
          'Regional language promotions',
          'Film merchandise promotions',
          'Review and public reaction videos',
          'Festival and special-day campaigns',
          'Box office announcement creatives',
        ],
      },
    ],
    bonus: 'Can be paired with green-screen-led creative shoots for campaign extensions.',
  },
  {
    title: 'Performance Marketing',
    eyebrow: 'Growth Push',
    description: 'A campaign support stack focused on reach, remarketing, collaboration-led buzz, and sustained content resharing.',
    columns: [
      {
        heading: 'Meta Ads',
        items: [
          'Boost reels',
          'Boost posters',
          'Create forms',
          'Drive traffic to trailer, BMS, or district links',
        ],
      },
      {
        heading: 'Google Ads',
        items: [
          'Boost trailers, teasers, and songs',
          'Create forms',
          'Drive traffic to trailer, BMS, or district links',
        ],
      },
      {
        heading: 'Influencer Collaborations',
        items: [
          'Singers',
          'Dancers',
          'Celebrity influencers',
          'Social media influencers',
          'YouTubers',
          'Reviewers',
          'Podcast collaborations',
        ],
      },
      {
        heading: 'Re-sharing Pages',
        items: [
          'Reshare key campaign content',
          'Create viral meme marketing moments',
        ],
      },
    ],
    bonus: '',
  },
]

const promotionMakers = [
  {
    name: 'P V Phani Srivatsa',
    role: 'Marketing Head',
    image: '/about-section-img/management-phani.png',
    note: 'Leads brand strategy, promotions, campaigns, and audience engagement to maximize reach and impact.',
  },
  {
    name: 'Hemashree K',
    role: 'Celebrity PR & Media Coordinator',
    image: '/about-section-img/management-hemashree.jpg',
    note: 'Manages celebrity relations, media coverage, press coordination, and public appearances for promotions.',
  },
  {
    name: 'Goutham Srinag P V',
    role: 'Creative Coordinator',
    image: '/about-section-img/management-goutham.png',
    note: 'Oversees creative concepts, content direction, visual planning, and campaign execution across platforms.',
  },
  {
    name: 'Satish',
    role: 'Production Head',
    image: '/about-section-img/management-satish.png',
    note: 'Manages production planning, shoot coordination, resource allocation, and smooth execution of projects.',
  },
]

const faqs = [
  {
    question: "What is Prabhava?",
    answer: "Prabhava is the dedicated film production and digital promotion vertical of Sripada Studios, based in Bengaluru, Karnataka. We act as the complete marketing partner for regional cinema, handling everything from trailer cuts and conceptual campaigns to press relations, OTT distribution, and digital public relations (PR).",
  },
  {
    question: "What services does Prabhava offer for Kannada cinema?",
    answer: "We offer comprehensive, end-to-end film marketing services. This includes teaser and trailer edit packaging, animation and conceptual lyrical video creation, celebrity interview setups, digital PR campaigns, influencer collaborations, movie premiere events coverage, and social media amplification.",
  },
  {
    question: "Which movies have been promoted by Prabhava?",
    answer: "Prabhava has successfully led digital marketing and PR campaigns for notable Kannada projects like 'The Judgement' (starring Ravichandran) and the rustic thriller 'Kerebete', generating over 100+ creative digital assets, lyrical videos, and theatrical promotions.",
  },
  {
    question: "How does Sripada Studios handle movie PR and OTT integrations?",
    answer: "We coordinate launch schedules directly with local media outlets, manage influencer reviews, run targeted digital advertising campaigns, and design custom social media activations to build high-reach excitement for both theatrical releases and subsequent OTT streaming launches.",
  },
  {
    question: "How can filmmakers collaborate with Prabhava?",
    answer: "Filmmakers can connect with our team directly at Sripada Studios in Bengaluru or reach out via our contact phone line and office address shown below to plan custom campaigns that align with their film's release timeline and budget goals.",
  },
]

function GifVideo({ src, className, start = 8, end = 16 }: { src: string; className?: string; start?: number; end?: number }) {
  const ref = useRef<HTMLVideoElement>(null)

  return (
    <LocalVideo
      ref={ref}
      src={src}
      muted
      playsInline
      preload="auto"
      loadStrategy="visible"
      disableAutoPlay
      className={className}
      onLoadedMetadata={() => {
        const v = ref.current
        if (v) {
          v.currentTime = start
          v.play().catch(() => {})
        }
      }}
      onTimeUpdate={() => {
        const v = ref.current
        if (v && v.currentTime >= end) {
          v.currentTime = start
        }
      }}
    />
  )
}

function LyricalPreviewVideo({
  src,
  previewStart = 0,
  previewDuration = 6,
  className
}: {
  src: string
  previewStart?: number
  previewDuration?: number
  className?: string
}) {
  return (
    <GifVideo
      src={src}
      start={previewStart}
      end={previewStart + previewDuration}
      className={className}
    />
  )
}

function VideoEditCard({ asset, index, onClick }: { asset: typeof videoEditCards[number]; index: number; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Play ${asset.title}`}
      className="group relative w-[180px] shrink-0 overflow-hidden rounded-[20px] bg-[#173238] shadow-[0_16px_36px_rgba(23,50,56,0.14)] transition-transform duration-300 hover:scale-[1.02] sm:w-[210px] md:w-[228px] lg:w-[248px]"
      style={{ transform: `rotate(${index % 2 === 0 ? -1.5 : 1.5}deg)` }}
    >
      <div className="overflow-hidden rounded-[20px]">
        <div className="aspect-[9/16]">
          <GifVideo
            src={asset.video}
            className="h-full w-full rounded-[20px] bg-black object-contain"
          />
        </div>
      </div>
      <div className="absolute inset-0 rounded-[20px] bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
      <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[20px] bg-black/10 transition-colors duration-300 group-hover:bg-black/20">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm md:h-14 md:w-14">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true">
            <path d="M8 5.14v13.72c0 .74.8 1.2 1.44.82l10.2-6.86a.95.95 0 0 0 0-1.64L9.44 4.32A.95.95 0 0 0 8 5.14Z" />
          </svg>
        </div>
      </div>
      <div className="relative z-20 px-4 pb-4 pt-3 text-center">
        <p className="whitespace-pre-line text-sm font-semibold leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]">
          {asset.title}
        </p>
      </div>
    </button>
  )
}

export default function PrabhavaPage() {
  const [videoReady, setVideoReady] = useState(false)
  const [selectedVideoEdit, setSelectedVideoEdit] = useState<(typeof videoEditCards)[number] | null>(null)
  const [selectedLyricalVideo, setSelectedLyricalVideo] = useState<(typeof lyricalVideoEdits)[number] | null>(null)
  const [selectedEventVideo, setSelectedEventVideo] = useState<(typeof eventHighlightVideos)[number] | null>(null)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const showreelVideoRef = useRef<HTMLVideoElement | null>(null)

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <h1 className="sr-only">Prabhava — Kannada Film Production & Digital Promotion by Sripada Studios</h1>
      <Header />

      {/* Hero Intro Section */}
      <section className="relative flex flex-col items-center justify-center bg-[#f7f5ef] px-5 py-16 md:py-24 text-center mt-20 border-b border-[#173238]/10 overflow-hidden">
        {/* Subtle decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#8d6f2b]/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] rounded-full bg-[#2d7a86]/5 blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          {/* Centered Logo */}
          <div className="mb-6 transition-transform duration-500 hover:scale-105">
            <img
              src="/prabhava_logo.png"
              alt="Prabhava Logo"
              width={400}
              height={104}
              className="w-60 md:w-[400px] h-auto object-contain"
            />
          </div>

          {/* Subheading */}
          <p className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-[0.35em] text-[#8d6f2b]">
            A Film Promotion Company by Sripada Studios
          </p>

          {/* Elegant Divider */}
          <div className="my-8 flex items-center justify-center gap-3 w-40">
            <div className="h-px bg-[#173238]/15 flex-1" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#8d6f2b]" />
            <div className="h-px bg-[#173238]/15 flex-1" />
          </div>

          {/* Brand Tagline */}
          <div className="relative px-6 py-4 rounded-[20px] bg-white/40 border border-[#173238]/5 shadow-sm backdrop-blur-xs max-w-lg">
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#4b666c] mb-1">
              Brand Line
            </p>
            <p className="text-lg md:text-xl font-bold italic text-[#173238] tracking-wide leading-relaxed">
              &ldquo;Every Film Deserves Its Prabhava.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Showreel Section */}
      <section className="relative w-full bg-[#f7f5ef] px-4 md:px-8 py-8 md:py-16 flex justify-center items-center">
        <div className="relative w-full max-w-5xl aspect-video rounded-2xl md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(23,50,56,0.12)] border border-[#173238]/10 bg-black">
          <img
            src="/prabhava/rishab_shetty_poster.webp"
            alt="Prabhava showreel preview"
            fetchPriority="high"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoReady ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <LocalVideo
            ref={showreelVideoRef}
            src={showreelVideo}
            autoPlay
            muted
            playsInline
            preload="none"
            loadStrategy="idle"
            onCanPlay={() => setVideoReady(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f5ef] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20 border-b border-[#173238]/5">
        {/* Subtle decorative background blurs */}
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-[#8d6f2b]/5 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] rounded-full bg-[#173238]/5 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl">
          {/* Brand Philosophy / Header */}
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d6f2b] block mb-4">
              Brand Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#173238] tracking-tight leading-[1.1] md:leading-tight">
              &ldquo;A great film deserves more than visibility &mdash; it deserves influence.&rdquo;
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#39545a] max-w-3xl mx-auto">
              Prabhava believes that cinema becomes powerful when meaningful stories reach the right audience through authentic, strategic, and emotionally engaging promotion. Every campaign we create is designed to build anticipation, conversations, and a lasting legacy.
            </p>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 md:mb-24">
            {/* Vision Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#173238]/10 bg-white/75 p-8 md:p-10 shadow-[0_20px_50px_rgba(23,50,56,0.04)] hover:shadow-[0_30px_70px_rgba(23,50,56,0.08)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#8d6f2b]/5 rounded-bl-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8d6f2b] block mb-3">Our Vision</span>
              <h3 className="text-2xl font-bold text-[#173238] mb-4">To become India&apos;s most trusted and influential film promotion company</h3>
              <p className="text-sm md:text-base leading-relaxed text-[#39545a]">
                Empowering storytellers through innovative marketing, strategic communication, and audience-driven campaigns that create lasting cultural impact.
              </p>
            </div>

            {/* Mission Card */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#173238]/10 bg-white/75 p-8 md:p-10 shadow-[0_20px_50px_rgba(23,50,56,0.04)] hover:shadow-[0_30px_70px_rgba(23,50,56,0.08)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#173238]/5 rounded-bl-full" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#173238] block mb-3">Our Mission</span>
              <h3 className="text-2xl font-bold text-[#173238] mb-4">Transforming films into unforgettable experiences</h3>
              <p className="text-sm md:text-base leading-relaxed text-[#39545a] mb-4">
                At Prabhava, our mission is to deliver integrated promotion strategies across digital, media, public relations, influencer collaborations, events, and audience engagement.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-[#39545a]">
                We combine creativity, research, technology, and storytelling to maximize a film&apos;s visibility, strengthen its brand value, and connect every story with the audience it deserves.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-16 md:mb-24">
            <div className="text-center mb-10 md:mb-12">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d6f2b] block mb-3">
                Core Pillars
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-[#173238] tracking-tight">
                The Values We Live By
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: 'Story First', desc: 'Putting the narrative and essence of the film at the center of every campaign.' },
                { title: 'Strategic Creativity', desc: 'Blending out-of-the-box creative ideas with data-backed release strategies.' },
                { title: 'Authentic Relationships', desc: 'Building trust with filmmakers, media partners, and audiences alike.' },
                { title: 'Measurable Impact', desc: 'Ensuring that every campaign drives tangible engagement, recall, and ticket sales.' },
                { title: 'Innovation with Purpose', desc: 'Leveraging cutting-edge technology and modern platforms intentionally.' },
                { title: 'Integrity & Excellence', desc: 'Maintaining the highest standards of execution and professional reliability.' }
              ].map((val, idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-2xl border border-[#173238]/5 bg-white/60 p-6 md:p-8 shadow-xs hover:bg-white hover:border-[#173238]/10 hover:shadow-md transition-all duration-300">
                  <div className="text-xs font-bold text-[#8d6f2b]/30 mb-2">0{idx + 1}</div>
                  <h4 className="text-lg font-bold text-[#173238] mb-2 group-hover:text-[#8d6f2b] transition-colors">{val.title}</h4>
                  <p className="text-xs md:text-sm text-[#4b666c] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Promise Banner */}
          <div className="relative overflow-hidden rounded-[32px] bg-[#173238] p-8 md:p-14 text-center text-[#f7f5ef] shadow-xl border border-white/5">
            {/* Decorative abstract gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#8d6f2b]/15 blur-[60px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-white/5 blur-[60px] pointer-events-none" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#8d6f2b] block mb-4">
              Brand Promise
            </span>
            <p className="text-2xl md:text-4xl font-extrabold tracking-tight italic leading-tight max-w-3xl mx-auto z-10 relative">
              &ldquo;We don&apos;t just promote films. We create their Prabhava.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#f7f5ef_0%,#fffaf2_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
                Trusted By
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
                Our Filmy Clients
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Production houses, cinema platforms, and film-facing brands we have supported through promotional storytelling and release campaigns.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
            {filmyClients.map((client) => (
              <div
                key={client.name}
                className="group flex min-h-[110px] items-center justify-center rounded-[20px] border border-[#173238]/10 bg-white/80 p-3 shadow-[0_20px_55px_rgba(23,50,56,0.08)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 sm:min-h-[160px] sm:rounded-[26px] sm:p-5 md:min-h-[180px]"
              >
                <div className="relative h-16 w-full sm:h-24 md:h-28">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-full w-full object-contain transition duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#173238] px-0 py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-7xl px-5 text-center sm:px-8 md:mb-14 md:px-12 lg:px-20">
          <h2 className="text-4xl font-black tracking-tight text-[#f7f5ef] sm:text-5xl md:text-6xl">
            Poster Prabhava
          </h2>
        </div>

        <div className="group relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#173238] to-transparent md:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#173238] to-transparent md:w-28" />

          <div className="poster-marquee">
            {[0, 1].map((track) => (
              <div key={track} className="poster-marquee-track">
                {creativeImages.map((image, index) => (
                  <div
                    key={`${track}-${image}-${index}`}
                    className="w-[190px] shrink-0 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_20px_45px_rgba(0,0,0,0.22)] md:w-[250px]"
                  >
                    <div className="relative aspect-[3/4]">
                      <img
                        src={image}
                        alt={`Kannada movie poster campaign creative ${index + 1} by Sripada Studios`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f5ef_0%,#ece6d8_100%)] px-5 pb-6 pt-6 sm:px-8 md:px-12 md:pb-12 md:pt-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <div className="space-y-12 md:space-y-16">
            {caseStudies.map((study, index) => {
              const reversed = index % 2 === 1

              return (
                <div
                  key={study.title}
                  className="grid items-center gap-8 rounded-[28px] border border-[#173238]/10 bg-white/70 p-4 shadow-[0_25px_70px_rgba(23,50,56,0.08)] backdrop-blur-sm md:grid-cols-2 md:gap-12 md:p-8 lg:p-10"
                >
                  <div className={reversed ? 'md:order-2' : ''}>
                    <div className="overflow-hidden rounded-[22px] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
                      <div className="aspect-video">
                        <iframe
                          src={study.embedUrl}
                          title={study.title}
                          className="h-full w-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    </div>
                  </div>

                  <div className={reversed ? 'md:order-1' : ''}>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#8d6f2b]">
                      Case Study
                    </p>
                    <h2 className="text-3xl font-black leading-tight tracking-tight text-[#173238] md:text-4xl">
                      {study.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-[#39545a] md:text-lg">
                      {study.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf2] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-[92rem]">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-4xl font-black tracking-tight text-[#173238] sm:text-5xl md:text-6xl">
              Video Edits Prabhava
            </h2>
          </div>

          <div className="overflow-visible px-1 py-4 md:px-2">
            <div className="flex flex-wrap items-center justify-center gap-3 pb-3 md:flex-nowrap md:gap-4">
              {videoEditCards.map((asset, index) => (
                <VideoEditCard
                  key={asset.video}
                  asset={asset}
                  index={index}
                  onClick={() => setSelectedVideoEdit(asset)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedVideoEdit ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#071d23]/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedVideoEdit(null)}
        >
          <div
            className="relative w-full max-w-[32rem] overflow-hidden rounded-[28px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedVideoEdit(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#173238] shadow-lg"
              aria-label="Close video modal"
            >
              ×
            </button>
            <LocalVideo
              key={selectedVideoEdit.video}
              src={selectedVideoEdit.video}
              autoPlay
              loop
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              loadStrategy="eager"
              className="max-h-[85vh] w-full bg-black object-contain"
            />
          </div>
        </div>
      ) : null}

      <section className="overflow-hidden bg-[#10262b] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-3xl font-black tracking-tight text-[#fffaf2] sm:text-4xl md:text-5xl">
              Trailer Edits Prabhava
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-[15px]">
              We shape each cut around attention, rhythm, and payoff so the trailer does more than show scenes. <br /> It creates momentum.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {trailerEdits.map((edit, index) => (
              <div
                key={edit.title}
                className={`overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.18)] ${index === 1 ? 'lg:-translate-y-4' : ''} ${index === 2 ? 'lg:translate-y-4' : ''}`}
              >
                <a href={edit.video} className="block overflow-hidden rounded-[22px] relative group aspect-video md:aspect-[4/3] lg:aspect-video">
                  <img
                    src={edit.thumbnail}
                    alt={edit.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="h-6 w-6 translate-x-[1px] text-[#173238]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
                <div className="px-2 pb-2 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#54c4b6]">
                    {edit.type}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-white/45">
                    {edit.focus}
                  </p>
                  <h3 className="mt-2 text-xl font-black tracking-tight text-[#fffaf2] md:text-2xl">
                    {edit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/68">
                    {edit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Gallery Section */}
      <section className="overflow-hidden bg-[#fffaf2] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
              Photo Prabhava
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Capturing the raw energy, candid moments, and visual essence of the film from behind the scenes to promotional shoots.
            </p>
          </div>

          <div className="grid grid-cols-2 items-start gap-4 sm:columns-2 sm:block sm:gap-0 sm:space-y-4 lg:columns-4 sm:[column-gap:1rem] lg:[column-gap:1.25rem]">
            {photographyGalleryImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="group relative mb-4 self-start overflow-hidden rounded-[20px] border border-[#173238]/10 bg-[#173238]/5 break-inside-avoid shadow-[0_15px_35px_rgba(23,50,56,0.08)]"
              >
                <img
                  src={image.src}
                  alt={`Kannada movie promotion and launch event photography ${index + 1}`}
                  className="block h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading={index < 6 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/15" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Case Study Section */}
      <section className="overflow-hidden bg-[#fffaf2] px-5 pb-16 pt-0 sm:px-8 md:px-12 md:pb-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 rounded-[28px] border border-white/10 bg-[#173238] p-4 shadow-[0_30px_90px_rgba(23,50,56,0.15)] md:grid-cols-2 md:gap-12 md:p-8 lg:p-10">
            <div className="overflow-hidden rounded-[22px] bg-black shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
              <div className="aspect-video">
                <LocalVideo
                  src={marketingCaseStudy.trailerUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  loadStrategy="visible"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="max-w-[505px]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#54c4b6]">
                {marketingCaseStudy.eyebrow}
              </p>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-[#fffaf2] md:text-4xl">
                {marketingCaseStudy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/75 md:text-lg">
                {marketingCaseStudy.description}
              </p>

              <div className="mt-8">
                <a
                  href={marketingCaseStudy.trailerUrl}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#54c4b6] px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#173238] transition-colors duration-200 hover:bg-[#7ae2d0]"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf2_0%,#efe5cf_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
                Conversations
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
                Podcast
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Long-form conversations, intimate sit-downs, and personality-led moments crafted to extend the campaign beyond promos and into culture.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative overflow-hidden rounded-[28px] border border-[#173238]/10 bg-[#173238] p-3 shadow-[0_28px_80px_rgba(23,50,56,0.16)]">
              <div className="relative h-[360px] overflow-hidden rounded-[22px] md:h-[640px]">
                <div className="absolute left-5 top-5 z-10 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-white backdrop-blur-sm">
                  Featured Session
                </div>
                <img
                  src={podcastHighlights[0].image}
                  alt="Featured podcast interview setup"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-[#0c1f23]/85 via-[#173238]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#54c4b6]">
                    Studio Format
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-tight text-[#fffaf2] md:text-3xl">
                    Interview storytelling with a cinematic setup
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">
                    Framed for depth, built for clips, and designed to generate content that keeps the film conversation active across platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {podcastHighlights.slice(1, 3).map((item, index) => (
                <a
                  key={item.image}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-[24px] border border-[#173238]/10 bg-white/75 p-2.5 shadow-[0_22px_60px_rgba(23,50,56,0.1)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <img
                      src={item.image}
                      alt={`Podcast interview highlight ${index + 1}`}
                      className="aspect-[16/9] h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <a
            href="https://nearbystudio.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col gap-5 items-stretch md:flex-row md:items-center md:justify-between md:gap-6 overflow-hidden rounded-[24px] md:rounded-[28px] bg-[#173238] px-6 py-5 md:px-10 md:py-8 shadow-[0_24px_60px_rgba(23,50,56,0.18)] transition-transform duration-300 hover:-translate-y-0.5 md:mt-10"
          >
            <div className="flex items-center gap-4 md:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#54c4b6]/15 text-[#54c4b6] md:h-14 md:w-14">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 md:h-7 md:w-7">
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.28em] text-[#54c4b6]">
                  Nearby Studio
                </p>
                <h3 className="mt-1 text-base sm:text-lg md:text-xl font-black tracking-tight text-[#fffaf2]">
                  Shoot your next podcast at our in-house studio
                </h3>
              </div>
            </div>
            <div className="flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-bold text-[#fffaf2] transition-colors duration-200 group-hover:bg-white/20 self-start md:self-auto">
              Book Now
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 -rotate-45">
                <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#efe5cf_0%,#f7f5ef_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
                Live Moments
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
                Event Prabhava
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Vertical event cuts crafted for quick social circulation, audience excitement, and post-event recall.
            </p>
          </div>

          <div className="space-y-4 md:space-y-5">
            {eventHighlightVideos
              .filter((item) => item.title === '45 Event Highlights')
              .map((item) => (
                <button
                  key={item.video}
                  type="button"
                  aria-label={`Play ${item.title}`}
                  onClick={() => setSelectedEventVideo(item)}
                  className="mx-auto block w-full max-w-4xl overflow-hidden rounded-[22px] border border-[#173238]/10 bg-white/80 p-2 shadow-[0_18px_45px_rgba(23,50,56,0.08)] backdrop-blur-sm text-left"
                >
                  <div className="overflow-hidden rounded-[18px] bg-black">
                    <GifVideo src={item.video} className="aspect-[16/8] w-full object-cover" />
                  </div>
                  <div className="px-2 pb-2 pt-3">
                    <p className="text-sm font-semibold leading-snug text-[#173238]">{item.title}</p>
                  </div>
                </button>
              ))}

            <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:items-center md:gap-5">
              {eventHighlightVideos
                .filter((item) => item.orientation === 'vertical')
                .map((item) => (
                  <button
                    key={item.video}
                    type="button"
                    aria-label={`Play ${item.title}`}
                    onClick={() => setSelectedEventVideo(item)}
                    className="mx-auto block w-full max-w-[240px] overflow-hidden rounded-[22px] border border-[#173238]/10 bg-white/80 p-2 shadow-[0_18px_45px_rgba(23,50,56,0.08)] backdrop-blur-sm text-left sm:max-w-[260px]"
                  >
                    <div className="overflow-hidden rounded-[18px] bg-black">
                      <GifVideo src={item.video} className="aspect-[9/15] w-full object-cover" />
                    </div>
                    <div className="px-2 pb-2 pt-3">
                      <p className="text-sm font-semibold leading-snug text-[#173238]">{item.title}</p>
                    </div>
                  </button>
                ))}

              {eventHighlightVideos
                .filter((item) => item.title === 'Yash Event Highlights')
                .map((item) => (
                  <button
                    key={item.video}
                    type="button"
                    aria-label={`Play ${item.title}`}
                    onClick={() => setSelectedEventVideo(item)}
                    className="mx-auto block w-full max-w-3xl overflow-hidden rounded-[22px] border border-[#173238]/10 bg-white/80 p-2 shadow-[0_18px_45px_rgba(23,50,56,0.08)] backdrop-blur-sm text-left"
                  >
                    <div className="overflow-hidden rounded-[18px] bg-black">
                      <GifVideo src={item.video} start={item.previewStart} end={item.previewStart + 8} className="aspect-[16/8] w-full object-cover" />
                    </div>
                    <div className="px-2 pb-2 pt-3">
                      <p className="text-sm font-semibold leading-snug text-[#173238]">{item.title}</p>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {selectedEventVideo ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#071d23]/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedEventVideo(null)}
        >
          <div
            className="relative w-full overflow-hidden rounded-[28px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            style={{ maxWidth: selectedEventVideo.orientation === 'vertical' ? '22rem' : '56rem' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedEventVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#173238] shadow-lg"
              aria-label="Close video modal"
            >
              ×
            </button>
            <LocalVideo
              key={selectedEventVideo.video}
              src={selectedEventVideo.video}
              autoPlay
              loop
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              loadStrategy="eager"
              className="max-h-[85vh] w-full bg-black object-contain"
            />
          </div>
        </div>
      ) : null}

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf2_0%,#f2eadc_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
                Music-Led Cuts
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
                Lyrical video Prabhava
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Lyrical edits built around rhythm, mood, and repeatable visual moments so the song carries the narrative and the cut stays memorable.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.6fr_1.4fr]">
            <div className="rounded-[28px] border border-[#173238]/10 bg-white/70 p-5 shadow-[0_24px_70px_rgba(23,50,56,0.1)] backdrop-blur-sm md:p-6">
              <div className="mb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6f2b]">
                  Edit Language
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-[#173238] md:text-3xl">
                  How we shape lyrical cuts
                </h3>
              </div>

              <div className="space-y-4">
                {lyricalVideoEdits.map((edit, index) => (
                  <div
                    key={edit.title}
                    className="rounded-[22px] border border-[#173238]/10 bg-[#f7f5ef] p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#173238] text-sm font-black text-[#fffaf2]">
                        0{index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-black tracking-tight text-[#173238]">
                          {edit.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#4b666c]">
                          {edit.note}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <button
                type="button"
                aria-label={`Play ${lyricalVideoEdits[0].title}`}
                onClick={() => setSelectedLyricalVideo(lyricalVideoEdits[0])}
                className="overflow-hidden rounded-[28px] border border-[#173238]/10 bg-[#173238] p-[2px] text-left shadow-[0_24px_70px_rgba(23,50,56,0.14)] transition-transform duration-300 hover:scale-[1.01] md:col-span-2"
              >
                <div className="group relative overflow-hidden rounded-[26px]">
                  <LyricalPreviewVideo
                    src={lyricalVideoEdits[0].video}
                    previewStart={lyricalVideoEdits[0].previewStart}
                    previewDuration={lyricalVideoEdits[0].previewDuration}
                    className="h-[260px] w-full object-cover md:h-[340px]"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-[#173238] shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {lyricalVideoEdits.slice(1).map((edit, index) => (
                <button
                  key={edit.title}
                  type="button"
                  aria-label={`Play ${edit.title}`}
                  onClick={() => setSelectedLyricalVideo(edit)}
                  className="overflow-hidden rounded-[24px] border border-[#173238]/10 bg-white p-[2px] text-left shadow-[0_20px_55px_rgba(23,50,56,0.1)] transition-transform duration-300 hover:scale-[1.01]"
                >
                  <div className="group relative overflow-hidden rounded-[22px]">
                    <LyricalPreviewVideo
                      src={edit.video}
                      previewStart={edit.previewStart}
                      previewDuration={edit.previewDuration}
                      className="h-[220px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/25" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#173238] shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedLyricalVideo ? (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#071d23]/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedLyricalVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[28px] bg-black shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedLyricalVideo(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#173238] shadow-lg"
              aria-label="Close video modal"
            >
              ×
            </button>
            <LocalVideo
              key={selectedLyricalVideo.video}
              src={selectedLyricalVideo.video}
              autoPlay
              controls
              controlsList="nodownload"
              playsInline
              preload="none"
              loadStrategy="eager"
              className="max-h-[85vh] w-full bg-black object-contain"
            />
          </div>
        </div>
      ) : null}

      <section className="overflow-hidden bg-[linear-gradient(180deg,#173238_0%,#10262b_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#54c4b6]">
                Outdoor Push
              </p>
              <h2 className="text-3xl font-black tracking-tight text-[#fffaf2] sm:text-4xl md:text-5xl">
                Outdoor Promotion Prabhava
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-[15px]">
              Beyond digital, we extend the campaign into public visibility with posters, display moments, and on-ground promotional presence built to keep the film top of mind.
            </p>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)] md:p-5">
            <div className="mb-5 flex items-center justify-between gap-4 px-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
                Posters • Standees • Theatre Visibility
              </p>
              <div className="hidden h-px flex-1 bg-white/10 md:block" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {outdoorPromotionImages.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0d2024] p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                >
                  <div className="overflow-hidden rounded-[18px]">
                    <img loading="lazy" decoding="async"
                      src={image}
                      alt={`Outdoor promotion visual ${index + 1}`}
                      className="h-[280px] w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105 md:h-[320px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[linear-gradient(180deg,#fffaf2_0%,#efe5cf_100%)] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
              Promotion Scope
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
              Film promotion packages
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              A broad look at the campaign services we shape across digital rollout, outside publicity, and performance-led amplification.
            </p>
          </div>

          <div className="space-y-6">
            {promotionPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="overflow-hidden rounded-[30px] border border-[#173238]/10 bg-white/70 shadow-[0_22px_60px_rgba(23,50,56,0.08)] backdrop-blur-sm"
              >
                <div className="border-b border-[#173238]/10 px-5 py-5 md:px-8 md:py-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8d6f2b]">
                    {pkg.eyebrow}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-[#173238] md:text-3xl">
                    {pkg.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#4b666c] md:text-[15px]">
                    {pkg.description}
                  </p>
                </div>

                <div className="grid gap-0 lg:grid-cols-2">
                  {pkg.columns.map((column) => (
                    <div
                      key={column.heading}
                      className="border-t border-[#173238]/10 px-5 py-5 lg:border-l lg:first:border-l-0 lg:border-t-0 md:px-8 md:py-7"
                    >
                      <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-[#2d7a86]">
                        {column.heading}
                      </h4>
                      <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-[#173238] md:text-[15px]">
                        {column.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#2d7a86]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {pkg.bonus !== undefined ? (
                  <div className="flex flex-col gap-3 border-t border-[#173238]/10 bg-[#173238] px-5 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8">
                    <p className="text-sm font-semibold leading-relaxed text-[#fffaf2] md:text-[15px]">
                      {pkg.bonus}
                    </p>
                    <a
                      href="tel:+918660341949"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-[#fffaf2] backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                    >
                      <span>Enquire</span>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 -rotate-45" aria-hidden="true">
                        <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/60">+91 8660341949</span>
                    </a>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#fffaf2] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
              Key People
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
              The Movie Marketers
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              The core people behind the planning, creative direction, content rollout, and digital push that keep these movie campaigns moving.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {promotionMakers.map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-[28px] border border-[#173238]/10 bg-white shadow-[0_22px_60px_rgba(23,50,56,0.1)]"
              >
                <div className="overflow-hidden bg-[linear-gradient(180deg,#ece6d8_0%,#ddd2bb_100%)] p-4">
                  <div className="relative overflow-hidden rounded-[22px] h-[320px]">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="px-5 pb-6 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8d6f2b]">
                    {person.role}
                  </p>
                  <h3 className="mt-2 text-2xl font-black tracking-tight text-[#173238]">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4b666c]">
                    {person.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section (AEO, GEO, SEO Optimization) */}
      <section className="overflow-hidden bg-[#f7f5ef] px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20 border-t border-[#173238]/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-[#8d6f2b]">
              FAQ
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#173238] sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#39545a] md:text-[15px]">
              Find answers to common questions about Prabhava's film production, cinema marketing services, and Sripada Studios campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index
              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[22px] border border-[#173238]/10 bg-white shadow-[0_12px_36px_rgba(23,50,56,0.04)] transition-all duration-300"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-[#173238]/[0.02]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-[#173238] sm:text-lg">
                      {faq.question}
                    </span>
                    <span className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173238]/5 text-[#173238] transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#8d6f2b]/10 text-[#8d6f2b]' : ''}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="h-4 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                    }`}
                  >
                    <p className="border-t border-[#173238]/5 px-6 py-5 text-sm leading-relaxed text-[#4b666c] sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes posterMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .poster-marquee {
          display: flex;
          width: max-content;
          animation: posterMarquee 28s linear infinite;
          will-change: transform;
        }

        .poster-marquee-track {
          display: flex;
          flex-shrink: 0;
          gap: 1.25rem;
          min-width: max-content;
          padding-right: 1.25rem;
        }

        @media (min-width: 768px) {
          .poster-marquee-track {
            gap: 1.75rem;
            padding-right: 1.75rem;
          }
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  )
}
