import React from "react";
import { Zap, BookOpen} from "lucide-react"; // Menambahkan ikon untuk kontak pengrajin


// Path gambar (PASTIKAN SEMUA PATH INI BENAR dan file ada di folder public Anda)
const prosesImage1 = "/images/about/Seorang wanita yang sedang memperagakan pembuatan Songket di sebuah pasar malam di Surabaya 1905-1906.jpg";
const prosesImage2 = "/images/about/Proses Pembuatan.jpg";
const komitmenImage1 = "/images/about/Songket Sambas Kain Perempuan.jpg";
const komitmenImage2 = "/images/about/Keistimewaan Kain Tenun Songket Pandai Sikek Khas Sumatera Barat.jpg";

// Kelas styling umum untuk konsistensi
const sectionPadding = "py-16 md:py-20 lg:py-24";
const containerSetup = "container mx-auto px-4 sm:px-6 lg:px-8";
const contentCardBase = "bg-white p-6 sm:p-8 rounded-2xl shadow-xl";
const subSectionTitleBaseClass = "text-2xl md:text-3xl font-bold mb-6 flex items-center";
const paragraphClass = "text-gray-700 text-justify leading-relaxed space-y-3 text-base md:text-lg";
const listClass = "list-disc list-outside pl-5 text-gray-700 space-y-2 text-sm md:text-base leading-relaxed";

export default function ProcessSection() {
    return (
        <section
            className={`${sectionPadding} bg-gradient-to-b from-orange-50 to-amber-100`}
        >
            <div className={containerSetup}>
                <div
                    className={`${contentCardBase} flex flex-col lg:flex-row gap-8 lg:gap-12 items-start`}
                    data-aos="fade-up"
                >
                    <div
                        className="lg:w-1/2"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <h2
                            className={`${subSectionTitleBaseClass} text-amber-700`}
                        >
                            <Zap className="w-7 h-7 mr-3 text-orange-500" />
                            Proses Penciptaan Songket
                        </h2>
                        <p
                            className={`${paragraphClass.replace(
                                "space-y-4",
                                "space-y-3"
                            )} mb-4`}
                        >
                            Songket ditenun menggunakan benang emas dengan alat
                            tenun Panta. Berikut tahapan sederhananya:
                        </p>
                        <ol
                            className={`${listClass} mb-6 pl-2 text-sm md:text-base`}
                        >
                            <li>Persiapan benang lungsin (benang dasar).</li>
                            <li>
                                Menangi benang (merapikan dan mengatur benang
                                lungsin).
                            </li>
                            <li>
                                Persiapan benang emas atau perak sebagai pakan
                                tambahan.
                            </li>
                            <li>Penyambungan benang jika putus.</li>
                            <li>
                                Penggulungan benang pakan pada sekoci/teropong.
                            </li>
                            <li>
                                Proses menenun dengan menyisipkan benang
                                emas/perak untuk membentuk motif.
                            </li>
                            <li>
                                Penyempurnaan (tahap akhir merapikan tenunan).
                            </li>
                        </ol>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div
                                className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <img
                                    src={prosesImage1}
                                    alt="Proses Menenun Songket"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <img
                                    src={prosesImage2}
                                    alt="Detail Benang Emas Songket"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className="lg:w-1/2"
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <h2
                            className={`${subSectionTitleBaseClass} text-amber-700`}
                        >
                            <BookOpen className="w-7 h-7 mr-3 text-orange-500" />
                            Komitmen Pelestarian Budaya
                        </h2>
                        <p
                            className={`${paragraphClass.replace(
                                "space-y-4",
                                "space-y-3"
                            )} mb-4`}
                        >
                            Sumatra Sutra meyakini warisan budaya adalah jati
                            diri bangsa. Songket bukan hanya kain, tapi simbol
                            nilai, sejarah, dan kearifan lokal.
                        </p>
                        <p className="font-semibold text-gray-800 mb-2 text-md">
                            Komitmen kami:
                        </p>
                        <ul className={listClass}>
                            <li>
                                <strong>
                                    Melestarikan Teknik Tradisional:
                                </strong>{" "}
                                Menjaga keaslian teknik tenun bersama pengrajin.
                            </li>
                            <li>
                                <strong>Memberdayakan Komunitas:</strong>{" "}
                                Dukungan pelatihan, akses pasar, dan ekonomi
                                untuk pengrajin.
                            </li>
                            <li>
                                <strong>Edukasi Budaya:</strong> Menyebarkan
                                pengetahuan nilai dan sejarah songket.
                            </li>
                            <li>
                                <strong>Inovasi Berbasis Tradisi:</strong>{" "}
                                Memadukan tradisi dan modernitas agar songket
                                tetap relevan.
                            </li>
                            <li>
                                <strong>Keberlanjutan Warisan:</strong> Menjaga
                                kelestarian songket untuk generasi mendatang.
                            </li>
                        </ul>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div
                                className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <img
                                    src={komitmenImage1}
                                    alt="Songket Modern"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div
                                className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-md"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <img
                                    src={komitmenImage2}
                                    alt="Pelestarian Budaya Songket"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
