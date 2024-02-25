import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavbarLink({ pathName }) {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `nav-link hover:underline ${
            isActive ? "underline text-blue-600 font-bold" : "font-normal"
          }`
        }
        to={`${pathName}`}
      >
        {pathName == "/" ? "Home" : pathName}
      </NavLink>
    </>
  );
}

NavbarLink.propTypes = {
  pathName: PropTypes.string,
};
