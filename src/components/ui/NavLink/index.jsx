import PropTypes from "prop-types"; // Add this import

const NavLink = ({ children, href, ...props }) => (
  <a
    href={href}
    {...props}
    className={`rounded-full px-4 py-2.5 text-center duration-150 ${props?.className || ""}`}
  >
    {children}
  </a>
);

// Add prop types validation
NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired, // Add this line for href validation
  className: PropTypes.string, // Add this line for prop validation
};

export default NavLink;
