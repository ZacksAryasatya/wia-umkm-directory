import { FaArrowLeft, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Layout from "../layout/layout-main";
import { Link } from "react-router-dom";
import ProductCard from "../component/component-product-card";
import Button from "../component/component-button";

function DetailUmkm() {
  return (
    <Layout>
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 mt-[10vh]">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <FaArrowLeft size={14} />
          <Link
            to="/daftar-umkm"
            className="font-medium hover:text-gray-800 transition"
          >
            Kembali Ke Daftar UMKM
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
                alt="product umkm"
                className="w-full h-60 md:h-72 object-cover"
              />
              <div className="p-6">
                <button className="border border-[#C1D0E1] rounded-full px-4 py-1 text-sm font-semibold mb-3 hover:bg-gray-50 transition">
                  Kategori
                </button>
                <h1 className="text-2xl font-semibold mt-3 mb-2 text-gray-800">
                  Nama UMKM
                </h1>
                <hr className="border-gray-200 my-4" />
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                  Tentang Bisnis Ini
                </h2>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Similique doloremque totam dolore error quis. Eum repellat
                  eveniet id sit? Iusto earum error aut illo omnis est quisquam
                  dolor laudantium id!
                </p>
              </div>
            </div>

            {/* Produk dan Layanan */}
            <div>
              <h1 className="text-xl font-semibold mb-4 text-gray-800">
                Produk dan Layanan
              </h1>
              <div className="grid lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <ProductCard key={i} />
                ))}
              </div>
            </div>
          </div>

          {/* ==== RIGHT SIDEBAR ==== */}
          <div className="space-y-6">
            {/* Business Info Card */}
            <div className="bg-white shadow rounded-lg p-6">
              <h1 className="text-lg font-semibold mb-4 text-gray-800">
                Business Information
              </h1>

              <div className="space-y-4 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <FaLocationPin className="text-blue-600 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-gray-700">Location</p>
                    <p className="text-gray-500">Rembang, Kudus</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="text-blue-600 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-gray-700">Phone</p>
                    <p className="text-gray-500">+62 XXX-XXX-XX</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <FaEnvelope className="text-blue-600 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-gray-700">Email</p>
                    <p className="text-gray-500">budi@gmail.com</p>
                  </div>
                </div>
              </div>
              <Button
                text="Contact Business"
                variant="filled"
                marginTop={"mt-6"}
              />
            </div>

            {/* Map Card */}
            <div className="bg-white shadow rounded-lg p-6">
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
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default DetailUmkm;
