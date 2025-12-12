"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export function ConfettiSideCannons() {
  useEffect(() => {
    const end = Date.now() + 3 * 1000; // 3 seconds
    const colors = ["#00B812", "#ffffff", "#16a34a", "#FFD700", "#F59E0B"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.85 },
        colors: colors,
        startVelocity: 80,
        gravity: 0.8,
        scalar: 1.2,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.85 },
        colors: colors,
        startVelocity: 80,
        gravity: 0.8,
        scalar: 1.2,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null;
}
