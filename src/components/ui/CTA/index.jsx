import SectionWrapper from "../../SectionWrapper";
import cta_image from "../../../assets/cta-img.svg";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="overflow-hidden">
      <div className="custom-screen flex flex-col-reverse justify-between gap-x-12 md:flex-row md:items-center">
        <div className="mt-12 max-w-xl flex-none space-y-3 md:mt-0">
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            Empowering Your Digital Presence
          </h2>
          <p className="text-gray-600">
            At Sanset Technologies, we offer innovative web app solutions
            designed to enhance your online presence. Our straightforward,
            one-time fee structure allows your app to gain visibility and
            engagement, and we back it with a 100% satisfaction guarantee.
          </p>
        </div>
        <div className="w-full flex-none md:max-w-xl">
          <img
            src={cta_image}
            alt="chart"
            className="w-full rounded-lg border shadow-lg"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
