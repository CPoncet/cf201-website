import React from "react";
import Link from "next/link";

import Facebook from "./svg/icons/Facebook";
import Twitter from "./svg/icons/Twitter";
import Linkedin from "./svg/icons/Linkedin";
import Instagram from "./svg/icons/Instagram";
import Dribbble from "./svg/icons/Dribbble";

function Footer() {
  return (
    <footer className="container">
      <div className="row banner">
        <object data="/footer/banner_footer.svg"></object>
        <div className="text">
          <h2>Votre projet</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum
            est convallis tellus fermentum lacinia nec vel tortor. Donec eros
            leo, condimentum et neque egestas, viverra sodales nulla. Vivamus eu
            placerat ipsum. Suspendisse vestibulum augue id malesuada
            consectetur. Aenean vel quam erat. Quisque mattis elit sit amet
            scelerisque interdum. Donec mollis nisi at metus lobortis, at
            elementum ligula sollicitudin.
          </p>

          <button>Un projet ? Parlons-en !</button>
        </div>
      </div>

      <div className="row rest">
        <div className="column is-3 logo">
          <Link href="/">
            <a>
              <img src="cf201-logo.svg" />
            </a>
          </Link>

          <p>
            Mentions légales
            <br />
            Tous droits réservés
            <br />
            &copy; 2020 - COLLECTIF 201
          </p>
        </div>
        <div className="column is-2"></div>
        <div className="column is-7 social">
          <div className="row no-gutter">
            <p>
              Retrouvez-nous sur les réseaux sociaux ou sur vos portables
              téléphoniques
            </p>
          </div>
          <div className="row">
            <div className="column is-one-fifth stack">
              <a href="#" className="social-link">
                <Facebook />
              </a>
            </div>

            <div className="column is-one-fifth stack">
              <a href="#" className="social-link">
                <Twitter />
              </a>
            </div>

            <div className="column is-one-fifth stack">
              <a href="#" className="social-link">
                <Linkedin />
              </a>
            </div>

            <div className="column is-one-fifth stack">
              <a href="#" className="social-link">
                <Instagram />
              </a>
            </div>

            <div className="column is-one-fifth stack">
              <a href="#" className="social-link">
                <Dribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row sitemap">
        <nav className="nav-sitemap">
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
    </footer>
  );
}

export default Footer;
