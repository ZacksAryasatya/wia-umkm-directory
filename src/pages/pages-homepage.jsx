import Layout from "../layout/layout-main.jsx";
import heroImage from "../assets/hero-image.svg";
import heroImage2 from "../assets/hero-image-2.svg";
import { useState } from "react";
import UmkmCard from "../component/component-umkm-card.jsx";

function HomePage() {
  const kategori = [
    "Semua",
    "Kuliner",
    "Jasa & Layanan",
    "Fashion",
    "Kreatif & Digital",
    "Retail",
  ];
  const [active, setActive] = useState("Semua");

  return (
    <Layout>
      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[100px] py-14 lg:py-24 mt-[10vh] gap-10">
        <div className="w-full lg:w-1/2 lg:text-left">
          <h1 className="font-display text-black text-3xl lg:text-[46px] font-bold leading-tight">
            Temukan & Dukung <br className="hidden lg:block" />
            Bisnis Lokal Dengan Mudah
          </h1>
          <p className="font-display text-[#696969] text-[15px] lg:text-[16px] leading-relaxed mt-4">
            Jelajahi berbagai UMKM di sekitarmu, temukan produk dan layanan
            unik, serta bantu mereka tumbuh lebih besar. Semua dimulai dari satu
            klik.
          </p>
          <a href="#umkmSection">
            <button className="bg-[#2563EB] hover:bg-[#1E4FC3] text-white text-[15px] font-semibold py-3 px-8 rounded-full mt-6 transition-all">
              Lihat UMKM Sekitar
            </button>
          </a>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="UMKM Directory"
            className="w-[100%] lg:w-[480px] h-auto"
          />
        </div>
      </section>

      <section
        id="umkmSection"
        className="bg-white shadow-inner rounded-t-[35px] mt-10 px-6 lg:px-[100px] py-14"
      >
        <div className="flex flex-col items-center">
          <div className="flex flex-row justify-start lg:justify-center gap-3 overflow-x-auto no-scrollbar w-full pb-4">
            {kategori.map((item) => {
              const isActive = item === active;
              const buttonStyle = `flex-shrink-0 py-2 px-6 rounded-full font-semibold whitespace-nowrap transition duration-500 border border-[#C1D0E1] ${
                isActive ? "bg-[#EFF2F6] text-black" : "text-black"
              }`;
              return (
                <button
                  key={item}
                  name={item}
                  className={buttonStyle}
                  onClick={() => setActive(item)}
                >
                  {" "}
                  {item}{" "}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
          {[...Array(6)].map((_, index) => (
            <UmkmCard key={index} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <button className="border border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white text-[15px] font-semibold py-3 px-8 rounded-full transition-all">
            Lihat Semua
          </button>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[100px] py-14 lg:py-24 bg-[#F8FAFC] rounded-b-[20px] mt-10">
        <div className="w-full lg:w-1/2 lg:text-left mb-10 lg:mb-0">
          <h1 className="font-display text-black text-3xl lg:text-[42px] font-bold leading-tight">
            Tingkatkan Jangkauan <br className="hidden lg:block" />
            Bisnismu Sekarang
          </h1>
          <p className="font-display text-[#696969] text-[15px] lg:text-[16px] leading-relaxed mt-4">
            Gabung bersama ratusan UMKM lainnya dan jadikan bisnismu lebih mudah
            ditemukan oleh pelanggan di sekitarmu.
          </p>
          <button className="bg-[#2563EB] hover:bg-[#1E4FC3] text-white text-[15px] font-semibold py-3 px-8 rounded-full mt-6 transition-all">
            Daftarkan Bisnismu
          </button>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage2}
            alt="Daftarkan UMKM"
            className="w-[70%] lg:w-[420px] h-auto"
          />
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
