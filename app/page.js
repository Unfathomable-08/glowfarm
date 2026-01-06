"use client";

import { useState, useEffect } from "react";
import Hero from "./(components)/Hero";
import About from "./(components)/About";
import Shop from "./(components)/Shop";
import Header from "@/components/Header";

export default function Home() {
  const [isIntro, setIsIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsIntro(false);
    }, 3000); // Global intro duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header isIntro={isIntro} />
      <main>
        <Hero isIntro={isIntro} />
        <About />
        <Shop isIntro={isIntro} />
      </main>
    </>
  );
}
