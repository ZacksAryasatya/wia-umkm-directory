import { FaArrowLeft } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Layout from "../layout/layout-main";
import ProductCard from "../component/component-product-card";
import Button from "../component/component-button";
import { useParams } from "react-router-dom";
import dataUmkm from "../data/data-umkm";

function DetailUmkm() {
  const { id } = useParams();
  const umkm = dataUmkm.filter((umkm) => umkm.id === parseInt(id))[0];

  if (!umkm) {
    return (
      <Layout>
        <div className="p-10 text-center text-gray-500">UMKM Tidak Ditemukan</div>
      </Layout>
    )
  };

  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white shadow-md rounded-[30px] overflow-hidden">
              <img
                src={umkm.gambar}
                alt="Foto UMKM"
                className="w-full h-52 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="p-6 sm:p-8">
                <button className="border border-[#C1D0E1] rounded-full px-4 py-1 text-sm font-medium mb-4 hover:bg-gray-50 transition">
                  {umkm.kategori}
                </button>

                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  {umkm.nama}
                </h1>

                <hr className="border-gray-200 my-4" />

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Tentang Bisnis Ini
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                  {umkm.deskripsi}
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-4 text-gray-800 text-center lg:text-left">
                Produk dan Layanan
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {
                  umkm.product && umkm.product.length !== 0 ? (
                    // <ProductCard fotoProduct={umkm.product[0].gambar} namaProduct={umkm.product[0].namaProduct} deskripsiProduct={umkm.product[0].deskripsi} hargaProduct={umkm.product[0].harga} />
                    umkm.product.map((umkm) => (
                      <ProductCard fotoProduct={umkm.gambar} namaProduct={umkm.namaProduct} deskripsiProduct={umkm.deskripsi} hargaProduct={umkm.harga}/>
                    ))
                  ) : (
                    [...Array(6)].map((_, i) => <ProductCard key={i} />)
                  )
                }
              </div>
            </div>
          </div>
          <aside className="space-y-6">
            <div className="bg-white shadow-md rounded-[30px] p-6 sm:p-8">
              <h1 className="text-lg font-semibold mb-4 text-gray-800">
                Business Information
              </h1>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="flex items-start gap-3">
                    <FiMapPin
                      className="text-blue-600 mt-1 shrink-0"
                      size={16}
                    />
                    <div>
                      <p className="font-medium text-gray-700">Location</p>
                      <p className="text-gray-500">{umkm.alamat}</p>
                    </div>
                  </div>
                  <hr className="border-t border-[#C1D0E1] my-3" />
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FiPhone
                      className="text-blue-600 mt-1 shrink-0"
                      size={16}
                    />
                    <div>
                      <p className="font-medium text-gray-700">Phone</p>
                      <p className="text-gray-500">{umkm.phone}</p>
                    </div>
                  </div>
                  <hr className="border-t border-[#C1D0E1] my-3" />
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FiMail className="text-blue-600 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <p className="text-gray-500">{umkm.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                text="Contact Business"
                variant="filled"
                marginTop="mt-6"
                className="w-[100%] sm:w-[100%] !py-3 !text-base"
                href={umkm.redirectPhone}
              />
            </div>
            <div className="bg-white shadow-md rounded-[30px] p-6 sm:p-8">
              <h1 className="text-lg font-semibold mb-4 text-gray-800">
                Map Location
              </h1>
              <iframe
                src={umkm.embed}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map Location"
                className="rounded-[15px]"
              ></iframe>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

export default DetailUmkm;
