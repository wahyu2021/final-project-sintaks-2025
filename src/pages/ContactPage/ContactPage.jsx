"use client"; // Jika menggunakan Next.js App Router

import React, { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulir terkirim:", formData);
        alert("Pesan Anda telah terkirim!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50 to-orange-50">
                {/* Sedikit penyesuaian padding vertikal */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Padding horizontal standar */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 text-center text-amber-700">
                        {/* Ukuran font judul disesuaikan sedikit untuk layar kecil */}
                        Hubungi Kami
                    </h1>
                    <p className="text-md sm:text-lg text-center text-amber-600 mb-10 md:mb-12 max-w-3xl mx-auto">
                        {/* max-w-3xl agar tidak terlalu lebar di layar besar */}
                        Kami senang mendengar dari Anda! Baik itu pertanyaan,
                        masukan, atau permintaan khusus, jangan ragu untuk
                        menghubungi tim Sumatra Sutra.
                    </p>

                    <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12 items-start md:items-stretch">

                        {/* Informasi Kontak */}
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 p-6 bg-white rounded-xl shadow-lg flex flex-col">
                            {/* w-full untuk mobile, md:w-1/3 untuk desktop */}
                            <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-amber-700">
                                Informasi Kontak
                            </h2>
                            <div className="space-y-4 text-gray-700 text-sm sm:text-base">
                                {/* Ukuran font dasar untuk konten kontak */}
                                <p className="flex items-start">
                                    <strong className="w-20 inline-block flex-shrink-0 text-amber-800">
                                        Email:
                                    </strong>
                                    <a
                                        href="mailto:info@sumatrasutra.com"
                                        className="text-orange-600 hover:text-orange-700 hover:underline break-all"
                                    >
                                        info@sumatrasutra.com
                                    </a>
                                </p>
                                <p className="flex items-start">
                                    <strong className="w-20 inline-block flex-shrink-0 text-amber-800">
                                        Telepon:
                                    </strong>
                                    <a
                                        href="tel:+6281234567890"
                                        className="text-orange-600 hover:text-orange-700 hover:underline"
                                    >
                                        +62 812-3456-7890
                                    </a>
                                </p>
                                <p className="flex items-start">
                                    <strong className="w-20 inline-block flex-shrink-0 text-amber-800">
                                        Alamat:
                                    </strong>
                                    <span className="text-gray-700">
                                        Jl. Merdeka No. 123, Palembang, Sumatera
                                        Selatan, Indonesia
                                    </span>
                                </p>
                            </div>
                            <div className="mt-auto pt-6">
                                <div className="w-full h-60 bg-amber-100 rounded-md overflow-hidden">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127498.96000706027!2d104.68019304335938!3d-2.954999999999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc28148d%3A0x8739057590753c5a!2sPalembang%2C%20Kota%20Palembang%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid" // GANTI DENGAN URL EMBED PETA ANDA YANG BENAR
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Peta Lokasi Sumatra Sutra"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Formulir Kontak */}
                        <form
                            onSubmit={handleSubmit}
                            className="w-full md:w-2/3 space-y-6 p-6 bg-white rounded-xl shadow-lg"
                        >
                            {/* w-full untuk mobile, md:w-2/3 untuk desktop */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Nama Anda"
                                    className="mt-1 block w-full rounded-lg border-amber-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 text-gray-700 text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Alamat Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="email@contoh.com"
                                    className="mt-1 block w-full rounded-lg border-amber-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 text-gray-700 text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Pesan Anda
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    className="mt-1 block w-full rounded-lg border-amber-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 p-3 text-gray-700 text-sm sm:text-base"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn btn-primary bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-none text-white font-semibold py-3 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-150 ease-in-out text-sm sm:text-base"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
