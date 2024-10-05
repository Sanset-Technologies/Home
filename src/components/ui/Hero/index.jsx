import GradientWrapper from "../../GradientWrapper";
import NavLink from "../NavLink";

const Hero = () => (
  <section>
    <GradientWrapper
      wrapperClassName="inset-0"
      className="custom-screen text-gray-600"
    >
      <div className="mx-auto mt-20 max-w-4xl space-y-5 text-center">
        <h1 className="mx-auto text-4xl font-extrabold text-gray-800 sm:text-6xl">
          Accelerate Your{" "}
          <span className=" bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent">
            Web App Development{" "}
          </span>
          Journey
        </h1>
        <p className="mx-auto max-w-xl">
          Unlock the ultimate potential of your web app with our cutting-edge
          solutions. Join today!
        </p>
        <div className="flex items-center justify-center gap-x-3 text-sm font-medium">
          <NavLink
            href="#cta"
            className="flex items-center gap-x-2 text-gray-700 hover:text-gray-900"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </GradientWrapper>
  </section>
);

export default Hero;
