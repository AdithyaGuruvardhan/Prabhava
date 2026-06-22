"use client"

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react"
import { localVideoWebmSources } from "@/lib/generated-video-manifest"

type LoadStrategy = "eager" | "idle" | "visible"

interface LocalVideoProps extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "src"> {
  src: string
  webmSrc?: string
  loadStrategy?: LoadStrategy
  rootMargin?: string
  disableAutoPlay?: boolean
}

function getMimeType(src: string) {
  if (src.endsWith(".webm")) return "video/webm"
  if (src.endsWith(".mp4")) return "video/mp4"
  return undefined
}

export const LocalVideo = forwardRef<HTMLVideoElement, LocalVideoProps>(function LocalVideo(
  {
    src,
    webmSrc,
    loadStrategy = "visible",
    preload = "none",
    rootMargin = "250px 0px",
    disableAutoPlay = false,
    children,
    ...props
  },
  forwardedRef
) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(loadStrategy === "eager")
  const resolvedWebmSrc = webmSrc ?? localVideoWebmSources[src]

  useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement, [])

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.load()
    }
  }, [shouldLoad])

  useEffect(() => {
    if (loadStrategy !== "idle" || shouldLoad) return

    const startLoading = () => setShouldLoad(true)

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(startLoading, { timeout: 1500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(startLoading, 1200)
    return () => globalThis.clearTimeout(timeoutId)
  }, [loadStrategy, shouldLoad])

  useEffect(() => {
    if (loadStrategy !== "visible" || shouldLoad || !videoRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin }
    )

    observer.observe(videoRef.current)

    return () => observer.disconnect()
  }, [loadStrategy, rootMargin, shouldLoad])

  // Pause video when scrolled out of view
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || disableAutoPlay) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry) return
        if (entry.isIntersecting) {
          void video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { rootMargin: '0px' }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldLoad, disableAutoPlay])

  return (
    <video ref={videoRef} preload={shouldLoad ? preload : "none"} {...props}>
      {resolvedWebmSrc ? <source src={resolvedWebmSrc} type="video/webm" /> : null}
      <source src={src} type={getMimeType(src)} />
      {children}
    </video>
  )
})
