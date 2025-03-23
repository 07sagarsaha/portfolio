"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const [sphereSize, setSphereSize] = useState(1);

  useEffect(() => {
    const updateSphereSize = () => {
      const screenWidth = window.innerWidth;
      const size = Math.min((screenWidth * 0.2) / 100, 2.5); // Max size of 2.5 units
      setSphereSize(size);
    };

    updateSphereSize();
    window.addEventListener('resize', updateSphereSize);

    return () => window.removeEventListener('resize', updateSphereSize);
  }, []);

  return (
    <div className="relative h-[30vh] sm:h-screen flex items-center">
      <Canvas className="absolute inset-0 hidden sm:block" camera={{ position: [0, 0, 8] }}>
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
            <Button variant="glass" asChild className="bg-primary text-primary-foreground">
              <a href="#contact">
                Get in Touch
              </a>
            </Button>
            <Button variant="glass" asChild>
              <a href="#projects">
                View Projects
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
