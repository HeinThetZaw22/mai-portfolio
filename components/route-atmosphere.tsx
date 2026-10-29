"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const FORM_BG =
  "radial-gradient(ellipse 80% 50% at 10% 20%, rgba(110,7,243,0.14), transparent 55%), radial-gradient(ellipse 60% 45% at 90% 80%, rgba(110,7,243,0.1), transparent 50%), linear-gradient(180deg, #faf8ff 0%, #f7f4ff 40%, #f3f0ff 100%)";

const formRoutes = ["/contact", "/project-planner", "/startup-inquiry"];

/** Paints form-page atmospheres on `body` so nav/content blend. */
export default function RouteAtmosphere() {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.body;

    if (formRoutes.includes(pathname)) {
      body.style.background = FORM_BG;
      body.dataset.atmosphere = "form";
    } else {
      body.style.background = "";
      delete body.dataset.atmosphere;
    }

    return () => {
      body.style.background = "";
      delete body.dataset.atmosphere;
    };
  }, [pathname]);

  return null;
}
