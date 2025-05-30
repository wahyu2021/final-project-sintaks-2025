// "use client"; // Direktif ini tidak relevan untuk proyek React + Vite standar. Hapus jika tidak menggunakan Next.js.

import React from "react";
import { Link, useLocation } from "react-router-dom"; // Impor useLocation
import { ChevronDown } from "lucide-react";

export default function Navbar() {
    const location = useLocation(); // Dapatkan objek location
    const currentPath = location.pathname; // Dapatkan pathname saat ini

    const navLinks = [
        { label: "Beranda", path: "/" },
        {
            label: "Profil",
            // Tambahkan path dasar untuk grup profil jika diperlukan, atau biarkan submenu saja
            // path: "/about", // Misalnya, jika "Profil" sendiri adalah link ke /about
            submenu: [
                { label: "Tentang Kami", path: "/about" },
                { label: "Makna Logo", path: "/about/logo-desc" }
            ]
        },
        { label: "Produk", path: "/products" },
        { label: "Kontak", path: "/contact" },
    ];

    // Fungsi untuk mengecek apakah link adalah link aktif (atau bagian dari submenu aktif)
    const isActive = (path) => {
        if (!path) return false;
        // Cocokkan path persis atau jika path saat ini dimulai dengan path link (untuk submenu)
        return currentPath === path || (currentPath.startsWith(path) && path !== "/");
    };
    
    // Fungsi untuk mengecek apakah ada submenu item yang aktif
    const isSubmenuActive = (submenu) => {
        if (!submenu) return false;
        return submenu.some(subItem => isActive(subItem.path));
    };


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
                                        <details open={isSubmenuActive(item.submenu)}> {/* Buka details jika submenu aktif */}
                                            <summary className={`font-semibold flex justify-between ${isSubmenuActive(item.submenu) ? 'text-orange-600 bg-amber-100' : 'text-amber-700 hover:bg-amber-100 hover:text-amber-800'}`}>
                                                {item.label}
                                            </summary>
                                            <ul className="p-2 bg-amber-100 rounded-b-box">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link
                                                            to={subItem.path}
                                                            className={`font-medium hover:bg-amber-200 hover:text-amber-800 ${isActive(subItem.path) ? 'text-orange-600 bg-amber-200 font-bold' : 'text-amber-700'}`}
                                                        >
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </details>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className={`font-semibold hover:bg-amber-100 hover:text-amber-800 ${isActive(item.path) ? 'text-orange-600 bg-amber-100 font-bold' : 'text-amber-700'}`}
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
                        to="/"
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
                                    <div tabIndex={0} role="button" 
                                         className={`font-semibold flex items-center py-2 px-3 rounded-md ${isSubmenuActive(item.submenu) ? 'text-orange-600 bg-amber-100' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}>
                                        {item.label}
                                        <ChevronDown size={16} className={`ml-1 opacity-70 transition-transform duration-200 ${isSubmenuActive(item.submenu) ? 'rotate-180' : ''}`} />
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content z-[100] menu p-2 bg-amber-50 border border-amber-200 rounded-box shadow-lg w-52"
                                    >
                                        {item.submenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link
                                                    to={subItem.path}
                                                    className={`font-medium hover:bg-amber-100 hover:text-amber-800 ${isActive(subItem.path) ? 'text-orange-600 bg-amber-100 font-bold' : 'text-amber-700'}`}
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
                                        to={item.path}
                                        className={`font-semibold py-2 px-3 rounded-md ${isActive(item.path) ? 'text-orange-600 bg-amber-100 font-bold' : 'text-gray-700 hover:text-amber-600 hover:bg-amber-100'}`}
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
                    {/* ... Tombol CTA tetap sama ... */}
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
                        to="/contact"
                        className={`btn btn-sm md:btn-md border-none text-white shadow-md rounded-lg ${isActive('/contact') ? 'bg-gradient-to-r from-orange-600 to-amber-600 ring-2 ring-orange-400' : 'bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600'}`}
                    >
                        Hubungi Kami
                    </Link>
                </div>
            </div>
            {/* Spacer */}
            <div className="h-16 md:h-[68px]" />
        </>
    );
}