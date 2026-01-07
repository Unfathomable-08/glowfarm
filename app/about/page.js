"use client";

import { useState, useEffect } from "react";
import AboutClient from "./components/AboutClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    const [isIntro, setIsIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header isIntro={isIntro} />
            <main className="min-h-screen bg-black">
                <AboutClient isIntro={isIntro} />
            </main>
            <Footer />
        </>
    );
}
