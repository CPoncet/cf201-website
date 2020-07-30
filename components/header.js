import React, { useState } from "react";
import Link from "next/link";

import { FiX } from "react-icons/fi";

function Header() {
  const [nav, setNav] = useState(false);

  return (
    <header className="container">
      <div className="row">
        <div className="column is-half stack logo">
          <img src="cf201-logo.svg" />
        </div>

        <div className="column is-half stack menu">
          <a className="toggle-menu" onClick={() => setNav(!nav)}>
            Menu
            <img src="menu1.svg" />
          </a>
        </div>
      </div>
      <div className="nav" style={{ display: nav ? "block" : "none" }}>
        <a className="close-menu" onClick={() => setNav(!nav)}>
          Close <FiX size="1.5em" />
        </a>
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <Link href="/">
                  <a>Accueil</a>
                </Link>
              </li>

              <li>
                <Link href="/blog">
                  <a>Blog</a>
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
      </div>
    </header>
  );
}

export default Header;
