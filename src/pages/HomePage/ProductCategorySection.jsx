"use client";

import React from 'react';
import { FaMale, FaFemale, FaShoppingBag } from 'react-icons/fa';

export default function ProductCategorySection() {
  const categories = [
    {
      name: "Pria",
      icon: <FaMale className="w-16 h-16 mb-4 text-primary group-hover:text-white transition-colors duration-300" />,
      description: "Temukan koleksi pakaian dan aksesoris pria terbaru.",
      aos: "fade-right",
      link: "#pria"
    },
    {
      name: "Wanita",
      icon: <FaFemale className="w-16 h-16 mb-4 text-primary group-hover:text-white transition-colors duration-300" />,
      description: "Jelajahi berbagai pilihan busana dan aksesoris wanita.",
      aos: "fade-up",
      link: "#wanita"
    },
    {
      name: "Aksesori",
      icon: <FaShoppingBag className="w-16 h-16 mb-4 text-primary group-hover:text-white transition-colors duration-300" />,
      description: "Lengkapi penampilan Anda dengan beragam aksesoris.",
      aos: "fade-left",
      link: "#aksesori"
    },
  ];

  return (
    // 👇 Perubahan tema background di sini
    <section className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Seksi */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"> {/* Sesuaikan warna teks judul jika perlu */}
            Kategori Produk Kami
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto"> {/* Sesuaikan warna teks deskripsi jika perlu */}
            Pilih kategori yang sesuai dengan kebutuhan fashion Anda.
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div> {/* Garis aksen */}
          </div>
        </div>

        {/* Grid Kategori */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div
              key={index}
              data-aos={category.aos}
              data-aos-delay={index * 100}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 group transform hover:-translate-y-2"
            >
              <figure className="px-10 pt-10 flex flex-col items-center">
                {category.icon}
              </figure>
              <div className="card-body items-center text-center">
                <h3 className="card-title text-2xl font-semibold mb-2 text-base-content group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-base-content/70 mb-4">{category.description}</p>
                <div className="card-actions">
                  <a href={category.link} className="btn btn-primary group-hover:bg-primary-focus">
                    Lihat Produk
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}