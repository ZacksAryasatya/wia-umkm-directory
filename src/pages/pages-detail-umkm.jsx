import { FaArrowLeft } from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import Layout from "../layout/layout-main";
import ProductCard from "../component/component-product-card";
import Button from "../component/component-button";

function DetailUmkm() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 mt-[10vh]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white shadow-md rounded-[30px] overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                alt="Foto UMKM"
                className="w-full h-52 sm:h-72 md:h-80 lg:h-96 object-cover"
              />
              <div className="p-6 sm:p-8">
                <button className="border border-[#C1D0E1] rounded-full px-4 py-1 text-sm font-medium mb-4 hover:bg-gray-50 transition">
                  Kategori
                </button>

                <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                  Nama UMKM
                </h1>

                <hr className="border-gray-200 my-4" />

                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Tentang Bisnis Ini
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique doloremque totam dolore error quis. Eum repellat
                  eveniet id sit? Iusto earum error aut illo omnis est quisquam
                  dolor laudantium id!
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-4 text-gray-800 text-center lg:text-left">
                Produk dan Layanan
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                {[...Array(6)].map((_, i) => (
                  <ProductCard key={i} />
                ))}
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
                      <p className="text-gray-500">Rembang, Kudus</p>
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
                      <p className="text-gray-500">+62 XXX-XXX-XX</p>
                    </div>
                  </div>
                  <hr className="border-t border-[#C1D0E1] my-3" />
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <FiMail className="text-blue-600 mt-1 shrink-0" size={16} />
                    <div>
                      <p className="font-medium text-gray-700">Email</p>
                      <p className="text-gray-500">budi@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <Button
                text="Contact Business"
                variant="filled"
                marginTop="mt-6"
                className="w-full sm:w-auto"
              />
            </div>
            <div className="bg-white shadow-md rounded-[30px] p-6 sm:p-8">
              <h1 className="text-lg font-semibold mb-4 text-gray-800">
                Map Location
              </h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d355.3279775420126!2d110.8418523!3d-6.7536724!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70db0ae9cff9db%3A0x60b915d5b6ca6a94!2sRumah%20Makan%20Masakan%20Padang%20%22Putri%20Minang%22!5e1!3m2!1sid!2sid!4v1761359935243!5m2!1sid!2sid"
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
