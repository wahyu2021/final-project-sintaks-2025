import React from "react";
import { artisans } from "../../components/data/dataArtisan";
import { UsersRound } from "lucide-react"; // Menambahkan ikon untuk kontak pengrajin

const sectionPadding = "py-16 md:py-20 lg:py-24";
const containerSetup = "container mx-auto px-4 sm:px-6 lg:px-8";
const sectionTitleBaseClass = "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-center";
const sectionSubtitleClass = "mt-3 sm:mt-4 text-lg sm:text-xl text-amber-700 max-w-3xl mx-auto text-center leading-relaxed";

export default function TeamProfilSection() {
    return (
        <section className={`${sectionPadding} bg-amber-100`}>
            <div className={containerSetup}>
                <header
                    className="text-center mb-12 md:mb-16"
                    data-aos="fade-up"
                >
                    <h2 className={`${sectionTitleBaseClass} text-amber-800`}>
                        <UsersRound className="inline-block w-10 h-10 mr-3 text-orange-500" />{" "}
                        Kenali{" "}
                        <span className="text-orange-600">Tim & Pengrajin</span>{" "}
                        Kami
                    </h2>
                    <p className={sectionSubtitleClass}>
                        Figur-figur berdedikasi di balik keindahan dan
                        kelestarian Songket Sumatra Sutra.
                    </p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {artisans.map((artisan, index) => (
                        <div
                            key={index}
                            className="card bg-white shadow-xl rounded-lg overflow-hidden text-center flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 group"
                            data-aos="zoom-in-up"
                            data-aos-delay={index * 100} // Staggered delay
                        >
                            <figure className="pt-8 px-8">
                                <img
                                    src={artisan.image}
                                    alt={`Profil ${artisan.name}`}
                                    className="rounded-full w-32 h-32 md:w-36 md:h-36 object-cover border-4 border-amber-200 group-hover:border-amber-400 transition-colors duration-300 shadow-lg"
                                />
                            </figure>
                            <div className="card-body px-6 py-4 items-center flex-grow flex flex-col">
                                <h3 className="card-title text-lg lg:text-xl font-bold text-amber-700 group-hover:text-orange-600 transition-colors duration-300 mt-2">
                                    {artisan.name}
                                </h3>
                                <p className="text-sm text-orange-600 font-semibold mb-2">
                                    {artisan.title}
                                </p>
                                <p className="text-xs text-gray-600 mb-3 leading-relaxed flex-grow">
                                    {artisan.bio}
                                </p>
                                <div className="card-actions mt-auto pt-3">
                                    <a
                                        href={artisan.whatsappLink}
                                        target="_blank" // Membuka di tab baru
                                        rel="noopener noreferrer" // Keamanan
                                        aria-label={`Hubungi ${artisan.name} via WhatsApp`}
                                        className="btn btn-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-none px-5 rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-300"
                                    >
                                        {artisan.contactLabel || "Selengkapnya"}
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
