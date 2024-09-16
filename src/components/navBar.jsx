import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { FiSearch, FiUser, FiHeart } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-[#12113a] shadow-md p-4 w-full">
      <div className="mx-4 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/logo-transparent.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div>
          <ul className="flex gap-8">
            <FiSearch style={iconStyles} />
            <FiUser style={iconStyles} />
            <FiHeart style={iconStyles} />
            <li className="text-white">
              <Link href="/cart-page">
                <FaShoppingCart color="White" size={24} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
const iconStyles = {
  fontSize: "1.5rem",
  cursor: "pointer",
  color: "white",
};
