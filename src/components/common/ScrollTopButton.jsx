// src/components/ScrollToTopButton.jsx
"use client"; // Diperlukan jika menggunakan Next.js App Router dan hook client-side

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // Anda bisa menggunakan ikon lain jika mau

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk menampilkan/menyembunyikan tombol berdasarkan posisi scroll
  const toggleVisibility = () => {
    // Tampilkan tombol jika pengguna telah scroll lebih dari 300px
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fungsi untuk melakukan scroll ke atas halaman
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Animasi scroll yang halus
    });
  };

  useEffect(() => {
    // Tambahkan event listener ketika komponen dimuat
    window.addEventListener('scroll', toggleVisibility);

    // Bersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []); // Array dependensi kosong memastikan efek ini hanya berjalan sekali (saat mount dan unmount)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className="bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-75"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;