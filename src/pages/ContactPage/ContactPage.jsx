"use client"; // Jika menggunakan Next.js App Router

import React, { useState } from "react";
// Impor ikon dari lucide-react
import { Mail, Phone, MapPin, Send } from "lucide-react";

// 1. Impor SweetAlert2 dan CSS-nya
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

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
            [`${name}`]: value,
        }));
    };

    const handleSubmit = async (e) => {
        // Jadikan async jika ada proses API nantinya
        e.preventDefault();

        // TODO: Di sini Anda akan mengintegrasikan logika pengiriman data formulir ke API Anda.
        // Misalnya:
        // Swal.fire({
        //   title: 'Mengirim Pesan...',
        //   text: 'Mohon tunggu sebentar.',
        //   allowOutsideClick: false,
        //   didOpen: () => {
        //     Swal.showLoading();
        //   }
        // });
        // try {
        //   // const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
        //   // if (!response.ok) throw new Error('Gagal mengirim pesan.');
        //   // const result = await response.json();

        //   // Jika sukses:
        //   Swal.fire({
        //     title: 'Terkirim!',
        //     text: 'Pesan Anda telah berhasil dikirim. Terima kasih telah menghubungi kami.',
        //     icon: 'success',
        //     confirmButtonText: 'OK',
        //     confirmButtonColor: '#F59E0B' // Warna amber-500 untuk tombol
        //   });
        //   setFormData({ name: "", email: "", message: "" });

        // } catch (error) {
        //   console.error("Error submitting form:", error);
        //   Swal.fire({
        //     title: 'Gagal!',
        //     text: 'Maaf, terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi.',
        //     icon: 'error',
        //     confirmButtonText: 'Coba Lagi',
        //     confirmButtonColor: '#D97706' // Warna amber-600
        //   });
        // }

        // Untuk sekarang, kita langsung tampilkan pesan sukses (menggantikan console.log dan alert lama)
        console.log("Formulir terkirim:", formData);
        // Di dalam fungsi handleSubmit, setelah logika pengiriman (atau TODO)
        Swal.fire({
            icon: "success",
            title: "Pesan Terkirim!",
            text: "Terima kasih telah menghubungi Sumatra Sutra. Kami akan segera merespons Anda.",
            confirmButtonText: "Luar Biasa!",
            confirmButtonColor: "#D97706", // Warna amber-600 (lebih gelap untuk tombol agar kontras)
            timer: 3000, // Otomatis menutup setelah 3 detik (opsional)
            timerProgressBar: true, // Menampilkan progress bar untuk timer (opsional)
            // Kustomisasi tambahan untuk menyatu dengan tema:
            customClass: {
                popup: "rounded-xl shadow-lg", // Menyamakan dengan style kartu Anda
                confirmButton:
                    "btn btn-primary bg-amber-600 hover:bg-amber-700 border-none text-white font-semibold shadow-md", // Menggunakan kelas btn DaisyUI jika memungkinkan
                title: "text-amber-700", // Menyesuaikan warna judul sweetalert
                // Anda bisa menambahkan kelas lain untuk 'htmlContainer', 'actions', dll.
            },
            // Menambahkan sedikit animasi saat muncul (opsional)
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInDown
                    animate__faster
                    `, // Membutuhkan Animate.css jika ingin animasi ini
                },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutUp
                    animate__faster
                    `, // Membutuhkan Animate.css
            },
        });

        setFormData({ name: "", email: "", message: "" }); // Reset formulir
    };

    return (
        <>
            <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50 to-orange-100" id="contactSection">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="text-center mb-12 md:mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-700 tracking-tight">
                            Hubungi Kami
                        </h1>
                        <p className="mt-4 text-lg sm:text-xl text-amber-600 max-w-3xl mx-auto">
                            Kami senang mendengar dari Anda! Baik itu
                            pertanyaan, masukan, atau permintaan khusus, jangan
                            ragu untuk menghubungi tim Sumatra Sutra.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
                        {/* Informasi Kontak */}
                        <div className="md:col-span-5 p-6 sm:p-8 bg-white rounded-2xl shadow-xl flex flex-col space-y-6">
                            <h2 className="text-2xl sm:text-3xl font-semibold text-amber-700 border-b-2 border-amber-200 pb-4">
                                Detail Kontak
                            </h2>

                            <div className="space-y-5 text-gray-700 text-sm sm:text-base">
                                <div className="flex items-start space-x-3">
                                    <Mail className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-md text-amber-800">
                                            Email
                                        </strong>
                                        <a
                                            href="mailto:info@sumatrasutra.com"
                                            className="text-orange-600 hover:text-orange-700 hover:underline break-all"
                                        >
                                            info@sumatrasutra.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <Phone className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-md text-amber-800">
                                            Telepon
                                        </strong>
                                        <a
                                            href="tel:+6281234567890"
                                            className="text-orange-600 hover:text-orange-700 hover:underline"
                                        >
                                            +62 812-3456-7890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-3">
                                    <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <strong className="block text-md text-amber-800">
                                            Alamat
                                        </strong>
                                        <span className="text-gray-700">
                                            Jl. Merdeka No. 123, Palembang,{" "}
                                            <br />
                                            Sumatera Selatan, Indonesia
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-6">
                                <div className="w-full h-60 md:h-72 bg-amber-100 rounded-lg overflow-hidden shadow-inner">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127498.99769969593!2d104.68059991978267!3d-2.954819139728458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75e8fc299407%3A0x4039d80b220d100!2sPalembang%2C%20Kota%20Palembang%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1678886612345!5m2!1sid!2sid" // GANTI DENGAN URL EMBED PETA ANDA
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
                            className="md:col-span-7 space-y-6 p-6 sm:p-8 bg-white rounded-2xl shadow-xl"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Nama Lengkap Anda
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Contoh: Budi Santoso"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-40 p-3 text-gray-800 text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Alamat Email Anda
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="contoh@email.com"
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-40 p-3 text-gray-800 text-sm sm:text-base"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-amber-800 mb-1"
                                >
                                    Pesan atau Pertanyaan
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tuliskan pesan Anda di sini..."
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-40 p-3 text-gray-800 text-sm sm:text-base"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn btn-lg bg-gradient-to-r from-amber-600 to-orange-500 hover:from-amber-700 hover:to-orange-600 border-none text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200 ease-in-out flex items-center justify-center space-x-2"
                            >
                                <Send className="w-5 h-5" />
                                <span>Kirim Pesan</span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
