import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Support", path: "/support" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-10h2v2h-2v-2zm0 4h2v4h-2v-4z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">
              MedDoc <span className="text-teal-500">AI</span>
            </span>
          </Link>

          {/* Centered Links (Desktop) */}
          <div className="hidden lg:flex gap-8 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-600 hover:text-teal-500 transition">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Buttons (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-teal-500 transition">
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block py-2 text-gray-700 border-b"
              onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link
            to="/login"
            className="block py-2 text-gray-700 border-b"
            onClick={() => setMobileMenuOpen(false)}>
            Log In
          </Link>
          <Link
            to="/signup"
            className="block w-full text-center py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600"
            onClick={() => setMobileMenuOpen(false)}>
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}
