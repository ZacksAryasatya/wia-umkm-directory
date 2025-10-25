import Layout from "../layout/layout-main.jsx";
import heroImage from "../assets/hero-image.svg";
import heroImage2 from "../assets/hero-image-2.svg";
import { useState } from "react";
import UmkmCard from "../component/component-umkm-card.jsx";
import Button from "../component/component-button.jsx";
import CategoryBar from "../component/component-category-bar.jsx";

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
          <Button
            marginTop={"mt-6"}
            text={"Lihat UMKM Sekitar"}
            variant="filled"
            href={"#umkmSection"}
          />
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
        <CategoryBar
          active={active}
          onChange={(item) => {
            setActive(item);
          }}
          categories={kategori}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center mt-10">
          {[...Array(6)].map((_, index) => (
            <UmkmCard key={index} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button
            marginTop={"mt-6"}
            text={"Lihat Semua"}
            variant="rounded"
            href={"/daftar-umkm"}
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[100px] py-10 lg:py-10 bg-[#F8FAFC] rounded-b-[20px] mt-10">
        <div className="w-full lg:w-1/2 lg:text-left mb-10 lg:mb-0">
          <h1 className="font-display text-black text-3xl lg:text-[42px] font-bold leading-tight">
            Tingkatkan Jangkauan <br className="hidden lg:block" />
            Bisnismu Sekarang
          </h1>
          <p className="font-display text-[#696969] text-[15px] lg:text-[16px] leading-relaxed mt-4">
            Gabung bersama ratusan UMKM lainnya dan jadikan bisnismu lebih mudah
            ditemukan oleh pelanggan di sekitarmu.
          </p>
          <Button text={"Daftarkan Usaha Anda"} marginTop={"mt-6"} />
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
