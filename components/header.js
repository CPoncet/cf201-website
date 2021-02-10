import React, { useState, useEffect } from "react";
import Link from "next/link";
import noScroll from "no-scroll";

import { motion } from "framer-motion";

import { FiX } from "react-icons/fi";
import { ReactSVG } from "react-svg";

function Header({ mainLogo, mainMenu, social }) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav) {
      noScroll.on();
    } else {
      noScroll.off();
    }
  }, [nav]);

  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 100vw 0px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(0px at 100vw 0px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <header className={`sticky inset-0 z-40`}>
      <div className="bar flex container mx-auto pt-2">
        <div className="w-1/2 logo">
          <Link href="/">
            <a>
              <div className="w-full sm:w-1/2">
                <img src={mainLogo} alt="logo" />
              </div>
            </a>
          </Link>
        </div>

        <div className="menu w-1/2 flex justify-end items-center font-display font-semibold relative">
          <a
            style={{ opacity: nav ? "0" : "1" }}
            className="toggle-menu flex items-center justify-center cursor-pointer transition-opacity duration-1000 ease-in-out"
            onClick={() => setNav(!nav)}
          >
            Menu <ReactSVG className="ml-2 h-10" src="/menu.svg" />
          </a>
        </div>
      </div>

      <motion.nav
        className={`nav fixed inset-0 bg-primary z-40`}
        initial="closed"
        animate={nav ? "open" : "closed"}
        variants={variants}
      >
        <div className="relative">
          <a
            style={{ opacity: nav ? "1" : "0" }}
            className="close-menu absolute right-0 cursor-pointer text-white flex z-50 items-center justify-center transition-opacity duration-1000 ease-in-out"
            onClick={() => setNav(!nav)}
          >
            Fermer <FiX size="3em" />
          </a>
        </div>
        <div className="nav-body flex items-center justify-center">
          {mainMenu ? (
            <nav className="main-nav flex items-center justify-center">
              <ul className="list-none text-center">
                {mainMenu.map((link, index) => (
                  <li key={`${link.text}-${index}`}>
                    <Link href={link.isHomepage ? "/" : `/${link.link.slug}`}>
                      <a
                        onClick={() => setNav(!nav)}
                        className="font-extrabold uppercase no-underline text-white"
                      >
                        {link.text}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>

        <div className="nav-footer flex items-center justify-center">
          {social ? (
            <nav className="w-1/2 md:w-1/6 social-nav flex items-center justify-center">
              {social.map((item, index) => {
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className={`flex-1 ${index === 0 ? "" : "ml-4"}`}
                  >
                    <Link href={item.link} className="social-link">
                      <a target="_blank">
                        <img src={item.whiteIcon.sourceUrl} alt={item.name} />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </nav>
          ) : null}
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;
