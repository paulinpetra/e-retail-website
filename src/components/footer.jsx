import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Changed FaSquareXTwitter to FaTwitter
import { FaFacebookSquare } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#12113a] shadow-md p-4 w-full text-white">
      <div className="mx-4 flex justify-between items-center">
        <div>
          <Image
            src="/logo-transparent.png"
            alt="Logo"
            width={60}
            height={60}
          />
        </div>

        <div className="flex justify-between">
          <Link href="https://www.instagram.com" target="_blank">
            <FaInstagram size={30} className="mr-4" />
          </Link>

          <Link href="https://twitter.com" target="_blank">
            <FaTwitter size={30} className="mr-4" />
          </Link>

          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookSquare size={30} />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center mb-2 text-xs text-gray-400">
        <span className="mr-4">© 2024 All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
