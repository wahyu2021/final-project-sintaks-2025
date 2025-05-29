"use client";

import React, { useState, useEffect, useRef } from "react";
// Impor ikon dari lucide-react untuk detail makna warna
import { Gem, ShieldCheck, Feather, Palette } from "lucide-react";

export default function LogoDescSection() {
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
            {
                threshold: 0.15, // Trigger saat 15% section terlihat
            }
        );

        observer.observe(currentElement);

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [sectionRef]);

    const getAnimationDelayStyle = (delayInSeconds = 0) => {
        return {
            animationDelay: `${delayInSeconds}s`,
        };
    };

    // Path gambar logo dari folder public
    const logoImagePath = "/logo.png"; // <-- Pastikan path ini benar

    return (
        <section
            ref={sectionRef}
            className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Judul Seksi */}
                <header
                    className={`text-center mb-12 md:mb-16 when-visible ${
                        isVisible ? "is-visible" : ""
                    }`}
                    style={
                        isVisible ? getAnimationDelayStyle(0) : { opacity: 0 }
                    }
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 tracking-tight">
                        Makna di Balik Logo Sumatra Sutra
                    </h2>
                    <p className="mt-4 text-lg text-amber-700/90 max-w-2xl mx-auto">
                        Setiap elemen dalam logo kami dirancang dengan cermat
                        untuk merefleksikan nilai dan esensi dari Sumatra Sutra.
                    </p>
                    <div className="flex justify-center mt-6">
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Kolom Gambar Logo */}
                    <div
                        className={`flex justify-center when-visible ${
                            isVisible ? "is-visible" : ""
                        }`}
                        style={
                            isVisible
                                ? getAnimationDelayStyle(0.2)
                                : { opacity: 0 }
                        }
                    >
                        <img
                            src={logoImagePath} // Path sudah menggunakan variabel yang benar
                            alt="Logo Sumatra Sutra"
                            className="w-48 h-48 md:w-96 md:h-96 object-contain"
                        />
                    </div>

                    {/* Kolom Penjelasan Makna */}
                    <div
                        className={`space-y-6 when-visible ${
                            isVisible ? "is-visible" : ""
                        }`}
                        style={
                            isVisible
                                ? getAnimationDelayStyle(0.4)
                                : { opacity: 0 }
                        }
                    >
                        <div>
                            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                                Filosofi Umum
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Logo Sumatra Sutra dirancang untuk menangkap
                                esensi kemewahan, keaslian, dan kekayaan warisan
                                budaya kain sutra tradisional Sumatera Selatan,
                                khususnya Songket Palembang. Kami memadukan
                                keanggunan tradisi dengan sentuhan modern yang
                                abadi.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold text-amber-700 mb-4 flex items-center">
                                <Palette className="w-7 h-7 mr-3 text-orange-500" />{" "}
                                Palet Warna Pilihan
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <Gem className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" />
                                    <div>
                                        <strong className="font-semibold text-amber-800">
                                            Emas:
                                        </strong>{" "}
                                        Melambangkan kemewahan, kualitas
                                        premium, kejayaan, dan tradisi
                                        penggunaan benang emas pada Songket.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <ShieldCheck className="w-5 h-5 mr-3 mt-1 text-red-700 flex-shrink-0" />
                                    <div>
                                        <strong className="font-semibold text-amber-800">
                                            Merah Marun Tua:
                                        </strong>{" "}
                                        Mewakili keanggunan, keberanian, status
                                        kehormatan, dan kekayaan budaya
                                        Palembang yang mendalam.
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <Feather className="w-5 h-5 mr-3 mt-1 text-amber-400 flex-shrink-0" />
                                    <div>
                                        <strong className="font-semibold text-amber-800">
                                            Krem / Putih Gading:
                                        </strong>{" "}
                                        Mencerminkan kemurnian, kelembutan sutra
                                        asli, serta memberikan kesan elegan,
                                        bersih, dan sebagai penyeimbang.
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-amber-700 mb-3">
                                Elemen Desain
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Bentuk dan garis pada logo kami terinspirasi
                                dari kehalusan aliran kain sutra dan kekayaan
                                motif Songket. Setiap lengkungan dan detail
                                dirancang untuk menyampaikan keindahan abadi dan
                                keterampilan tangan para penenun.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
