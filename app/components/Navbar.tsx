import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around sticky top-0 z-50 mx-4 ">
      {/* Logo */}
      <div className="  text-purple-500">
        <Link href="#HeroSection">
        <Image 
          src="/logo.jpg"
          alt="Logo"
          width={150}
          height={150}
        />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6">
        <li>
          <Link href="#HeroSection" className="text-gray-300 hover:text-white ">
            About
          </Link>
        </li>
        <li>
          <Link href="#FeaturedProjects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#ContactSection" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
