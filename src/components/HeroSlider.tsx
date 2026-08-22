"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    href: "/portfolio",
    src: "/images/HOME_SLIDE-SHOW_PCB-BIZ-CARDS_10.png",
  },
  {
    href: "/portfolio",
    src: "/images/HOME_SLIDE-SHOW_PCB_DIGITAL_10.png",
  },
  {
    href: "/portfolio",
    src: "/images/HOME_SLIDE-SHOW_GOLDEN_APPLE_10.png",
  },
  {
    href: "/portfolio",
    src: "/images/HOME_SLIDE-SHOW_THOMPSON_10.png",
  },
  {
    href: "/portfolio",
    src: "/images/HOME_SLIDE-SHOW_NEW_BREED_10.png",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5000ms pauseTime like nivoSlider

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative" style={{ width: 979, height: 435 }}>
      {/* nivo-slider theme ribbon if needed. 
          Assuming no ribbon img since it wasn't specified in image list, 
          but if it is, we can add it here. */}
      {slides.map((slide, index) => (
        <Link
          key={index}
          href={slide.href}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={`Slide ${index + 1}`}
            width={979}
            height={435}
            priority={index === 0} // preload first slide
          />
        </Link>
      ))}
    </div>
  );
}
