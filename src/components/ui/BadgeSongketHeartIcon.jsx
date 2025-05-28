// src/components/ui/BadgeSongketHeartIcon.jsx (atau nama file Anda)
import React, { useRef, useState, useEffect } from "react";
import Lottie from "lottie-react";
import { motion as Motion, AnimatePresence } from "framer-motion"; // 1. Impor dari framer-motion
import { FaHeart } from "react-icons/fa"; // 2. Impor ikon hati dari react-icons

// Hapus atau komentari import confetti jika tidak digunakan lagi
// import confetti from 'canvas-confetti';

// Fungsi untuk menghasilkan nilai acak dalam rentang
const random = (min, max) => Math.random() * (max - min) + min;

export default function BadgeAnimasiKhusus({
    badgeText = "Kain Songket Istimewa",
}) {
    const lottieRef = useRef(null);
    const [animationData, setAnimationData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // State untuk mengelola partikel hati yang dianimasikan
    const [flyingHearts, setFlyingHearts] = useState([]);
    let heartIdCounter = 0; // Untuk key unik

    useEffect(() => {
        const animationPath = "/animations/heart2.json";
        fetch(animationPath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Gagal memuat animasi Lottie: ${response.status} ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setAnimationData(data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching Lottie animation:", err);
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    // Fungsi untuk memicu efek hati bertebangan menggunakan react-icons
    const triggerFlyingReactIconsHearts = () => {
        const newHearts = [];
        const numberOfHearts = 15; // Jumlah hati yang ingin ditampilkan

        for (let i = 0; i < numberOfHearts; i++) {
            heartIdCounter++;
            newHearts.push({
                id: heartIdCounter,
                x: random(-150, 150), // Penyebaran horizontal acak
                y: random(-200, -50),  // Muncul dari atas dan bergerak ke bawah/menyebar
                scale: random(0.5, 1.2),
                opacity: 1,
                rotate: random(-45, 45),
                duration: random(1.5, 3) // Durasi animasi acak
            });
        }
        setFlyingHearts(currentHearts => [...currentHearts, ...newHearts]);
    };


    const handleLottieIconClick = () => {
        if (lottieRef.current && animationData) {
            lottieRef.current.stop();
            lottieRef.current.play();
        }
        // Panggil fungsi untuk efek hati react-icons
        triggerFlyingReactIconsHearts();
    };

    if (isLoading) {
        // ... (kode loading state)
        return (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 text-gray-600 text-sm font-medium mb-6 shadow-sm">
                <span className="mr-2 animate-spin">⏳</span>
                {badgeText} (Memuat...)
            </div>
        );
    }

    if (error || !animationData) {
        // ... (kode error state)
        return (
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-100 to-red-200 border border-red-300 text-red-700 text-sm font-medium mb-6 shadow-sm">
                <span className="mr-2">⚠️</span>
                {badgeText} (Animasi gagal: {error || "Data tidak ada"})
            </div>
        );
    }

    return (
        <div className="relative inline-flex items-center px-5 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 text-base font-semibold mb-6 shadow-sm">
            {/* Kontainer untuk partikel hati yang bertebangan */}
            {/* Pastikan kontainer ini memiliki posisi yang memungkinkan partikel diposisikan absolut relatif terhadapnya atau viewport */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10 }}>
                <AnimatePresence>
                    {flyingHearts.map((heart) => (
                        <Motion.div
                            key={heart.id}
                            initial={{
                                x: 0, // Posisi awal relatif dari tengah tombol/badge
                                y: 0,
                                scale: 0,
                                opacity: 0,
                                rotate: 0,
                            }}
                            animate={{
                                x: heart.x,
                                y: heart.y,
                                scale: heart.scale,
                                opacity: [1, 0.8, 0], // Fade out
                                rotate: heart.rotate,
                            }}
                            exit={{ opacity: 0, scale: 0, y: heart.y + 50 }}
                            transition={{ duration: heart.duration, ease: "easeOut" }}
                            style={{ position: 'absolute', color: '#E91E63' }} // Atur warna hati
                            onAnimationComplete={() => {
                                // Hapus hati dari state setelah animasi selesai
                                setFlyingHearts(prevHearts => prevHearts.filter(h => h.id !== heart.id));
                            }}
                        >
                            <FaHeart size={20 * heart.scale} /> {/* Gunakan ikon FaHeart */}
                        </Motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <button
                type="button"
                onClick={handleLottieIconClick}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                aria-label="Mainkan animasi dan tampilkan hati bertebangan"
                disabled={!animationData}
                style={{ zIndex: 1 }} // Pastikan tombol di atas background tapi di bawah partikel jika perlu
            >
                <Lottie
                    lottieRef={lottieRef}
                    animationData={animationData}
                    loop={false}
                    autoplay={false}
                    style={{ width: "100%", height: "100%" }}
                />
            </button>
            <span className="whitespace-nowrap" style={{ zIndex: 1 }}>{badgeText}</span>
        </div>
    );
}