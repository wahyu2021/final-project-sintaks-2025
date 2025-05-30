import React from "react";
import { Target, ShieldCheck } from "lucide-react"; // Menambahkan ikon untuk kontak pengrajin

// Kelas styling umum untuk konsistensi
const sectionPadding = "py-16 md:py-20 lg:py-24";
const containerSetup = "container mx-auto px-4 sm:px-6 lg:px-8";
const sectionTitleBaseClass = "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center";
const sectionSubtitleClass = "mt-3 sm:mt-4 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto text-center leading-relaxed";
const contentCardBase = "bg-white p-6 sm:p-8 rounded-2xl shadow-xl";
const paragraphClass = "text-gray-700 text-justify leading-relaxed space-y-3 text-base md:text-lg";
const listClass = "list-disc list-outside pl-5 text-gray-700 space-y-2 text-sm md:text-base leading-relaxed";

export default function VisiMisiSection() {
    return (
        <section
            className={`${sectionPadding} bg-gradient-to-br from-orange-100 to-amber-100`}
        >
            <div className={containerSetup}>
                <header
                    className="text-center mb-12 md:mb-16"
                    data-aos="fade-up"
                >
                    <h2 className={`${sectionTitleBaseClass} text-amber-800`}>
                        Visi <span className="text-orange-600">&</span> Misi
                        Kami
                    </h2>
                    <p className={sectionSubtitleClass}>
                        Membawa warisan Songket ke panggung dunia dengan
                        integritas dan inovasi.
                    </p>
                </header>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <div
                        className={`${contentCardBase} flex flex-col hover:shadow-2xl transition-shadow duration-300`}
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <div className="flex items-center mb-4">
                            <Target className="w-8 h-8 md:w-10 md:h-10 text-amber-600 mr-3 md:mr-4 flex-shrink-0" />
                            <h3 className="text-xl md:text-2xl font-bold text-amber-700">
                                Visi
                            </h3>
                        </div>
                        <p className={`${paragraphClass} text-sm md:text-base`}>
                            Menjadikan Sumatra Sutra sebagai simbol warisan
                            budaya songket yang kuat, berdaya saing tinggi, dan
                            mampu mengangkat kesejahteraan perajin lokal melalui
                            digitalisasi UMKM serta peningkatan kesadaran budaya
                            di tingkat nasional dan internasional.
                        </p>
                    </div>
                    <div
                        className={`${contentCardBase} flex flex-col hover:shadow-2xl transition-shadow duration-300`}
                        data-aos="fade-left"
                        data-aos-delay="200"
                    >
                        <div className="flex items-center mb-4">
                            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-amber-600 mr-3 md:mr-4 flex-shrink-0" />
                            <h3 className="text-xl md:text-2xl font-bold text-amber-700">
                                Misi
                            </h3>
                        </div>
                        <ul className={listClass}>
                            <li>
                                Melestarikan warisan budaya melalui edukasi dan
                                promosi songket.
                            </li>
                            <li>
                                Mendukung UMKM lokal dalam meningkatkan kualitas
                                dan daya saing produk.
                            </li>
                            <li>
                                Menyediakan platform digital yang memudahkan
                                akses informasi dan pembelian songket.
                            </li>
                            <li>
                                Mendorong inovasi desain yang relevan tanpa
                                meninggalkan nilai tradisional.
                            </li>
                            <li>
                                Menjalin kemitraan untuk menciptakan ekosistem
                                songket yang berkelanjutan.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
