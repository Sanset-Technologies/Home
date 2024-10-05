import PropTypes from "prop-types"; // Add this import

const GradientWrapper = ({
  children,
  wrapperClassName,
  className,
  ...props
}) => (
  <div {...props} className={`relative py-28 ${className || ""}`}>
    <div
      className={`absolute top-12 m-auto h-[250px] max-w-3xl blur-[130px] ${wrapperClassName || ""}`}
      style={{
        background:
          "linear-gradient(108.49deg, rgba(152, 103, 240, 0.24) 23.1%, rgba(237, 78, 80, 0.06) 62.53%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

// Add prop types validation
GradientWrapper.propTypes = {
  wrapperClassName: PropTypes.string, // Add this line
  children: PropTypes.node.isRequired, // Validate children prop
  className: PropTypes.string, // Optional: validate className if used
};

export default GradientWrapper;
