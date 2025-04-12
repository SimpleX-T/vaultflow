import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-8 fixed top-0 left-0 z-10 bg-[#0B0121]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center w-32">
            <img src="/logo.svg" alt="Product Logo" className="h-8 mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
          >
            Features
          </Link>
          <Link
            to="/features"
            className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
          >
            About Us
          </Link>

          <Link
            to="/blog"
            className="text-[#0B081C] hover:bg-[#ECECEC80] duration-300 transition-colors border border-[#ECECEC] bg-[#ECECEC] rounded-full px-5 py-2 text-center block"
          >
            Download the App
          </Link>
          <Link
            to="/"
            className="hidden border border-[#ECECEC] text-white px-4 py-2 rounded-full lg:block font-medium transition-colors text-center"
          >
            Talk to an Expert
          </Link>
        </nav>

        <button
          className="md:hidden text-[#ECECEC] cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0121] backdrop-blur-sm absolute top-16 left-0 w-full p-4">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
            >
              Features
            </Link>
            <Link
              to="/features"
              className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-[#ECECEC] hover:text-[#ECECEC80] transition-colors duration-300 text-md"
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className="text-[#0B081C] hover:bg-[#ECECEC80] duration-300 transition-colors border border-[#ECECEC] bg-[#ECECEC] rounded-full px-5 py-2 text-center block"
            >
              Download the App
            </Link>
            <Link
              to="/"
              className="border border-[#ECECEC] text-white px-4 py-2 rounded-full block font-medium transition-colors text-center"
            >
              Talk to an Expert
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
