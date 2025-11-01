import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import Layout from "../layout/layout-main.jsx";
import TextField from "../component/component-textfield.jsx";
import Button from "../component/component-button.jsx";
import CardProductAdmin from "../component/component-card-product-admin.jsx";
import CardInfoUmkm from "../component/component-admin-card.jsx";
import ComponentAnalisisUmkm from "../component/component-analisis-umkm.jsx";
import TabSelecting from "../component/component-tab-selecting.jsx";
import { motion, AnimatePresence } from "framer-motion";

export default function PageProfileUmkm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("produk");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const BackLink = () => (
    <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
      <FaArrowLeft size={16} />
      <Link to="/" className="font-medium hover:text-gray-800 transition">
        Kembali Ke Beranda
      </Link>
    </div>
  );

  const renderTabContent = () => (
    <AnimatePresence mode="wait">
      {activeTab === "produk" ? (
        <motion.div
          key="produk"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
          className="space-y-4 max-h-[70vh] overflow-y-auto pr-2 custom-scroll"
        >
          <div className="flex justify-between items-center mb-4 flex-wrap gap-3">
            <h2 className="text-sm sm:text-base font-medium text-gray-700">
              Daftar Produk
            </h2>
            <Button
              variant="outline"
              className="!py-1 !px-3 text-sm flex items-center gap-2 shrink-0"
            >
              <FaPlus />
              Tambah Produk
            </Button>
          </div>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CardProductAdmin
                nama="Kopi Susu Matcha"
                harga="Rp 20.000"
                deskripsi="Minuman campuran yang menggabungkan kopi, susu, dan bubuk teh hijau matcha."
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          key="analisis"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4 }}
        >
          <ComponentAnalisisUmkm />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        {!isLoggedIn ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
            className="max-w-md sm:max-w-3xl mx-auto mt-8 sm:mt-[8vh] px-4 sm:px-6 lg:px-8 py-8 sm:py-10"
          >
            <BackLink />
            <section className="bg-white rounded-[40px] border border-gray-200 shadow-sm p-5 sm:p-8">
              <form
                onSubmit={handleLogin}
                className="flex flex-col gap-6 sm:gap-8 w-full"
              >
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-[-16px] sm:mb-[-20px]">
                  Masuk ke Akun Anda
                </h2>
                <hr className="border-t border-[#C1D0E1]" />
                <div className="border border-gray-200 rounded-[30px] p-4 sm:p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-md hover:border-[#2563EB]">
                  <TextField
                    label="Username"
                    placeholder="Masukkan Username Anda"
                    name="username"
                  />
                  <TextField
                    label="Password"
                    type="password"
                    placeholder="Masukkan Password Anda"
                    name="password"
                  />
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-600 gap-2 sm:gap-0 mt-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 transition-all duration-200"
                      />
                      <span className="group-hover:text-[#2563EB] transition-colors duration-200">
                        Remember me
                      </span>
                    </label>
                    <Link
                      to="#"
                      className="relative text-[#2563EB] font-medium before:absolute before:w-0 before:h-[1.5px] before:bottom-0 before:left-0 before:bg-[#2563EB] before:transition-all before:duration-300 hover:before:w-full"
                    >
                      Lupa Password?
                    </Link>
                  </div>
                  <Button text="Login" variant="filled" className="mt-2" />
                  <p className="text-center text-sm text-gray-600 mt-2">
                    Belum Punya Akun?{" "}
                    <Link
                      to="/register-page"
                      className="text-[#2563EB] font-medium relative before:absolute before:w-0 before:h-[1.5px] before:bottom-0 before:left-0 before:bg-[#2563EB] before:transition-all before:duration-300 hover:before:w-full"
                    >
                      Daftar Sekarang!
                    </Link>
                  </p>
                </div>
              </form>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-grow w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-[6vh] sm:mt-[9vh]"
          >
            <BackLink />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="lg:col-span-1 order-1">
                <CardInfoUmkm
                  kategori="Makanan"
                  namaUmkm="Nama UMKM"
                  owner="Bahlil Tanoesoedibjo"
                  lokasi="Rembang, Jawa Tengah"
                  phone="+62 812-3456-7890"
                  email="bahlil@gmail.com"
                />
              </div>
              <div className="lg:col-span-2 order-2 flex flex-col mt-4 lg:mt-0">
                <div className="bg-white border border-gray-200 rounded-[20px] shadow-sm p-4 sm:p-6 min-h-[70vh] flex flex-col">
                  <TabSelecting
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                  <div className="flex-grow overflow-auto mt-2">
                    {renderTabContent()}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
