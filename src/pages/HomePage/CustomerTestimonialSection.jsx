"use client"; // Jika menggunakan Next.js App Router

import React, { useState, useEffect, useRef } from "react";
import { Star, UserCircle , ArrowRight} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Impor Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';

// Impor Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// data testimonial
import { testimonials } from '../../components/data/testimonialData';

export default function CustomerTestimonialsCarousel() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // ... (useEffect dan fungsi lainnya tetap sama) ...
  useEffect(() => {
    const currentElement = sectionRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(currentElement);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [sectionRef]);

  const getFadeInUpAnimationStyle = (
    isVisibleState,
    delayInSeconds = 0
  ) => {
    return {
      opacity: isVisibleState ? 1 : 0,
      transform: isVisibleState ? "translateY(0)" : "translateY(30px)",
      transition: `opacity 0.8s ease-out ${delayInSeconds}s, transform 0.8s ease-out ${delayInSeconds}s`,
    };
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-5 h-5 ${
            i <= rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return <div className="flex items-center">{stars}</div>;
  };

  return (
    <section
      id="testimoni"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden"
      style={getFadeInUpAnimationStyle(isVisible, 0)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Seksi */}
        <div
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Apa Kata <span className="text-amber-800">Pelanggan Kami</span> ? 
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simak pengalaman mereka yang telah mempercayakan pilihan songketnya kepada kami.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Carousel Testimoni */}
        <Swiper
          // -------------------- MODIFIKASI DI SINI (LANGKAH 2) --------------------
          modules={[EffectCoverflow, Pagination, Autoplay]} // Tambahkan Autoplay ke modules
          // Jika Anda ingin navigasi (tombol panah), tambahkan juga Navigation dan uncomment CSS-nya serta prop navigation
          // modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true} // Dianjurkan untuk diaktifkan jika menggunakan autoplay agar lebih smooth
          
          // -------------------- MODIFIKASI DI SINI (LANGKAH 3) --------------------
          autoplay={{ 
            delay: 2000, // Waktu tunda antar slide dalam milidetik (ms), misal 3000ms = 3 detik
            disableOnInteraction: false, // Tetap autoplay meskipun pengguna berinteraksi (misal klik pagination)
                                         // Set ke true jika ingin autoplay berhenti setelah interaksi pertama
            pauseOnMouseEnter: true, // Opsional: autoplay akan berhenti saat kursor mouse di atas slider
          }}

          initialSlide={1} // Anda bisa set ke 0 jika ingin mulai dari slide pertama
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="!pb-12 md:!pb-16"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide 
              key={testimonial.id} 
              className="!flex !justify-center"
            >
              {({ isActive }) => (
                <div
                  className={`card bg-base-100 shadow-lg transition-all duration-500 ease-out-cubic
                              ${isActive ? 'scale-105 z-10 !shadow-2xl' : 'scale-90 opacity-70'}`}
                  style={{ 
                    maxWidth: '380px',
                    width: '90%',    
                  }}
                >
                  <div className="card-body items-center text-center p-6 md:p-8">
                    <div className="mb-4">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover shadow-md"
                        />
                      ) : (
                        <UserCircle className="w-20 h-20 text-gray-300 mx-auto" />
                      )}
                    </div>
                    <h3 className="font-semibold text-xl text-base-content mb-1">
                      {testimonial.name}
                    </h3>
                    <div className="text-xs text-gray-500 mb-3">{testimonial.date}</div>
                    <div className="mb-4">{renderStars(testimonial.rating)}</div>
                    <p className="text-base-content/80 leading-relaxed text-sm h-24 overflow-y-auto">
                      "{testimonial.review}"
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Call to Action */}
      {/* ... (Sisa kode CTA tetap sama) ... */}
      <div
        className="mt-24 text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 1s ease-out 1s, transform 1s ease-out 1s",
        }}
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Jelajahi Koleksi Songket Kami</h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Temukan keindahan songket asli Sumatera dengan berbagai motif tradisional yang ditenun dengan keahlian
          tinggi dan benang berkualitas premium.
        </p>
        <button
          className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center mx-auto"
          style={{ transition: "all 0.3s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onClick={() => navigate("/products")}
        >
          Lihat Koleksi Songket
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
}