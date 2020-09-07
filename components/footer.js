import React from "react";
import Link from "next/link";

import Facebook from "./svg/icons/Facebook";
import Twitter from "./svg/icons/Twitter";
import Linkedin from "./svg/icons/Linkedin";
import Instagram from "./svg/icons/Instagram";
import Dribbble from "./svg/icons/Dribbble";

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="banner relative mt-10">
        <object data="/footer/banner_footer.svg"></object>
        <div className="text text-center absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="not-italic">Votre projet</h2>

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

      <div className="rest flex">
        <div className="w-3/12 logo">
          <Link href="/">
            <a>
              <img src="cf201-logo.svg" />
            </a>
          </Link>

          <p className="pl-16">
            Mentions légales
            <br />
            Tous droits réservés
            <br />
            &copy; 2020 - COLLECTIF 201
          </p>
        </div>
        <div className="w-2/12"></div>
        <div className="w-7/12 social">
          <div>
            <p className="w-full text-center italic">
              Retrouvez-nous sur les réseaux sociaux ou sur vos portables
              téléphoniques
            </p>
          </div>
          <div className="flex">
            <div className="w-1/5">
              <a href="#" className="social-link">
                <Facebook />
              </a>
            </div>

            <div className="w-1/5">
              <a href="#" className="social-link">
                <Twitter />
              </a>
            </div>

            <div className="w-1/5">
              <a href="#" className="social-link">
                <Linkedin />
              </a>
            </div>

            <div className="w-1/5">
              <a href="#" className="social-link">
                <Instagram />
              </a>
            </div>

            <div className="w-1/5">
              <a href="#" className="social-link">
                <Dribbble />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sitemap items-center justify-center">
        <nav className="nav-sitemap">
          <ul className="list-none">
            <li className="inline-block ml-0">
              <Link href="#">
                <a className="text-primary no-underline">Accueil</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="#">
                <a className="text-primary no-underline">Le Collectif</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="#">
                <a className="text-primary no-underline">Nos services</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="#">
                <a className="text-primary no-underline">Nos références</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="#">
                <a className="text-primary no-underline">Blog</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="#">
                <a className="text-primary no-underline">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
