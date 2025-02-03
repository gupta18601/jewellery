import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Link href="/" passHref>
          <Image
            src="/logo.png"
            alt="Elegant jewellery piece"
            height={300}
            width={100}
            style={{ height: "auto", width: "auto" }}
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/about-us"
            className="text-gray-600 text-lg hover:text-gray-800 hover:underline hover:text-blue-400"
          >
            About Us
          </Link>
          <Link
            href="#products"
            className="text-gray-600 text-lg hover:text-gray-800 hover:underline hover:text-blue-400"
          >
            Collections
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-600 text-lg hover:text-gray-800 hover:underline hover:text-blue-400"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
