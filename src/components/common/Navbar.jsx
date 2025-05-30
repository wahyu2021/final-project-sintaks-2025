"use client"; // Tetap diperlukan jika Anda menggunakan struktur Next.js App Router untuk file ini, atau jika komponen ini memang dimaksudkan sebagai Client Component. Jika ini murni proyek React dengan react-router-dom tanpa Next.js, direktif ini tidak relevan.

import React from "react"; // useState mungkin tidak lagi diperlukan jika mengandalkan DaisyUI sepenuhnya
import { Link } from "react-router-dom"; // Menggunakan Link dari react-router-dom
import { ChevronDown } from "lucide-react"; // Opsional: ikon panah bawah

export default function Navbar() {
    const navLinks = [
        { label: "Beranda", path: "/" },
        {
            label: "Profil",
            submenu: [
                { label: "Tentang Kami", path: "/about" },
                { label: "Makna Logo", path: "/about/logo-desc" }
            ]
        },
        { label: "Produk", path: "/products" },
        { label: "Kontak", path: "/contact" },
    ];

    return (
        <>
            <div className="navbar fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 backdrop-blur-lg bg-opacity-80 shadow-md">
                <div className="navbar-start">
                    {/* Mobile Dropdown (Hamburger Menu) */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden text-amber-700 hover:bg-amber-100"
                            aria-label="Buka navigasi"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {/* Menu Dropdown Mobile */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 bg-amber-50 border border-amber-200 rounded-box w-56 shadow-xl"
                        >
                            {navLinks.map((item, index) => (
                                <li key={index}>
                                    {item.submenu ? (
                                        <details>
                                            <summary className="font-semibold text-amber-700 hover:bg-amber-100 hover:text-amber-800 flex justify-between">
                                                {item.label}
                                            </summary>
                                            <ul className="p-2 bg-amber-100 rounded-b-box">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.path} // Menggunakan 'to' untuk react-router-dom
                                                            className="font-medium text-amber-700 hover:bg-amber-200 hover:text-amber-800"
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        <Link
                                            to={item.path} // Menggunakan 'to' untuk react-router-dom
                                            className="font-semibold text-amber-700 hover:bg-amber-100 hover:text-amber-800"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        to="/" // Menggunakan 'to' untuk react-router-dom
                        className="flex items-center gap-2 text-xl md:text-2xl font-bold text-amber-700 hover:text-orange-600 transition-colors duration-200 ml-2 md:ml-4"
                    >
                        <img src="/logo-2.png" alt="Sumatra Sutra Logo" className="h-8 md:h-9" />
                        <span className="tracking-wide">Sumatra Sutra</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-base">
                        {navLinks.map((item, index) => (
                            item.submenu ? (
                                <li key={index} className="dropdown dropdown-hover">
                                    <div tabIndex={0} role="button" className="font-semibold text-gray-700 hover:text-amber-600 flex items-center py-2 px-3">
                                        {item.label}
                                        <ChevronDown size={16} className="ml-1 opacity-70" />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[100] menu p-2 bg-amber-50 border border-amber-200 rounded-box shadow-lg w-52"
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    to={subItem.path} // Menggunakan 'to' untuk react-router-dom
                                                    className="font-medium text-amber-700 hover:bg-amber-100 hover:text-amber-800"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ) : (
                                <li key={index}>
                                    <Link
                                        to={item.path} // Menggunakan 'to' untuk react-router-dom
                                        className="font-semibold text-gray-700 hover:text-amber-600 py-2 px-3"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        ))}
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="navbar-end flex gap-2 md:gap-3 mr-2 md:mr-4">
                    <a
                        href="https://wa.me/6287765176764"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Hubungi Kayla via WhatsApp"
                        className="btn btn-sm md:btn-md btn-outline border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition rounded-lg"
                    >
                        Pesan Sekarang
                    </a>
                    <Link
                        to="/contact" // Menggunakan 'to' untuk react-router-dom
                        className="btn btn-sm md:btn-md bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 border-none text-white shadow-md rounded-lg"
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
            {/* Spacer agar konten tidak tertutup navbar jika navbar fixed */}
            <div className="h-16 md:h-[68px]" />
        </>
    );
}