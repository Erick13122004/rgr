"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  suffix = "",
  duration = 1.8,
}: {
  value: number | string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView && typeof value === "number") {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest).toLocaleString("pt-BR"));
    });
    return unsubscribe;
  }, [springValue]);

  if (typeof value === "string") {
    return (
      <span ref={ref}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
