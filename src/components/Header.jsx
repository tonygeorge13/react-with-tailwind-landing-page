import { useRef } from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [links, setLinks] = useState(["Features", "Team", "Sign in"]);
  const headerref = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerref.current.style.background = "#0c1524";
        headerref.current.style.padding = "20px 0";
      } else {
        headerref.current.style.background = "transparent";
        headerref.current.style.padding = "60px 0";
      }
    });
  }, []);

  return (
    <header
      ref={headerref}
      className=" pt-[60px]  px-5  fixed top-0 left-0 w-[100%] z-40 transition-all duration-200  "
    >
      <div className=" container flex items-center justify-between mx-auto  gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src="logo.svg" />
        </a>
        <nav>
          <ul className="flex gap-[20px] ">
            {links.map((link, i) => {
              return (
                <li key={i}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-white opacity-[0.8]  hover:opacity-[1] hover: transition-opacity duration-200"
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
