"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useRef,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

type TransitionContextValue = {
  navigate: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextValue | null>(null);

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("usePageTransition must be used within TransitionProvider");
  }
  return ctx;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const transitioning = useRef(false);

  const navigate = useCallback(
    (href: string) => {
      if (href === pathname || transitioning.current) return;

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(href);
        return;
      }

      transitioning.current = true;
      gsap.set(overlay, {
        scaleY: 0,
        transformOrigin: "bottom center",
        pointerEvents: "auto",
      });

      gsap.to(overlay, {
        scaleY: 1,
        duration: 0.55,
        ease: "power4.inOut",
        onComplete: () => router.push(href),
      });
    },
    [pathname, router]
  );

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay || !transitioning.current) return;

    gsap.set(overlay, { scaleY: 1, transformOrigin: "top center" });
    gsap.to(overlay, {
      scaleY: 0,
      duration: 0.55,
      ease: "power4.inOut",
      onComplete: () => {
        transitioning.current = false;
        gsap.set(overlay, { pointerEvents: "none" });
      },
    });
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <div
        ref={overlayRef}
        aria-hidden
        className="fixed inset-0 z-[100] origin-bottom scale-y-0 bg-primary pointer-events-none"
      />
      {children}
    </TransitionContext.Provider>
  );
}

export function TransitionContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const firstLoad = useRef(true);

  useLayoutEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const animateIn = (delay = 0) => {
      gsap.fromTo(
        content,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay,
          ease: "power3.out",
          // Avoid leaving a transform that traps `position: fixed` descendants
          clearProps: "transform",
        }
      );
    };

    if (firstLoad.current) {
      firstLoad.current = false;
      animateIn();
      return;
    }

    animateIn(0.12);
  }, [pathname]);

  return <div ref={contentRef}>{children}</div>;
}
