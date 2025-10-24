function Button({
  text,
  variant = "filled",
  onClick,
  className = "",
  marginTop,
}) {
  const baseStyle = `
    text-[15px] font-semibold py-3 px-8 rounded-full transition-all duration-300 cursor-pointer ${marginTop}
  `;

  const variantStyle =
    variant === "filled"
      ? "bg-[#2563EB] hover:bg-[#1E4FC3] text-white"
      : "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
