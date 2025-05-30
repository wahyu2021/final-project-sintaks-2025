export function HeroSection() {
    const heroImageSrc = "/images/hero/hero-home.jpg";

    return (
        <div
            className="hero min-h-[55vh] md:min-h-[65vh]"
            style={{
                backgroundImage: `url(${heroImageSrc})`,
            }}
        >
            <div className="hero-overlay"></div>

            <div className="hero-content relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left max-w-screen-xl w-full md:-mt-16">
                <div className="lg:w-3/5 xl:w-1/2">
                    <p
                        className="inline-flex items-center bg-black/30 backdrop-blur-sm text-amber-50 px-3 py-1.5 rounded-md text-sm font-medium mb-4 shadow"
                        data-aos="fade-down" // Animasi untuk badge
                        data-aos-delay="200"
                        data-aos-once="false" // Override global setting to allow repeat for this element if needed
                    >
                        <span
                            className="mr-2 text-amber-300"
                            role="img"
                            aria-label="kain"
                        >
                            ❖
                        </span>
                        Mahakarya Tenun Nusantara
                    </p>
                    <h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white !leading-tight mb-4"
                        data-aos="fade-right" // Animasi untuk judul utama
                        data-aos-delay="400"
                        data-aos-once="false" // Override global setting
                    >
                        KOLEKSI SONGKET{" "}
                        <span className="text-amber-300">SUMATRA SUTRA</span>
                    </h1>
                    <p
                        className="mb-6 text-amber-100 text-base md:text-lg leading-relaxed"
                        data-aos="fade-left" // Animasi untuk deskripsi
                        data-aos-delay="600"
                        data-aos-once="false" // Override global setting
                    >
                        Setiap helai songket adalah perwujudan keindahan,
                        tradisi, dan keahlian tangan yang diwariskan
                        turun-temurun. Temukan songket impian Anda.
                    </p>
                </div>
            </div>
        </div>
    );
}