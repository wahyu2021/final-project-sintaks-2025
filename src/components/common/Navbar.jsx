import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            <div className="navbar fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 backdrop-blur-lg shadow-md">
                <div className="navbar-start">
                    {/* Mobile Dropdown */}
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
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
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-gradient-to-r from-amber-100 to-orange-50 border-b border-amber-200 rounded-box w-52 shadow-xl"
                        >
                            <li>
                                <Link to="/" className="font-semibold">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="font-semibold">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="font-semibold">
                                    Product
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="font-semibold">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors duration-200 md:ml-8"
                    >
                        <img src="/logo-2.png" alt="" className="h-8" />
                        <span className="tracking-wide">Sumatera Sutra</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-md">
                        <li>
                            <Link
                                to="/"
                                className="font-semibold hover:text-amber-500"
                            >
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <details className="font-semibold ">
                                <summary className="hover:text-amber-500">Profil</summary>
                                <ul className="px-2 w-36">
                                    <li>
                                        <Link
                                            to="/about"
                                            className="font-semibold hover:text-amber-500"
                                        >
                                            Tentang Kami
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about/logo-desc"
                                            className="font-semibold hover:text-amber-500"
                                        >
                                            Makna Logo
                                        </Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <Link
                                to="/products"
                                className="font-semibold hover:text-amber-500"
                            >
                                Produk
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="font-semibold hover:text-amber-500"
                            >
                                Kontak
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="navbar-end hidden md:flex gap-3 mr-8">
                    <Link
                        to="/contact"
                        className="btn btn-outline border-gray-300 text-sm hover:bg-transparent hover:border-amber-500 hover:text-amber-600 transition rounded-lg"
                    >
                        Pesan Sekarang
                    </Link>
                    <Link
                        to="/contact"
                        className="btn bg-amber-600 hover:bg-amber-700 border-none text-white text-sm shadow-md rounded-lg"
                    >
                        Kontak Kami
                    </Link>
                </div>
            </div>

            {/* Spacer agar konten tidak tertutup navbar */}
            <div className="h-16" />
        </>
    );
}
