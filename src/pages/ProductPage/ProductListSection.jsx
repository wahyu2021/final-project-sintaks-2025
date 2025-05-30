// ProductListSection.jsx

import { allProducts } from "../../components/data/dataProduct";
import React, { useState, useEffect, useMemo } from "react";
import { ProductCard } from "./ProductCard";
import { X } from "lucide-react";
import { useSearchParams, useLocation } from 'react-router-dom';

const VALID_CATEGORIES = ["semua", "pria", "wanita", "aksesori"];

export function ProductListSection() {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const initialCategory = searchParams.get('category');
    const defaultTab = (initialCategory && VALID_CATEGORIES.includes(initialCategory)) ? initialCategory : "semua";

    const [activeTab, setActiveTab] = useState(defaultTab);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // PERBAIKAN: Deklarasikan filteredProducts SEBELUM useEffect yang menggunakannya
    const filteredProducts = useMemo(() => {
        // Pastikan allProducts ada sebelum filter, untuk menghindari error jika allProducts gagal di-load
        if (!allProducts || !Array.isArray(allProducts)) {
            console.warn("allProducts tidak tersedia atau bukan array, mengembalikan array kosong untuk filteredProducts.");
            return [];
        }
        return allProducts.filter((product) => {
            if (activeTab === "semua") return true;
            // Pastikan product.kategori ada sebelum toLowerCase
            return product && product.kategori && product.kategori.toLowerCase() === activeTab.toLowerCase();
        });
    }, [activeTab]); // Jika allProducts bisa berubah (misalnya dari props), tambahkan ke dependensi

    // Efek untuk sinkronisasi tab dengan URL query param
    useEffect(() => {
        const categoryFromUrl = searchParams.get('category');
        if (categoryFromUrl && VALID_CATEGORIES.includes(categoryFromUrl)) {
            if (activeTab !== categoryFromUrl) {
                setActiveTab(categoryFromUrl);
            }
        } else if (!categoryFromUrl) {
            if (activeTab !== "semua") {
                // Opsional: setActiveTab("semua");
            }
        }
    }, [searchParams, activeTab]);

    // Efek untuk scroll ke elemen berdasarkan hash URL
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            const element = document.getElementById(id);
            if (element) {
                const timer = setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 150);
                return () => clearTimeout(timer);
            }
        }
        // Dependensi filteredProducts di sini bertujuan agar scroll terjadi setelah produk selesai difilter ulang
        // yang mungkin mengubah layout. Ini seharusnya sudah aman karena filteredProducts dideklarasikan di atas.
    }, [location.hash, filteredProducts]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        const newSearchParams = {};
        if (tabName !== "semua") {
            newSearchParams.category = tabName;
        }
        setSearchParams(newSearchParams, { replace: true });

        const element = document.getElementById("daftar-produk");
        if(element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleShowDetail = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                handleCloseModal();
            }
        };
        if (isModalOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            if (document.body.style.overflow === 'hidden') {
                 document.body.style.overflow = 'auto';
            }
        };
    }, [isModalOpen]); // handleCloseModal bisa di-memoize dengan useCallback jika ingin dimasukkan ke dependensi

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div id="daftar-produk" className="text-center mb-12 md:mb-16">
                    <h2
                        className="text-3xl md:text-4xl font-bold text-amber-700 mb-4"
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                    >
                        Koleksi Songket Pilihan
                    </h2>
                    <p
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-anchor-placement="top-bottom"
                    >
                        Setiap helai adalah mahakarya tenun tangan dengan motif
                        dan makna yang mendalam.
                    </p>
                    <div
                        className="flex justify-center mt-4"
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
                    </div>
                </div>

                <div
                    role="tablist"
                    className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-4 mb-12"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {VALID_CATEGORIES.map(
                        (tabName, index) => (
                            <button
                                key={tabName}
                                role="tab"
                                aria-selected={activeTab === tabName}
                                className={`
                                btn btn-md capitalize
                                rounded-lg
                                transition-all duration-300 ease-in-out
                                border-0
                                ${
                                    activeTab === tabName
                                        ? "bg-amber-500 text-white font-semibold border-amber-600 shadow-md"
                                        : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                                }`}
                                onClick={() => handleTabClick(tabName)}
                                data-aos-delay={index*50}
                            >
                                {tabName === "semua" ? "Semua Kategori" : tabName}
                            </button>
                        )
                    )}
                </div>

                {filteredProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {filteredProducts.map(
                            (product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onShowDetail={handleShowDetail}
                                />
                            )
                        )}
                    </div>
                ) : (
                    <p
                        className="text-center text-gray-500 text-xl py-10"
                        data-aos="fade-in"
                    >
                        Tidak ada produk yang cocok dengan kategori "{activeTab}".
                    </p>
                )}
            </div>

            {/* Modal Section */}
            {isModalOpen && selectedProduct && (
                <dialog
                    id="modal_product_detail_main"
                    className="modal modal-open"
                    open
                >
                    <div className="modal-box w-11/12 max-w-3xl bg-white rounded-lg">
                        <form method="dialog">
                            <button
                                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-gray-600 hover:bg-gray-200"
                                onClick={handleCloseModal}
                                type="button"
                                aria-label="Tutup modal"
                            >
                                <X size={20} />
                            </button>
                        </form>
                        {/* ... Konten modal tetap sama ... */}
                        <div className="flex flex-col md:flex-row gap-6 pt-4 md:pt-0">
                            <div className="md:w-1/2">
                                <img
                                    src={selectedProduct.image}
                                    alt={selectedProduct.title}
                                    className="w-full h-auto max-h-[70vh] object-contain rounded-md shadow"
                                />
                            </div>
                            <div className="md:w-1/2 space-y-3">
                                <h3 className="text-2xl lg:text-3xl font-bold text-amber-700">
                                    {selectedProduct.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Asal: {selectedProduct.from}
                                </p>
                                <p className="text-lg font-semibold text-orange-600">
                                    {selectedProduct.Price}
                                </p>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        Makna Motif:
                                    </p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {selectedProduct.motif}
                                    </p>
                                </div>
                                {selectedProduct.detail && (
                                    <div>
                                        <p className="font-medium text-gray-800">
                                            Detail Produk:
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {selectedProduct.detail}
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <p className="font-medium text-gray-800">
                                        Ketersediaan:
                                    </p>
                                    <p className="text-gray-600 text-sm">
                                        {selectedProduct.available}
                                    </p>
                                </div>
                                <div className="card-actions mt-6">
                                    <a
                                        href={`https://wa.me/6287765176764?text=Halo,+saya+tertarik+dengan+produk+${encodeURIComponent(selectedProduct.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-none w-full"
                                    >
                                        Pesan Sekarang
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            aria-label="Tutup modal"
                        >
                            close
                        </button>
                    </form>
                </dialog>
            )}
        </section>
    );
}