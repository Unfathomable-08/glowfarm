"use client";

import { useState, useEffect } from "react";
import ShopClient from "./components/ShopClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ShopPage() {
    const [isIntro, setIsIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 3000); // Global intro duration matches home page
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header isIntro={isIntro} />
            <main className="min-h-screen bg-black">
                <ShopClient isIntro={isIntro} />
            </main>
            <Footer />
        </>
    );
}
