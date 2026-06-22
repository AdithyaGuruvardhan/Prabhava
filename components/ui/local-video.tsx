"use client"

import {
  forwardRef,
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
    loadStrategy,
    rootMargin,
    disableAutoPlay,
    preload = "metadata",
    children,
    ...props
  },
  forwardedRef
) {
  const resolvedWebmSrc = webmSrc ?? localVideoWebmSources[src]

  return (
    <video ref={forwardedRef} preload={preload} {...props}>
      {resolvedWebmSrc ? <source src={resolvedWebmSrc} type="video/webm" /> : null}
      <source src={src} type={getMimeType(src)} />
      {children}
    </video>
  )
})

