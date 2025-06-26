import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu, logo } from "../assets";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <LazyLoadImage
            src={logo}
            alt="logo"
            className="sm:w-[60px] sm:h-[60px] w-[55px] h-[55px] object-contain"
            loading="lazy"
          />
          {/* <img
            src={logo} // your logo comes here
            loading="lazy"
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          /> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-french" : "text-eerieBlack"
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] fixed 
                top-0 left-0 w-full h-full z-10 menu ${
                  toggle ? "menu-open" : "menu-close"
                }`}
            >
              <div className="flex justify-end">
                <LazyLoadImage
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                  loading="lazy"
                />
                {/* <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                /> */}
              </div>
              <ul
                className="list-none flex flex-col gap-6 
                items-center justify-center h-full px-6"
              >
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`${
                      active === nav.title ? "text-french" : "text-black"
                    } text-[32px] font-medium font-arenq 
                      uppercase tracking-[1px] cursor-pointer text-center`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <LazyLoadImage
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              loading="lazy"
            />
            // <img
            //   src={menu}
            //   alt="menu"
            //   className="w-[34px] h-[34px] object-contain cursor-pointer"
            //   onClick={() => setToggle(!toggle)}
            // />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
