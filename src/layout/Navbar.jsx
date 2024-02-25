import { Link } from "react-router-dom";
import NavbarLink from "../components/NavbarLink";

export default function Navbar() {
  return (
    <div className="bg-gray-100 rounded-b-xl p-2 text-center font-bold mb-2 md:max-w-3xl mx-auto">
      <div>
        <Link to="/" className="font-extrabold text-3xl">
          Insurence <span className="text-blue-600">Rate</span>
        </Link>
        <p>Version 1.00 Stable Release</p>
      </div>

      {/* Navigation Link */}
      <nav className="flex justify-center text-gray-600 gap-2">
        <NavbarLink pathName="/" />
        <NavbarLink pathName="marine" />
        <NavbarLink pathName="fire" />
        <NavbarLink pathName="motor" />
      </nav>
    </div>
  );
}
