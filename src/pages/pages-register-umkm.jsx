import { Link } from "react-router-dom";
import Layout from "../layout/layout-main.jsx";
import TextField from "../component/component-textfield.jsx";
import Button from "../component/component-button.jsx";
import { FaArrowLeft } from "react-icons/fa";

export default function PageRegisterUmkm() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto mt-[8vh] px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <FaArrowLeft size={14} />
          <Link to="/" className="font-medium hover:text-gray-800 transition">
            Kembali Ke Beranda
          </Link>
        </div>
        <section className="bg-white rounded-[35px] border border-gray-200 shadow-sm p-6 sm:p-8">
          <form className="flex flex-col gap-8 w-full">
              <h2 className="text-lg font-semibold text-gray-800 mb-[-20px]">
                Buat Akun
              </h2>
              <hr className="border-t border-[#C1D0E1]" />
              <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-md hover:border-[#2563EB]">
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
              </div>
            
            
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Daftarkan Usaha
              </h2>
              <hr className="border-t border-[#C1D0E1] my-3 mt-[-20px] mb-[-1px]" />
              <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-md hover:border-[#2563EB]">
                <TextField
                  label="Nama Usaha"
                  placeholder="Masukkan Nama Usaha Anda"
                  name="namaUsaha"
                />
                <TextField
                  label="Kategori Bisnis"
                  placeholder="Masukkan Kategori Bisnis Anda"
                  name="kategori"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                  />
                  <TextField
                    label="Nomor Telephone"
                    placeholder="+62-xxx-xxx"
                    name="phone"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Alamat
                  </label>
                  <textarea
                    name="alamat"
                    placeholder="Masukkan Alamat Usaha Anda"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] placeholder-gray-400 min-h-[80px]"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Deskripsi
                  </label>
                  <textarea
                    name="deskripsi"
                    placeholder="Masukkan Deskripsi Singkat Usaha Anda"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] placeholder-gray-400 min-h-[80px]"
                  />
                </div>
              </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-0 w-full mt-4 sm:mt-8">
              <Button
                text="Daftar"
                variant="filled"
                className="w-full sm:w-1/2 !rounded-full sm:!rounded-l-full sm:!rounded-r-none !py-3 !text-base"
              />
              <Button
                text="Cancel"
                variant="outline"
                className="w-full sm:w-1/2 !rounded-full sm:!rounded-r-full sm:!rounded-l-none !py-3 !text-base"
              />
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
