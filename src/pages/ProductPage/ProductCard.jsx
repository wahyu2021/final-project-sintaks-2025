export function ProductCard({ product, onShowDetail }) {
    return (
        // Tambahkan atribut data-aos untuk animasi pada kartu produk
        <div
            className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg overflow-hidden flex flex-col group"
            data-aos="fade-up" // Animasi umum untuk kartu
            data-aos-duration="700" // Durasi animasi
        >
            <figure className="h-64 overflow-hidden relative">
                <img
                    src={product.image}
                    alt={product.title || "Songket"}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </figure>
            <div className="card-body p-4 md:p-6 flex flex-col flex-grow">
                <h2 className="card-title text-lg md:text-xl font-semibold text-amber-700 mb-1 group-hover:text-wrap">
                    {product.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-500 mb-3">
                    {product.from}
                </p>

                <div className="space-y-1 text-xs md:text-sm mb-4 flex-grow">
                    <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24 md:w-28 flex-shrink-0">
                            Harga:
                        </span>
                        <span className="text-gray-600 ml-2 break-words">
                            {product.Price}
                        </span>
                    </div>
                    <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24 md:w-28 flex-shrink-0">
                            Makna Motif:
                        </span>
                        <span
                            className="text-gray-600 ml-2 break-words h-10 overflow-hidden text-ellipsis"
                            title={product.motif}
                        >
                            {product.motif}
                        </span>
                    </div>
                    <div className="flex items-start">
                        <span className="font-semibold text-gray-700 w-24 md:w-28 flex-shrink-0">
                            Ketersediaan:
                        </span>
                        <span className="text-gray-600 ml-2 break-words">
                            {product.available}
                        </span>
                    </div>
                </div>

                <div className="card-actions justify-center mt-auto">
                    <button
                        onClick={() => onShowDetail(product)}
                        className="btn btn-sm md:btn-md bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white border-none px-4 md:px-6"
                    >
                        Lihat Detail
                    </button>
                </div>
            </div>
        </div>
    );
}
