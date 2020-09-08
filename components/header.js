import React, { useState, useEffect } from "react";
import Link from "next/link";

import noScroll from "no-scroll";

import { motion } from "framer-motion";

import Menu from "./svg/Menu";

import { FiX } from "react-icons/fi";

function Header() {
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
      <div className="flex container mx-auto">
        <div className="w-1/2 logo">
          <Link href="/">
            <a>
              <img className="w-1/2" src="cf201-logo.svg" />
            </a>
          </Link>
        </div>

        <div className="menu w-1/2 flex justify-end items-center font-display font-semibold relative">
          <a
            style={{ opacity: nav ? "0" : "1" }}
            className="toggle-menu flex items-center justify-center cursor-pointer transition-opacity duration-1000 ease-in-out"
            onClick={() => setNav(!nav)}
          >
            Menu
            <Menu />
          </a>
          <a
            style={{ opacity: nav ? "1" : "0" }}
            className="close-menu absolute cursor-pointer text-white flex z-50 items-center justify-center transition-opacity duration-1000 ease-in-out"
            onClick={() => setNav(!nav)}
          >
            Fermer <FiX size="3em" />
          </a>
        </div>
      </div>

      <motion.nav
        className="nav fixed inset-0 bg-primary z-40"
        animate={nav ? "open" : "closed"}
        variants={variants}
      >
        <div className="nav-body flex items-center justify-center">
          <nav className="main-nav flex items-center justify-center">
            <ul className="list-none text-center">
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Accueil
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Le Collectif
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Nos services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Nos références
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="font-extrabold uppercase no-underline text-white text-5xl">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-footer flex items-center justify-center">
          <nav className="social-nav flex items-center justify-center">
            <ul className="list-none text-center">
              <li className="inline-block mr-4">
                <a
                  className="no-underline text-white"
                  href="https://facebook.com"
                >
                  Facebook
                </a>
              </li>
              <li className="inline-block">
                <a
                  className="no-underline text-white"
                  href="https://facebook.com"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;
