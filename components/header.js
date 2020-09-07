import React, { useState } from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import Menu from "./svg/Menu";

import { FiX } from "react-icons/fi";

function Header() {
  const [nav, setNav] = useState(false);

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
    <header className="container mx-auto">
      <div className="flex">
        <div className="w-1/2 logo">
          <Link href="/">
            <a>
              <img className="w-1/2" src="cf201-logo.svg" />
            </a>
          </Link>
        </div>

        <div className="menu w-1/2 flex justify-end items-center font-display font-semibold relative">
          <a
            style={{ display: nav ? "none" : "inline-flex" }}
            className="toggle-menu flex items-center justify-center cursor-pointer"
            onClick={() => setNav(!nav)}
          >
            Menu
            <Menu />
          </a>
          <a
            style={{ display: nav ? "inline-flex" : "none" }}
            className="close-menu absolute cursor-pointer text-white flex z-50 items-center justify-center"
            onClick={() => setNav(!nav)}
          >
            Fermer <FiX size="3em" />
          </a>
        </div>
      </div>

      <motion.nav
        className="nav absolute inset-0 h-full w-full bg-primary z-40"
        animate={nav ? "open" : "closed"}
        variants={variants}
      >
        <div>
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

        <div className="nav-footer">
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
