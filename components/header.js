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
    <header className="container">
      <div className="row">
        <div className="column is-half stack logo">
          <Link href="/">
            <a>
              <img src="cf201-logo.svg" />
            </a>
          </Link>
        </div>

        <div className="column is-half stack menu">
          <a
            style={{ display: nav ? "none" : "inline-flex" }}
            className="toggle-menu"
            onClick={() => setNav(!nav)}
          >
            Menu
            <Menu />
          </a>
          <a
            style={{ display: nav ? "inline-flex" : "none" }}
            className="close-menu"
            onClick={() => setNav(!nav)}
          >
            Fermer <FiX size="3em" />
          </a>
        </div>
      </div>

      <motion.nav
        className="nav"
        animate={nav ? "open" : "closed"}
        variants={variants}
      >
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link href="#">
                  <a>Accueil</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Le Collectif</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Nos services</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Nos références</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-footer">
          <nav className="social-nav">
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://facebook.com">Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.nav>
    </header>
  );
}

export default Header;
