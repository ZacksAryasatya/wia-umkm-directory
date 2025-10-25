function ProductCard({fotoProduct, namaProduct, hargaProduct, deskripsiProduct}) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] lg:w-[250px] w-[1000px] mb-5 max-w-xs shadow-sm overflow-hidden hover:scale-100 hover:-translate-y-1 hover:shadow-xl duration-500 cursor-pointer">
      <img
        src={fotoProduct || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="}
        alt="product umkm"
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h2 className="text-[16px] font-semibold text-gray-900 mb-1">
          {namaProduct || "Nama Product"}
        </h2>
        <h3 className="text-[15px] font-medium text-[#2563EB] mb-2">
          {hargaProduct || "Rp. xx.xxx"}
        </h3>
        <p className="text-[13px] text-gray-500 leading-snug">
          {deskripsiProduct || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
