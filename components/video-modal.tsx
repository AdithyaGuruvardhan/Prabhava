"use client"
import React, { useEffect } from 'react';
import { LocalVideo } from '@/components/ui/local-video';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    // Convert youtube watch urls to embed urls
    const getEmbedUrl = (url: string) => {
        if (!url) return '';
        if (url.includes('youtu.be/')) {
            const id = url.split('youtu.be/')[1].split('?')[0];
            return `https://www.youtube.com/embed/${id}?autoplay=1`;
        }
        if (url.includes('youtube.com/watch')) {
            const urlParams = new URL(url).searchParams;
            const id = urlParams.get('v');
            return `https://www.youtube.com/embed/${id}?autoplay=1`;
        }
        if (url.includes('instagram.com/')) {
            const baseUrl = url.split('?')[0];
            return baseUrl.endsWith('/') ? `${baseUrl}embed` : `${baseUrl}/embed`;
        }
        return url; // fallback for direct mp4 or other links
    };

    const embedUrl = getEmbedUrl(videoUrl);
    const isLocalVideo = embedUrl.endsWith('.mp4') || embedUrl.endsWith('.webm');
    const isInstagram = embedUrl.includes('instagram.com');

    return (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6">
            {/* Blurred background */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className={`relative w-full z-10 bg-black/90 rounded-2xl md:rounded-[32px] overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-white/10 ${isInstagram ? 'max-w-[450px] h-[85vh] max-h-[850px]' : 'max-w-5xl aspect-video'}`}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-black/80 backdrop-blur-lg rounded-full flex items-center justify-center text-white transition-all hover:scale-110 border border-white/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>

                {/* Video Player */}
                {isLocalVideo ? (
                    <LocalVideo
                        src={embedUrl}
                        className="w-full h-full object-contain"
                        controls
                        controlsList="nodownload"
                        autoPlay
                        playsInline
                        preload="none"
                        loadStrategy="eager"
                    />
                ) : (
                    <iframe
                        src={embedUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
}
