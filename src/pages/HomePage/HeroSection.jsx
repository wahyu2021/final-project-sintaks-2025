"use client";

import { ArrowRight, Heart, Shield, Star, Truck } from "lucide-react";
import { useState, useEffect } from "react";
import BadgeSongketHeartIcon from "../../components/ui/BadgeSongketHeartIcon";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
    // State untuk animasi
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // Effect untuk animasi saat komponen dimount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-amber-50 to-orange-50 pt-16 md:pt-2 pb-16">
            {/* Traditional Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\\\"60\\\" height=\\\"60\\\" viewBox=\\\"0 0 60 60\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"%3E%3Cg fill=\\\"none\\\" fill-rule=\\\"evenodd\\\"%3E%3Cg fill=\\\"%23D97706\\\" fill-opacity=\\\"0.3\\\"%3E%3Cpath d=\\\"M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z\\\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")]'></div>
            </div>

            {/* Decorative Elements dengan CSS Animation */}
            <div
                className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-20 blur-xl"
                style={{ animation: "pulse 4s infinite ease-in-out" }}
            ></div>
            <div
                className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-300 to-amber-500 rounded-full opacity-20 blur-xl"
                style={{ animation: "pulse 6s infinite ease-in-out" }}
            ></div>
            <div
                className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full opacity-15 blur-lg"
                style={{ animation: "pulse 5s infinite ease-in-out" }}
            ></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content dengan Fade In Animation */}
                    <div
                        className="text-center lg:text-left"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateY(0)"
                                : "translateY(20px)",
                            transition:
                                "opacity 0.8s ease-out, transform 0.8s ease-out",
                        }}
                    >
                        <BadgeSongketHeartIcon />

                        {/* Main Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight flex flex-col mb-6 gap-1">
                            <span className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                                Sumatera Sutra
                            </span>
                            <br />
                            <span className="text-gray-800 text-3xl sm:text-4xl lg:text-5xl">
                                Warisan Budaya Nusantara
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                            Temukan keindahan kain songket tradisional Sumatera
                            yang ditenun dengan
                            <span className="text-amber-700 font-semibold">
                                {" "}
                                benang emas
                            </span>{" "}
                            dan
                            <span className="text-gray-700 font-semibold">
                                {" "}
                                keahlian turun temurun
                            </span>
                            . Setiap helai menceritakan kisah budaya yang tak
                            ternilai.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
                            <div className="flex items-center text-gray-700">
                                <Shield className="w-5 h-5 mr-2 text-green-600" />
                                <span className="font-medium">100% Asli</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Star className="w-5 h-5 mr-2 text-yellow-500" />
                                <span className="font-medium">
                                    Kualitas Premium
                                </span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Heart className="w-5 h-5 mr-2 text-red-500" />
                                <span className="font-medium">Handmade</span>
                            </div>
                            <div className="flex items-center text-gray-700">
                                <Truck className="w-5 h-5 mr-2 text-blue-600" />
                                <span className="font-medium">
                                    Kirim Seluruh Indonesia
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons dengan Hover Animation */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button
                                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-0 px-8 py-4 text-lg font-semibold shadow-xl shadow-amber-500/25 rounded-lg flex items-center justify-center"
                                style={{ transition: "all 0.3s ease" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform = "scale(1.05)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform = "scale(1)")
                                }
                                onClick={() => navigate("/products")}
                            >
                                Lihat Koleksi Songket
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </button>

                            <button
                                className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 px-8 py-4 text-lg font-semibold rounded-lg bg-transparent"
                                style={{ transition: "all 0.3s ease" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform = "scale(1.05)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform = "scale(1)")
                                }
                                onClick={() => navigate("/contact")}
                            >
                                Hubungi Kami
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="pt-6 border-t border-amber-200">
                            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center">
                                    <div className="flex -space-x-1 mr-2">
                                        <div className="w-6 h-6 bg-amber-400 rounded-full border-2 border-white"></div>
                                        <div className="w-6 h-6 bg-orange-400 rounded-full border-2 border-white"></div>
                                        <div className="w-6 h-6 bg-red-400 rounded-full border-2 border-white"></div>
                                    </div>
                                    <span>500+ Pelanggan Puas</span>
                                </div>
                                <div className="flex items-center">
                                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                                    <span>4.9/5 Rating</span>
                                </div>
                                <div>
                                    <span>
                                        Pengrajin Berpengalaman 20+ Tahun
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image dengan Animation */}
                    <div
                        className="relative"
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible
                                ? "translateX(0)"
                                : "translateX(50px)",
                            transition:
                                "opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s",
                        }}
                    >
                        <div className="relative z-10">
                            {/* Main Hero Image */}
                            <div
                                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20"
                                style={{ transition: "transform 0.5s ease" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.transform =
                                        "rotate(3deg)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.transform =
                                        "rotate(0deg)")
                                }
                            >
                                <img
                                    src="/images/hero/hero-home.jpg"
                                    alt="Kain Songket Sumatera Premium"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-orange-500/10"></div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                                    <h3 className="font-bold text-gray-800 mb-1">
                                        Songket Palembang Premium
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Motif Tradisional dengan Benang Emas
                                    </p>
                                    <div className="flex items-center mt-2">
                                        <span className="text-lg font-bold text-amber-600">
                                            Rp 2.500.000
                                        </span>
                                        <span className="text-sm text-gray-500 line-through ml-2">
                                            Rp 3.000.000
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements dengan React Animation */}
                            {/* <div 
                className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-amber-200 shadow-lg"
                style={{ animation: 'float 3s infinite ease-in-out' }}
              >
                <div className="flex items-center text-amber-700">
                  <div 
                    className="w-3 h-3 bg-green-400 rounded-full mr-2"
                    style={{ animation: 'pulse 2s infinite ease-in-out' }}
                  ></div>
                  <span className="text-sm font-medium">Stok Tersedia</span>
                </div>
              </div> */}

                            <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-amber-200 shadow-lg">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-amber-600">
                                        20+
                                    </div>
                                    <div className="text-xs text-gray-600">
                                        Motif Tersedia
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute top-1/2 -right-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-xl p-3 shadow-lg"
                                style={{
                                    animation: "pulse 2s infinite ease-in-out",
                                }}
                            >
                                <Star className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-3xl opacity-20 scale-110"></div>
                    </div>
                </div>
            </div>

            {/* Decorative Border */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400"></div> */}
        </section>
    );
}
