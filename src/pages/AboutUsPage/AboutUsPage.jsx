"use client";

import React, { useEffect } from 'react'; // Impor useEffect
import AOS from 'aos'; // Impor AOS
import 'aos/dist/aos.css'; // Impor stylesheet AOS

import { HeroSection } from './HeroSection';
import HistorySection from './HistorySection';
import VisiMisiSection from './VisiMisiSection';
import TeamProfilSection from './TeamProfilSection';
import ProcessSection from './ProcessSection';

// Asumsikan ini adalah komponen utama untuk halaman "Tentang Kami"
export default function AboutPage() {
  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam ms
      once: true, // Apakah animasi hanya terjadi sekali
      offset: 50, // Offset (dalam px) dari titik trigger asli
      easing: 'ease-in-out', // Jenis easing
    });
  }, []);

  return (
    <>
      <HeroSection />

      <HistorySection />

      <VisiMisiSection />

      <TeamProfilSection />

      <ProcessSection />

    </>
  )
}