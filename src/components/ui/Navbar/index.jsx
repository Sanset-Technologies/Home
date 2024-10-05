import { useEffect, useRef, useState } from "react";
import NavHeader from "../NavHeader";

const Navbar = () => {
  const [state, setState] = useState(false);
  const menuBtnEl = useRef(null);
  const navEl = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navEl.current &&
        !navEl.current.contains(event.target) &&
        !menuBtnEl.current.contains(event.target)
      ) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigation = [
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-30 m-2">
      <nav className={`custom-screen md:hidden ${state ? "hidden" : ""}`}>
        <NavHeader
          menuBtnEl={menuBtnEl}
          state={state}
          onClick={() => setState(!state)}
        />
      </nav>
      <nav
        ref={navEl}
        className={`mx-auto max-w-7xl md:static ${
          state
            ? "absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg"
            : "mx-4 hidden md:block"
        }`}
      >
        <div className="custom-screen items-center gap-x-20 md:flex">
          <NavHeader state={state} onClick={() => setState(!state)} />
          <div
            className={`mb-3 mt-2 flex-1 items-end justify-end text-gray-600 md:my-0 md:flex md:font-medium ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="hover:text-gray-900">
                    <a
                      href={item.href}
                      className="block"
                      onClick={() => setState(false)} // Add this line
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
