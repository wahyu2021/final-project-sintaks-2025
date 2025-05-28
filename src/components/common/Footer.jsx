"use client";

import React from "react";
// import { Link } from "react-router-dom"; // Pastikan Anda menggunakan react-router-dom jika Link ini relevan
import { HashLink as Link } from "react-router-hash-link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
    const companyInfoLinks = [
        { label: "Tentang Kami", path: "/about" }, // Ganti dengan path sebenarnya
        { label: "Sejarah Sutera Palembang", path: "" }, // Ganti dengan path sebenarnya
        { label: "Cara Perawatan", path: "" }, // Ganti dengan path sebenarnya
        { label: "Testimoni", path: "/#testimoni" }, // <-- LINK KE SEKSI TESTIMONI
        { label: "FAQ", path: "" }, // Ganti dengan path sebenarnya
    ];

    return (
        <footer className="bg-amber-600 border-t border-amber-700 flex justify-center">
            {" "}
            {/* Border sedikit lebih gelap untuk subtle separation */}
            <div className="container py-12 text-amber-50">
                {" "}
                {/* Warna teks default untuk footer jadi terang */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center">
                                <img src="/logo-2.png" alt="" className="w-16"/>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Sumatra Sutra
                                </h3>
                            </div>
                            {/* Judul lebih terang */}
                            <p className="text-sm text-amber-100 leading-relaxed">
                                {" "}
                                {/* Deskripsi lebih terang */}
                                Melestarikan warisan kain sutera tradisional
                                Sumatera Selatan dengan kualitas terbaik dan
                                motif autentik yang telah turun temurun.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            {" "}
                            {/* Memberi sedikit lebih banyak spasi antar ikon sosial media */}
                            <Link
                                to="#"
                                className="text-amber-100 hover:text-white transition-colors"
                            >
                                <FaFacebookF className="h-5 w-5" />
                            </Link>
                            <Link 
                                to="https://www.instagram.com/sumaterasutra?igsh=YmZ1dG11c2JiczV2" 
                                className="text-amber-100 hover:text-white transition-colors"
                            >
                                <FaInstagram className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="text-amber-100 hover:text-white transition-colors"
                            >
                                <FaTwitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Products & Services */}
                    <div className="md:ml-8 lg:ml-16 xl:ml-28">
                        {" "}
                        {/* Penyesuaian margin untuk layout yang lebih baik */}
                        <h6 className="font-semibold text-white mb-4">
                            Produk & Layanan
                        </h6>{" "}
                        {/* Judul kolom lebih terang */}
                        <nav className="space-y-2">
                            {[
                                "Kain Sutera Songket",
                                "Kain Sutera Polos",
                                "Kain Sutera Jumputan",
                                "Custom Design",
                                "Grosir & Eceran",
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    to="#"
                                    className="block text-sm text-amber-100 hover:text-white transition-colors" /* Link lebih terang */
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Company Info */}
                    <div className="md:ml-8 lg:ml-12 xl:ml-24">
                        {" "}
                        {/* Penyesuaian margin */}
                        <h6 className="font-semibold text-white mb-4">
                            Informasi
                        </h6>{" "}
                        {/* Judul kolom lebih terang */}
                        <nav className="space-y-2">
                            {companyInfoLinks.map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.path ? item.path : "#"}
                                    smooth
                                    className="block text-sm text-amber-100 hover:text-white transition-colors" /* Link lebih terang */
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3">
                        {/* Menghapus mb-6 agar konsisten */}
                        <h6 className="font-semibold text-white mb-4 md:hidden lg:block">
                            Kontak Kami
                        </h6>{" "}
                        {/* Judul kontak, opsional tampilkan di beberapa ukuran layar */}
                        <div className="flex items-start space-x-3">
                            {/* Spasi ikon dan teks lebih konsisten */}
                            <FiMapPin className="h-5 w-5 text-amber-100 mt-0.5 flex-shrink-0" />{" "}
                            {/* Ikon kontak terang */}
                            <span className="text-sm text-amber-100">
                                {/* Teks kontak terang */}
                                Jl. Merdeka No. 123, Palembang, Sumatera Selatan
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FiPhone className="h-5 w-5 text-amber-100 flex-shrink-0" />
                            <span className="text-sm text-amber-100">
                                +62 812-3456-7890
                            </span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <FiMail className="h-5 w-5 text-amber-100 flex-shrink-0" />
                            <span className="text-sm text-amber-100">
                                info@sumaterasutra.com
                            </span>
                        </div>
                    </div>
                </div>
                {/* Bottom Section */}
                <div className="border-t border-amber-700 mt-8 pt-6">
                    {/* Border sedikit lebih gelap */}
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-amber-100">
                            {/* Teks copyright terang */}©{" "}
                            {new Date().getFullYear()} Sumatra Sutra. Semua hak
                            cipta dilindungi.
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-white italic">
                                {/* Tagline lebih terang */}
                                "Melestarikan Budaya Sutera Nusantara dengan
                                Bangga"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
