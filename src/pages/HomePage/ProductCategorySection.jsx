"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaMale, FaFemale, FaShoppingBag } from "react-icons/fa";

// Tidak perlu impor CSS AOS atau kelas animasi CSS kustom jika semua dikontrol via inline style
// CSS untuk @keyframes fadeIn, .when-visible, .is-visible tidak lagi digunakan untuk seksi ini

export default function ProductCategorySection() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentElement = sectionRef.current;
        if (!currentElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(currentElement);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [sectionRef]); // Dependensi sudah benar

    const categories = [
        {
            name: "Pria",
            icon: (
                <FaMale className="w-16 h-16 mb-4 text-white group-hover:text-amber-300 transition-colors duration-300" />
            ),
            description: "Temukan koleksi pakaian dan aksesoris pria terbaru.",
            link: "#kategori-pria",
            urlImage: "/images/model-pria-songket.jpeg",
        },
        {
            name: "Wanita",
            icon: (
                <FaFemale className="w-16 h-16 mb-4 text-white group-hover:text-amber-300 transition-colors duration-300" />
            ),
            description: "Jelajahi berbagai pilihan busana dan aksesoris wanita.",
            link: "#kategori-wanita",
            urlImage: "/images/model-wanita-songket.jpeg",
        },
        {
            name: "Aksesori",
            icon: (
                <FaShoppingBag className="w-16 h-16 mb-4 text-white group-hover:text-amber-300 transition-colors duration-300" />
            ),
            description: "Lengkapi penampilan Anda dengan beragam aksesoris.",
            link: "#kategori-aksesori",
            urlImage: "/images/model-pria-songket.jpeg",
        },
    ];

    // Fungsi untuk menghasilkan style animasi fade-up
    const getFadeUpAnimationStyle = (isVisibleState, delayInSeconds = 0) => {
        return {
            opacity: isVisibleState ? 1 : 0,
            transform: isVisibleState ? "translateY(0)" : "translateY(30px)", // Muncul dari bawah 30px
            transition: `opacity 0.8s ease-out ${delayInSeconds}s, transform 0.8s ease-out ${delayInSeconds}s`,
        };
    };

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-16 bg-amber-600 overflow-hidden"
        >
            {/* Garis pemisah/dekorasi atas */}
            {/* <div className="w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mb-14"></div> */}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Judul Seksi */}
                <div
                    className="text-center mb-12 md:mb-16"
                    style={getFadeUpAnimationStyle(isVisible, 0)} // Animasi untuk judul, delay 0s
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
                        Kategori Produk Kami
                    </h2>
                    <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                        Pilih kategori yang sesuai dengan kebutuhan fashion Anda.
                    </p>
                </div>

                {/* Grid Kategori */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`card shadow-xl hover:shadow-2xl 
                                       group transform hover:-translate-y-2 
                                       transition-all duration-300 ease-out
                                       bg-cover bg-center relative text-white rounded-lg overflow-hidden`}
                            style={{
                                ...getFadeUpAnimationStyle(isVisible, 0.2 + index * 0.2), // Animasi fade-up dengan stagger
                                backgroundImage: `url(${category.urlImage})`,
                                minHeight: "380px",
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300 z-0"></div>

                            {/* Konten Kartu */}
                            <div className="relative z-10 flex flex-col h-full p-4 md:p-6 items-center justify-center text-center">
                                <figure className="pt-4 pb-2">
                                    {category.icon}
                                </figure>
                                <div className="card-body p-2 flex flex-col flex-grow items-center">
                                    <h3 className="card-title text-2xl font-semibold mb-2 text-white group-hover:text-amber-200 transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-200 mb-4 text-sm flex-grow font-semibold">
                                        {category.description}
                                    </p>
                                    <div className="card-actions w-full justify-center mt-auto">
                                        <a
                                            href={category.link}
                                            className="btn btn-sm md:btn-md bg-amber-500 hover:bg-amber-600 border-amber-500 hover:border-amber-600 text-white transition-colors duration-300"
                                        >
                                            Lihat Produk
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}