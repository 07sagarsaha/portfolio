'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Progress } from "./progress";
import pic from "./pic.jpg";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500); // Add small delay before hiding
          return 100;
        }
        return Math.min(prev + Math.random() * 10, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="glass-effect w-[90%] max-w-md p-8 rounded-xl space-y-6">
        <div className="relative w-full h-full mx-auto rounded-full overflow-hidden glass-effect">
          <img
            src={pic.src}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
            Sagar Saha
          </h2>
          <p className="text-muted-foreground">Software Developer</p>
        </motion.div>

        <div className="space-y-2">
          <Progress value={progress} className="h-1" />
          <p className="text-sm text-center text-muted-foreground">
            Loading experience... {Math.round(progress)}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}