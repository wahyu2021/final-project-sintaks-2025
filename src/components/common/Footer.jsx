import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-200 flex justify-center">
            <div className="container py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & About */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold text-amber-800 mb-2">Sumatra Sutra</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Melestarikan warisan kain sutera tradisional Sumatera Selatan 
                                dengan kualitas terbaik dan motif autentik yang telah turun temurun.
                            </p>
                        </div>
                        <div className="flex space-x-3">
                            <Link to="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                                <FaFacebookF className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                                <FaInstagram className="h-5 w-5" />
                            </Link>
                            <Link to="#" className="text-amber-600 hover:text-amber-800 transition-colors">
                                <FaTwitter className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Products & Services */}
                    <div className="md:ml-28">
                        <h6 className="font-semibold text-amber-800 mb-4">Produk & Layanan</h6>
                        <nav className="space-y-2">
                            {[
                                "Kain Sutera Songket",
                                "Kain Sutera Polos",
                                "Kain Sutera Jumputan",
                                "Custom Design",
                                "Grosir & Eceran"
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    to="#"
                                    className="block text-sm text-gray-600 hover:text-amber-700 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Company Info */}
                    <div className="md:ml-24">
                        <h6 className="font-semibold text-amber-800 mb-4">Informasi</h6>
                        <nav className="space-y-2">
                            {[
                                "Tentang Kami",
                                "Sejarah Sutera Palembang",
                                "Cara Perawatan",
                                "Testimoni",
                                "FAQ"
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    to="#"
                                    className="block text-sm text-gray-600 hover:text-amber-700 transition-colors"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-3 mb-6">
                        <div className="flex items-start space-x-2">
                            <FiMapPin className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                                Jl. Merdeka No. 123, Palembang, Sumatera Selatan
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiPhone className="h-4 w-4 text-amber-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                                +62 812-3456-7890
                            </span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FiMail className="h-4 w-4 text-amber-600 flex-shrink-0" />
                            <span className="text-sm text-gray-600">
                                info@sumatrasutra.com
                            </span>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-amber-200 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-sm text-gray-600">
                            © {new Date().getFullYear()} Sumatra Sutra. Semua hak cipta dilindungi.
                        </div>
                        <div className="text-center">
                            <p className="text-xs text-amber-700 italic">
                                "Melestarikan Budaya Sutera Nusantara dengan Bangga"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
