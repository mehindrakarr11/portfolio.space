/** Shared GSAP tuning for a smoother, more premium feel. */
export const EASE = {
  out: "power4.out",
  outSoft: "power3.out",
  inOut: "power2.inOut",
  inOutStrong: "power3.inOut",
  expo: "expo.out",
  smooth: "sine.out",
  nav: "back.out(1.2)",
} as const;

export const SCROLL = {
  /** Standard section entrance */
  reveal: {
    start: "top 82%",
    toggleActions: "play none none reverse",
    fastScrollEnd: true,
  },
  /** Earlier trigger for dense stacks */
  revealTight: {
    start: "top 88%",
    toggleActions: "play none none reverse",
    fastScrollEnd: true,
  },
  /** Smoother scrub for scroll-linked motion */
  scrubSmooth: 0.85,
} as const;
