"use client";

import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaHeart,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

interface ContactItemProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  href?: string;
}

interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
  type: "facebook" | "instagram" | "youtube" | "twitter";
  ariaLabel: string;
  bypassVideoModal?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  text,
  href,
}) => {
  const content = (
    <>
      <div className="text-teal-600 shrink-0 transition-all duration-300 group-hover:text-teal-800">
        {icon}
      </div>
      <span className="text-[15px] text-gray-700 leading-relaxed transition-colors duration-300 group-hover:text-teal-800">
        {text}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="flex items-start gap-3 group hover:translate-x-1 transition-all duration-300"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-3">{content}</div>;
};

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  href,
  type,
  ariaLabel,
  bypassVideoModal = false,
}) => {
  const base =
    "text-teal-700 text-3xl transition-all duration-300 hover:scale-110";

  const hoverStyles: Record<string, string> = {
    facebook: "hover:text-blue-600",
    youtube: "hover:text-red-600",
    twitter: "hover:text-black",
    instagram: "hover:text-[#E1306C]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-bypass-video-modal={bypassVideoModal ? "true" : undefined}
      className={`${base} ${hoverStyles[type]}`}
    >
      {icon}
    </a>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f3f4f4] pt-16 pb-8 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">

          {/* Contact */}
          <div>
            <h3 className="text-teal-700 text-lg font-bold tracking-[2px] uppercase mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <ContactItem
                icon={<FaPhone size={18} />}
                text="+91 86603 41949"
                href="tel:+918660341949"
              />
              <ContactItem
                icon={<FaEnvelope size={18} />}
                text="contact@sripadastudios.com"
                href="mailto:contact@sripadastudios.com"
              />
              <ContactItem
                icon={<FaMapMarkerAlt size={18} />}
                text={
                  <>
                    No.4/2, 1st Main Road, West of Chord Road,
                    Rajajinagar Industrial Town, Bengaluru - 560010
                  </>
                }
              />
            </div>
          </div>

          {/* Logos */}
          <div>
            <h3 className="text-teal-700 text-lg font-bold tracking-[2px] uppercase mb-8">
              Our Verticals
            </h3>
            <div className="flex flex-wrap items-center gap-6 lg:gap-10">
              <a href="https://www.sripadastudios.com/buzziwah" className="group">
                <div
                  className="relative h-24 w-[240px] overflow-hidden rounded-[16px] border border-transparent bg-white/70 p-2 shadow-[0_12px_30px_rgba(33,105,116,0.08)] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#216974]/20 group-hover:shadow-[0_22px_45px_rgba(33,105,116,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#216974]/0 via-[#54c4b6]/0 to-[#216974]/0 transition-all duration-300 group-hover:from-[#216974]/8 group-hover:via-[#54c4b6]/8 group-hover:to-[#216974]/12" />
                  <img
                    src="/vertical-logos/BW_logo.webp"
                    alt="Buzziwah logo"
                    className="h-full w-full rounded-[10px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </a>
              <a href="https://www.sripadastudios.com/nearby" className="group">
                <div
                  className="relative h-24 w-[200px] overflow-hidden rounded-[16px] border border-transparent bg-white/70 p-2 shadow-[0_12px_30px_rgba(33,105,116,0.08)] transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#216974]/20 group-hover:shadow-[0_22px_45px_rgba(33,105,116,0.2)]"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#216974]/0 via-[#54c4b6]/0 to-[#216974]/0 transition-all duration-300 group-hover:from-[#216974]/8 group-hover:via-[#54c4b6]/8 group-hover:to-[#216974]/12" />
                  <img
                    src="/vertical-logos/NBS_logo.webp"
                    alt="Nearby Studio logo"
                    className="h-full w-full rounded-[10px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-700 pt-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Logo */}
            <img
              src="/prabhava_logo.png"
              alt="Sripada Studios"
              width={200}
              height={48}
              className="h-12 w-auto"
              draggable={false}
            />

            {/* Social */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              <h4 className="text-teal-700 font-bold tracking-[2px] uppercase">
                Follow Us
              </h4>

              <div className="flex gap-8">
                <SocialIcon
                  icon={<FaInstagram />}
                  href="https://www.instagram.com/sripadastudios/"
                  type="instagram"
                  ariaLabel="Instagram"
                />
                <SocialIcon
                  icon={<FaYoutube />}
                  href="https://www.youtube.com/@SRIPADASTUDIOS"
                  type="youtube"
                  ariaLabel="YouTube"
                  bypassVideoModal
                />
                <SocialIcon
                  icon={<FaFacebookF />}
                  href="https://www.facebook.com/sripadastudiosofficial"
                  type="facebook"
                  ariaLabel="Facebook"
                />
                <SocialIcon
                  icon={<FaXTwitter />}
                  href="https://twitter.com/SripadaStudios"
                  type="twitter"
                  ariaLabel="X"
                />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-10 flex flex-col items-center gap-1 text-center text-sm text-gray-600 sm:flex-row sm:justify-center sm:gap-0">
            <span>Copyright © 2026 Prabhava</span>
            <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
            <span className="sm:inline">Developed with Passion by&nbsp;</span>
            <a href="https://www.sripadastudios.com/buzziwah" className="inline-flex items-center gap-2 text-teal-700 transition-colors hover:text-teal-800">
              <FaHeart className="text-purple-600" aria-hidden="true" />
              <span>Buzziwah</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
