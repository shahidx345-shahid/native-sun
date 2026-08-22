"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const routeBackgrounds: Record<string, string> = {
  "/": "url('/images/HOME_MAIN_BG.png')",
  "/portfolio": "url('/images/PORTFOLIO_MAIN_BG.png')",
  "/services": "url('/images/HOME_MAIN_BG.png')", // Fallback for services
  "/about": "url('/images/ABOUT_main_bg.png')",
  "/contact": "url('/images/CONTACT_MAIN_BG.png')",
};

export default function BackgroundSetter() {
  const pathname = usePathname();

  useEffect(() => {
    let bgImage = routeBackgrounds[pathname];
    
    if (bgImage) {
      document.body.style.backgroundImage = bgImage;
      document.body.style.backgroundRepeat = "repeat-x";
      document.body.style.backgroundColor = "#F8F9FA";
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.backgroundColor = "#F8F9FA";
    }
  }, [pathname]);

  return null;
}
