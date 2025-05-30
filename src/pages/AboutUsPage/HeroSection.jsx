const heroImageSrc = "/images/hero/hero-about.jpg";
import { Building } from "lucide-react"; 
export function HeroSection() {
    return (
        <div
            className="hero min-h-[55vh] md:min-h-[65vh]"
            style={{
                backgroundImage: `url(${heroImageSrc})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
            }}
        >
            <div className="hero-overlay bg-gradient-to-t from-black/75 to-black/30"></div>
            <div className="hero-content text-center text-neutral-content py-12 md:py-0">
                <div className="max-w-2xl">
                    <p
                        data-aos="fade-down"
                        data-aos-delay="200"
                        className="inline-flex items-center text-sm sm:text-base bg-amber-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold mb-4 tracking-wide shadow"
                    >
                        <Building className="w-5 h-5 mr-2" /> Profil Perusahaan
                    </p>
                    <h1
                        data-aos="fade-down"
                        className="mb-5 text-4xl sm:text-5xl md:text-6xl font-bold text-white !leading-tight"
                    >
                        Tentang{" "}
                        <span className="text-amber-300">Sumatra Sutra</span>
                    </h1>
                    <p
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="mb-5 text-md sm:text-lg text-amber-100/90 leading-relaxed"
                    >
                        Mengungkap kisah, melestarikan tradisi, dan
                        mempersembahkan keindahan abadi Songket Palembang untuk
                        dunia.
                    </p>
                </div>
            </div>
        </div>
    );
}
