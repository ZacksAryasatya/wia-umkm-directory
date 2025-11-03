import { FiSearch } from "react-icons/fi";
import Layout from "../layout/layout-main.jsx";
import CategoryBar from "../component/component-category-bar.jsx";
import { useEffect, useState } from "react";
import UmkmCard from "../component/component-umkm-card.jsx";
import dataUmkm from "../data/data-umkm.js";

function DaftarUmkm() {
  const [active, setActive] = useState("Semua");
  const [query, setQuery] = useState("");
  const [displayedData, setDisplayed] = useState(dataUmkm);

  const kategori = [
    "Semua",
    "Kuliner",
    "Jasa & Layanan",
    "Fashion",
    "Kreatif & Digital",
    "Retail",
  ];

  const filterDataUmkm = (category, searchQuery) => {
    const lowerQuery = searchQuery.toLowerCase().trim();

    const filtered = dataUmkm.filter((item) => {
      const matchCategory =
        category === "Semua" || item.kategori === category;
      const matchName =
        lowerQuery === "" || item.nama.toLowerCase().includes(lowerQuery);
      return matchCategory && matchName;
    });

    setDisplayed(filtered);
  };

  const handleCategoryChange = (categoryName) => {
    setActive(categoryName);
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    filterDataUmkm(active, query);
  }, [active, query]);

  return (
    <Layout>
      <section
        className="
          mt-[15vh] sm:mt-[12vh] lg:mt-[15vh]
          px-4 sm:px-8 lg:px-[100px]
          py-8 sm:py-10
          flex flex-col items-center
          w-full overflow-x-visible
        "
      >
        <div
          className="
            flex items-center w-full
            max-w-[600px] sm:max-w-[750px] lg:max-w-[950px]
            bg-[#F5F7FA] border border-[#E2E8F0]
            rounded-full px-4 sm:px-6 py-2.5 sm:py-3
            shadow-sm mb-6
          "
        >
          <FiSearch className="text-gray-400 text-lg sm:text-xl" />
          <input
            type="text"
            placeholder="Cari UMKM..."
            value={query}
            onChange={handleSearchChange}
            className="
              flex-1 bg-transparent outline-none
              px-2 sm:px-3
              text-gray-700 placeholder-gray-400 text-sm sm:text-base
            "
          />
        </div>

        <div className="w-full max-w-[950px]">
          <CategoryBar
            active={active}
            onChange={handleCategoryChange}
            categories={kategori}
          />
        </div>
      </section>

      <section
        className="
          px-4 sm:px-8 lg:px-[100px]
          py-10 mt-[-40px] sm:mt-[-20px] mb-10
        "
      >
        <div
          className="
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-6 sm:gap-8 lg:gap-10
            justify-items-center
          "
        >
          {displayedData.length > 0 ? (
            displayedData.map((umkm) => (
              <UmkmCard
                key={umkm.id}
                id={umkm.id}
                fotoUmkm={umkm.gambar[0]}
                namaUmkm={umkm.nama}
                kategori={umkm.kategori}
                deskripsi={umkm.deskripsi}
                location={umkm.alamat}
                noHp={umkm.phone}
              />
            ))
          ) : (
            <p className="col-span-full text-gray-500">
              UMKM Tidak Ditemukan
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default DaftarUmkm;
