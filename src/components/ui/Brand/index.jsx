const Brand = ({ ...props }) => (
  <div className="flex items-center gap-4">
    <img
      src="/logo.svg"
      alt="Sanset Technologies"
      {...props}
      width={24}
      height={48}
    />
    <span className="text-lg font-bold">Sanset Technologies</span>
  </div>
);
export default Brand;
