import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function UmkmCard() {
  return (
    <div className="bg-white rounded-[30px] shadow-md overflow-hidden w-full max-w-sm mx-auto border border-gray-100 hover:scale-105 hover:-translate-y-2 hover:shadow-xl duration-500">
      <img
        src="https://tse4.mm.bing.net/th/id/OIP.F4GKxk78V3gsH5aDQfAxTQHaEQ?pid=Api&P=0&h=180"
        alt="Foto UMKM"
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold mb-2">Nama UMKM</h2>

        <button className="border border-[#C1D0E1] rounded-full px-4 py-1 text-sm font-semibold mb-3 hover:bg-gray-50 transition">
          Kategori
        </button>

        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 border-t border-gray-200 pt-3">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Besito, Kudus</span>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-green-500" />
            <span>+62 XXX-XXX-XX</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UmkmCard;