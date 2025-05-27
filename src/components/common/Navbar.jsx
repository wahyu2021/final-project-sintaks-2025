import React from "react";
import { PiYarn } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
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
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
                                <Link to="/product" className="font-semibold">
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
                        className="flex items-center gap-2 text-2xl font-bold text-amber-700 hover:text-amber-800 transition-colors duration-200"
                    >
                        <PiYarn className="text-4xl" />
                        <span className="tracking-wide">Sumatera Sutra</span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1 text-md">
                        <li>
                            <Link
                                to="/"
                                className="font-semibold hover:text-amber-700"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="font-semibold hover:text-amber-700"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/product"
                                className="font-semibold hover:text-amber-700"
                            >
                                Product
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="font-semibold hover:text-amber-700"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* CTA Buttons */}
                <div className="navbar-end hidden md:flex gap-3 pr-4">
                    <Link
                        to="/quote"
                        className="btn btn-outline border-gray-300 text-sm hover:border-amber-500 hover:text-amber-600 transition"
                    >
                        Request a Quote
                    </Link>
                    <Link
                        to="/contact"
                        className="btn bg-amber-600 hover:bg-amber-700 border-none text-white text-sm shadow-md rounded-lg"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>

            {/* Spacer agar konten tidak tertutup navbar */}
            <div className="h-16" />
        </>
    );
}

export default Navbar;
