import Layout from "../layout/layout-main.jsx";
import heroImage from "../assets/hero-image.svg";
import heroImage2 from "../assets/hero-image-2.svg";
import { useEffect, useState } from "react";
import UmkmCard from "../component/component-umkm-card.jsx";
import Button from "../component/component-button.jsx";
import CategoryBar from "../component/component-category-bar.jsx";
import dataUmkm from "../data/data-umkm.js";

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
  const [displayedData, setDisplayed] = useState(dataUmkm.slice(0, 6));

  const filterDataUmkm = (active) => {
    let filteredData;

    if (active === "Semua") {
      filteredData = dataUmkm.slice(0, 6);
    } else {
      filteredData = dataUmkm.filter((data) => data.kategori === active);

      filteredData = filteredData.slice(0, 6);
    }

    setDisplayed(filteredData);
  };

  useEffect(() => {
    filterDataUmkm(active);
  },[active]);

  const handleCategoryChange = (categoryName) => {
    setActive(categoryName);
  };

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
        className="bg-white shadow-[inset_0_1px_3px_#C1D0E1] rounded-t-[50px] mt-10 px-6 lg:px-[100px] py-25"
      >
        <CategoryBar
          active={active}
          onChange={handleCategoryChange}
          categories={kategori}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6.5 justify-items-center mt-10">
          {displayedData.map((umkm) => (
            <UmkmCard
              key={umkm.id}
              id={umkm.id}
              namaUmkm={umkm.nama}
              deskripsi={umkm.deskripsi}
              fotoUmkm={umkm.gambar[0]}
              location={umkm.alamat}
              noHp={umkm.phone}
              kategori={umkm.kategori}
            />
          ))}

          {displayedData.length === 0 && (
            <p className="cols-span-full text-gray-500">
              Tidak UMKM yang ditemukan di dalam kategori {active}
            </p>
          )}
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

      <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-[100px] py-10 lg:py-10 bg-[#ffffff] rounded-b-[20px] ">
        <div className="w-full lg:w-1/2 lg:text-left mb-10 lg:mb-0">
          <h1 className="font-display text-black text-3xl lg:text-[42px] font-bold leading-tight">
            Tingkatkan Jangkauan <br className="hidden lg:block" />
            Bisnismu Sekarang
          </h1>
          <p className="font-display text-[#696969] text-[15px] lg:text-[16px] leading-relaxed mt-4">
            Gabung bersama ratusan UMKM lainnya dan jadikan bisnismu lebih mudah
            ditemukan oleh pelanggan di sekitarmu.
          </p>
          <Button
            text={"Daftarkan Usaha Anda"}
            marginTop={"mt-6"}
            href={"/profile-umkm"}
          />
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
