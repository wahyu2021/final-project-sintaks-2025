import React from "react";
import { History as HistoryIcon} from "lucide-react"; 

const sejarahImage1 = "/images/about/Palembang4.jpg";
const sejarahImage2 = "/images/about/COLLECTIE_TROPENMUSEUM_Een_bruidspaar_uit_Palembang_en_Banjuasin_Zuid-Sumatra_TMnr_10002986.jpg";
const sejarahImage3 = "/images/about/46478f444561733ed44577589758ec49.jpg";

// Kelas styling umum untuk konsistensi
const sectionPadding = "py-16 md:py-20 lg:py-24";
const containerSetup = "container mx-auto px-4 sm:px-6 lg:px-8";
const sectionTitleBaseClass = "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center";
const sectionSubtitleClass = "mt-3 sm:mt-4 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto text-center leading-relaxed";
const contentCardBase = "bg-white p-6 sm:p-8 rounded-2xl shadow-xl";
const paragraphClass = "text-gray-700 text-justify leading-relaxed space-y-3 text-base md:text-lg";

export default function HistorySection() {
    return (
        <section className={`${sectionPadding} bg-amber-50`} id="historySection">
            <div className={containerSetup}>
                <header
                    className="text-center mb-12 md:mb-16"
                    data-aos="fade-up"
                >
                    <h2 className={`${sectionTitleBaseClass} text-amber-800`}>
                        <HistoryIcon className="inline-block w-10 h-10 mr-3 text-orange-500" />{" "}
                        Jejak{" "}
                        <span className="text-orange-600">Sejarah Songket</span>
                    </h2>
                    <p className={sectionSubtitleClass}>
                        Dari Kemaharajaan Sriwijaya hingga menjadi warisan tak
                        ternilai Nusantara.
                    </p>
                </header>
                <div className={`grid grid-cols-1 gap-8 md:gap-12`}>
                    <div
                        className={`md:flex md:items-center md:gap-8 lg:gap-12 ${contentCardBase} hover:shadow-2xl transition-shadow duration-300`}
                        data-aos="fade-right"
                    >
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mb-3">
                                Akar Tradisi Sriwijaya
                            </h3>
                            <p className={paragraphClass}>
                                Kain songket, khususnya dari Palembang dan
                                Minangkabau, berakar kuat sejak masa
                                Kemaharajaan Sriwijaya. Ditenun menggunakan
                                benang emas dan sutra pilihan, sebagian dari
                                petani lokal dan impor. Ketersediaan emas di
                                Sumatra menjadi faktor penting.
                            </p>
                        </div>
                        <div
                            className="md:w-1/2 order-1 md:order-2 mt-6 md:mt-0 flex justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <img
                                src={sejarahImage1}
                                className="w-full max-w-md rounded-xl shadow-lg object-cover aspect-[4/3]"
                                alt="Sejarah Songket Palembang"
                            />
                        </div>
                    </div>
                    <div
                        className={`md:flex md:items-center md:gap-8 lg:gap-12 ${contentCardBase} hover:shadow-2xl transition-shadow duration-300`}
                        data-aos="fade-left"
                    >
                        <div className="md:w-1/2">
                            <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mb-3">
                                Penyebaran dan Pengaruh
                            </h3>
                            <p className={paragraphClass}>
                                Teknik tenun songket menyebar dari Palembang ke
                                berbagai wilayah kekuasaan Sriwijaya dan
                                sekitarnya melalui jalur perdagangan serta
                                perkawinan antarbangsawan. Setiap daerah
                                mengembangkan ciri khasnya sendiri.
                            </p>
                        </div>
                        <div
                            className="md:w-1/2 flex justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <img
                                src={sejarahImage2}
                                className="w-full max-w-md rounded-xl shadow-lg object-cover aspect-[4/3]"
                                alt="Penyebaran Songket"
                            />
                        </div>
                    </div>
                    <div
                        className={`md:flex md:items-center md:gap-8 lg:gap-12 ${contentCardBase} hover:shadow-2xl transition-shadow duration-300`}
                        data-aos="fade-right"
                    >
                        <div className="md:w-1/2 order-2 md:order-1">
                            <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mb-3">
                                Simbol Kemewahan dan Status
                            </h3>
                            <p className={paragraphClass}>
                                Dianggap kain mewah, songket melambangkan status
                                sosial tinggi, digunakan dalam upacara adat dan
                                sebagai mahar. Palembang, pusat kerajinan
                                songket terbaik, menghasilkan "Ratu Segala
                                Kain".
                            </p>
                        </div>
                        <div
                            className="md:w-1/2 order-1 md:order-2 mt-6 md:mt-0 flex justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="100"
                        >
                            <img
                                src={sejarahImage3}
                                className="w-full max-w-md rounded-xl shadow-lg object-cover aspect-[4/3]"
                                alt="Songket sebagai simbol kemewahan"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
