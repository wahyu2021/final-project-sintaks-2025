"use client";

import React, { useEffect } from "react"; // Import React

import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import { HeroSection } from "./HeroSection";
import { ProductListSection } from "./ProductListSection";

export default function ProductPage() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true, // Default: animasi hanya sekali. Bisa di-override per elemen dengan data-aos-once="false"
            offset: 50,
            easing: "ease-in-out",
        });
    }, []);

    return (
        <>
            <HeroSection />
            <ProductListSection />
        </>
    );
}
