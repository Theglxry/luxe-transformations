import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedCountup({
  maxNumber = 100,
  duration = 10,
  className = undefined,
}: {
  maxNumber: number;
  duration: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, maxNumber, { duration });

    return animation.stop;
  }, []);

  return <motion.span className={className}>{rounded}</motion.span>;
}
