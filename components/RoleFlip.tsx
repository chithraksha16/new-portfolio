"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Roles that will flip/rotate in the hero text
const ROLES = [
  "Full Stack Developer",
  "Freelancer",
  "Frontend Developer",
  "Backend Developer",
  "UI Designer",
];

export default function RoleFlip({
  roles = ROLES,
  interval = 2200, // time each word stays visible (ms)
  className = "",
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, interval);
    return () => clearInterval(timer);
  }, [roles.length, interval]);

  return (
    <span
      className={`relative inline-block overflow-hidden align-top ${className}`}
      style={{ perspective: 1000 }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ rotateX: 90, opacity: 0, y: 10 }}
          animate={{ rotateX: 0, opacity: 1, y: 0 }}
          exit={{ rotateX: -90, opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
          style={{ transformOrigin: "50% 50%" }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}