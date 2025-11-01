export default function TextField({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-gray-700 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] placeholder-gray-400"
      />
    </div>
  );
}
