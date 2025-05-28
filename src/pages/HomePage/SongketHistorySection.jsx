"use client"

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Scissors, Award, History, MapPin , ArrowRight} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SongketHistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  // PERUBAHAN UTAMA: Hapus tipe generik TypeScript dari useRef
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const currentElement = sectionRef.current;

    // Jika elemen belum ada (misalnya, pada render awal sebelum ref terpasang), jangan lakukan apa-apa.
    if (!currentElement) {
      return;
    }

    // Buat instance IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Setelah visible dan animasi dijalankan, kita bisa berhenti mengobservasi elemen ini.
          observer.unobserve(currentElement); // entry.target adalah currentElement
        }
      },
      { threshold: 0.1 } // Callback akan dijalankan ketika 10% elemen terlihat
    );

    // Mulai mengobservasi elemen
    observer.observe(currentElement);

    // Fungsi cleanup: akan dijalankan ketika komponen unmount atau sebelum efek berjalan lagi (jika dependensi berubah)
    return () => {
      // Gunakan variabel lokal 'currentElement' yang sama di cleanup.
      // Ini memastikan kita unobserve elemen yang sama yang kita observe.
      observer.unobserve(currentElement);
    };
  }, [sectionRef]); // sectionRef sebagai dependensi untuk mematuhi aturan exhaustive-deps

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-r from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Warisan Budaya{" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Kain Songket
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Menelusuri jejak sejarah dan keindahan kain mewah kebanggaan Nusantara
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              // transition: "opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s",
            }}
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            <div className="relative z-10">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/orang-menenun-songket.jpg"
                  alt="Proses Pembuatan Kain Songket Tradisional"
                  className="w-full h-auto object-cover"
                />
                <img
                  src="/images/orang-menenun-songket-2.jpg"
                  alt="Proses Pembuatan Kain Songket Tradisional"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-100 rounded-full z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full z-0"></div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm text-gray-700 font-medium">
                  Penenun songket tradisional menggunakan alat tenun bukan mesin
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              // transition: "opacity 1s ease-out 0.5s, transform 1s ease-out 0.5s",
            }}
            data-aos="fade-left"
            data-aos-duration="800"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Apa itu Kain Songket?</h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Songket adalah kain tenun mewah yang berasal dari Indonesia, khususnya Sumatera. Keunikan songket terletak
              pada teknik tenunnya yang menggabungkan benang emas atau perak ke dalam kain, menciptakan motif yang
              berkilauan dan mewah.
            </p>

            <div className="mb-8">
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                <History className="w-5 h-5 mr-2 text-amber-600" />
                Sejarah Songket
              </h4>
              <p className="text-gray-700 leading-relaxed pl-7">
                Sejarah songket dapat ditelusuri hingga abad ke-16 pada masa kejayaan Kerajaan Sriwijaya. Awalnya,
                songket hanya dikenakan oleh keluarga kerajaan dan bangsawan sebagai simbol status dan kekayaan.
                Pengaruh perdagangan dengan China, India, dan Arab turut memperkaya motif dan teknik pembuatan songket.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                <MapPin className="w-5 h-5 mr-2 text-amber-600" />
                Pusat Songket di Indonesia
              </h4>
              <p className="text-gray-700 leading-relaxed pl-7">
                Beberapa daerah terkenal dengan produksi songketnya antara lain Palembang (Sumatera Selatan),
                Minangkabau (Sumatera Barat), Sambas (Kalimantan Barat), dan Lombok (Nusa Tenggara Barat). Setiap daerah
                memiliki ciri khas motif dan teknik pembuatan yang unik.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                <Scissors className="w-5 h-5 mr-2 text-amber-600" />
                Proses Pembuatan
              </h4>
              <p className="text-gray-700 leading-relaxed pl-7">
                Pembuatan songket adalah proses yang rumit dan membutuhkan keahlian tinggi. Seorang penenun songket
                dapat menghabiskan waktu berminggu-minggu hingga berbulan-bulan untuk menyelesaikan selembar kain
                songket berkualitas tinggi. Proses ini melibatkan pemilihan benang, pewarnaan alami, dan teknik tenun
                yang diwariskan secara turun-temurun.
              </p>
            </div>

            <div>
              <h4 className="flex items-center text-lg font-semibold text-gray-800 mb-3">
                <Award className="w-5 h-5 mr-2 text-amber-600" />
                Nilai Budaya
              </h4>
              <p className="text-gray-700 leading-relaxed pl-7">
                Songket tidak hanya sekadar kain, tetapi juga menyimpan nilai filosofis dan budaya yang mendalam.
                Motif-motif pada songket sering kali menceritakan kisah, kepercayaan, dan harapan masyarakat. Hingga
                kini, songket masih digunakan dalam berbagai upacara adat, pernikahan, dan acara penting lainnya.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div
          className="mt-24"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "opacity 1s ease-out 1s, transform 1s ease-out 1s",
          }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Perjalanan Sejarah Songket</h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-300 to-orange-400"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right pr-8">
                    <h4 className="text-lg font-bold text-amber-700">Abad ke-7 hingga ke-13</h4>
                    <p className="text-gray-600 mt-2">
                      Kerajaan Sriwijaya menjadi pusat perdagangan di Asia Tenggara. Pengaruh budaya India, China, dan
                      Arab mulai masuk, termasuk teknik tenun.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8">
                    <h4 className="text-lg font-bold text-amber-700">Abad ke-16</h4>
                    <p className="text-gray-600 mt-2">
                      Songket mulai berkembang di Palembang sebagai kain kerajaan. Penggunaan benang emas dan perak
                      menjadi ciri khas yang menandakan status bangsawan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right pr-8">
                    <h4 className="text-lg font-bold text-amber-700">Abad ke-18 hingga ke-19</h4>
                    <p className="text-gray-600 mt-2">
                      Songket menyebar ke berbagai daerah di Sumatera dan pulau-pulau lain. Setiap daerah mulai
                      mengembangkan motif dan teknik khas mereka sendiri.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div></div>
                  <div className="pl-8">
                    <h4 className="text-lg font-bold text-amber-700">Abad ke-20</h4>
                    <p className="text-gray-600 mt-2">
                      Songket mulai dikenal secara nasional dan internasional. Upaya pelestarian dan revitalisasi
                      songket mulai dilakukan untuk menjaga warisan budaya.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-amber-500 border-4 border-amber-100"></div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-right pr-8">
                    <h4 className="text-lg font-bold text-amber-700">Masa Kini</h4>
                    <p className="text-gray-600 mt-2">
                      Songket tidak hanya digunakan untuk pakaian adat, tetapi juga diadaptasi menjadi berbagai produk
                      fashion dan dekorasi modern. UMKM songket berkembang dan mendapat dukungan pemerintah.
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
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
      </div>
    </section>
  )
}