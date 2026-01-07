"use client";

import { useState, useEffect } from "react";
import ContactClient from "./components/ContactClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
                <ContactClient isIntro={isIntro} />
            </main>
            <Footer />
        </>
    );
}
