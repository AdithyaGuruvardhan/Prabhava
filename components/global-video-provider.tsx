"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// VideoModal is only shown after a user clicks a video link — never on first paint.
// Defer it so its JS doesn't block initial hydration.
const VideoModal = dynamic(() => import("./video-modal"), { ssr: false })

export default function GlobalVideoProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [videoUrl, setVideoUrl] = useState("");

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const anchor = (e.target as HTMLElement).closest("a");
            if (!anchor) return;

            if (anchor.hasAttribute("data-bypass-video-modal")) return;

            const href = anchor.getAttribute("href");
            if (!href) return;

            const isYouTube = href.includes("youtube.com") || href.includes("youtu.be");
            const isLocalVideo = href.endsWith(".mp4") || href.endsWith(".webm");
            const isInstagram = href.includes("instagram.com/reel/") || href.includes("instagram.com/p/");

            if (isYouTube || isLocalVideo || isInstagram) {
                e.preventDefault();
                setVideoUrl(href);
                setIsOpen(true);
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    return (
        <>
            {children}
            {/* Modal only mounts after the first interaction that triggers it */}
            {isOpen && (
                <VideoModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    videoUrl={videoUrl}
                />
            )}
        </>
    );
}
