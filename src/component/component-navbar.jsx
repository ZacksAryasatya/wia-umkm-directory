import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-[inset_0_-0.5px_3px_#C1D0E1] lg:py-5 lg:px-[100px] p-5 lg:flex lg:justify-between lg:items-center fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-[#1B54D0] font-display cursor-pointer">
          <a href="/">GrowUMKM</a>
        </span>

        <span className="text-3xl cursor-pointer lg:hidden block t">
          {isMenuOpen ? (
            <AiOutlineClose name="close" onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu name="menu" onClick={toggleMenu} />
          )}
        </span>
      </div>

      <ul
        className={`
          lg:flex lg:items-center lg:z-auto lg:static lg:w-auto lg:opacity-100
          z-10 absolute bg-white w-full left-0 transition ease-in-out duration-250 
          lg:shadow-none
          ${
            isMenuOpen
              ? "top-15 opacity-100 shadow-md"
              : "top-[-490px] opacity-0"
          } 
        `}
      >
        <li className="lg:mx-5 my-3 lg:my-0 ml-6">
          <a
            href="/"
            className={
              isActive("/")
                ? "font-display text-[#1B54D0] hover:text-[#012167] font-bold"
                : "font-display text-[#486284] hover:text-[#012167] hover:font-bold duration-300"
            }
            onClick={toggleMenu}
          >
            Home
          </a>
        </li>
        <li className="lg:mx-5 my-3 lg:my-0 ml-6">
          <a
            href="/daftar-umkm"
            className={
              isActive("/daftar-umkm")
                ? "font-display text-[#1B54D0] hover:text-[#012167] font-bold"
                : "font-display text-[#486284] hover:text-[#012167] hover:font-bold duration-300"
            }
            onClick={toggleMenu}
          >
            Daftar UMKM
          </a>
        </li>
        <li className="lg:mx-5 my-3 lg:my-0 ml-6">
          <a
            href="/profile-umkm"
            className={
              isActive("/profile-umkm")
                ? "font-display text-[#1B54D0] hover:text-[#012167] font-bold"
                : "font-display text-[#486284] hover:text-[#012167] hover:font-bold duration-300"
            }
            onClick={toggleMenu}
          >
            Profile
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
