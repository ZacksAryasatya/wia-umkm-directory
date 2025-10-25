import { FiSearch } from "react-icons/fi";
import Layout from "../layout/layout-main.jsx";
import CategoryBar from "../component/component-category-bar.jsx";
import { useState } from "react";
import UmkmCard from "../component/component-umkm-card.jsx";
import { Link } from "react-router-dom";

function DaftarUmkm() {
  const [active, setActive] = useState("Semua");

  const kategori = [
    "Semua",
    "Kuliner",
    "Jasa & Layanan",
    "Fashion",
    "Kreatif & Digital",
    "Retail",
  ];

  return (
    <Layout>
      <section
        className="
          lg:mt-[20vh] mt-[15vh] px-6 py-10 lg:px-[100px] 
          flex flex-col items-center 
          w-full overflow-x-visible
        "
      >
        <div className="flex items-center w-full max-w-[850px] bg-[#F5F7FA] border border-[#E2E8F0] rounded-full px-5 py-3 shadow-sm mb-6">
          <FiSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Cari UMKM..."
            className="flex-1 bg-transparent outline-none px-3 text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="w-full">
          <CategoryBar
            active={active}
            onChange={(item) => setActive(item)}
            categories={kategori}
          />
        </div>
      </section>

      <section className="px-6 lg:px-[100px] py-10 mt-[-20px] mb-[20px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {[...Array(6)].map((_, index) => (
            <UmkmCard key={index} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default DaftarUmkm;
