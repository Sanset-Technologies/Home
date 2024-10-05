import auth0 from "../../../assets/logos/auth0.svg";
import SectionWrapper from "../../SectionWrapper";

const logos = [
  {
    src: auth0,
    alt: "AltWalk",
  },
];

const LogoGrid = () => (
  <SectionWrapper>
    <div className="custom-screen py-10">
      <h2 className="text-center text-sm font-semibold text-gray-800">
        Trusted by the
      </h2>
      <div className="mt-8 flex justify-center">
        <ul className="flex items-center justify-center">
          {logos.map((item, idx) => (
            <li key={idx}>
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SectionWrapper>
);

export default LogoGrid;
