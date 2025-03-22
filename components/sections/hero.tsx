"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [sphereSize, setSphereSize] = useState(1);

  useEffect(() => {
    const updateSphereSize = () => {
      const screenWidth = window.innerWidth;
      const size = (screenWidth * 0.2) / 100; // 20% of screen width converted to appropriate scale
      setSphereSize(size);
    };

    updateSphereSize();
    window.addEventListener('resize', updateSphereSize);

    return () => window.removeEventListener('resize', updateSphereSize);
  }, []);

  return (
    <div className="relative h-screen flex items-center">
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Sphere args={[sphereSize, 32, 32]}>
          <meshStandardMaterial
            color="#10b981"
            wireframe
            transparent
            opacity={0.2}
          />
        </Sphere>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="hero-heading mb-6">Hi, I'm Sagar Saha</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            A passionate software developer and fourth-year student, crafting
            elegant solutions through code.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-10 px-4 py-2 bg-primary text-primary-foreground shadow hover:bg-primary/90"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring h-10 px-4 py-2 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
