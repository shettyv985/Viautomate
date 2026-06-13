"use client";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.075, duration: 1.8 }}>
      {children}
    </ReactLenis>
  );
}
