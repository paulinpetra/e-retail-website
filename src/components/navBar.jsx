import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li className="text-white">
          <Link href="/">Home</Link>
        </li>
        <li className="text-white">
          <Link href="/cart-page">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
