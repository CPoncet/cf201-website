import React from "react";
import Link from "next/link";

import Facebook from "./svg/icons/Facebook";
import Twitter from "./svg/icons/Twitter";
import Linkedin from "./svg/icons/Linkedin";
import Instagram from "./svg/icons/Instagram";
import Dribbble from "./svg/icons/Dribbble";

function Footer() {
  return (
    <footer>
      <section>
        <div
          className="banner relative mt-10 flex flex-col items-center justify-center"
          style={{
            background:
              "url('/footer/banner_footer.svg') no-repeat center/cover",
          }}
        >
          {/*<object data="/footer/banner_footer.svg"></object>*/}
          <div className="text text-center w-2/4">
            <h2 className="not-italic mb-8">Votre projet</h2>

            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum
              est convallis tellus fermentum lacinia nec vel tortor. Donec eros
              leo, condimentum et neque egestas, viverra sodales nulla. Vivamus
              eu placerat ipsum. Suspendisse vestibulum augue id malesuada
              consectetur. Aenean vel quam erat. Quisque mattis elit sit amet
              scelerisque interdum. Donec mollis nisi at metus lobortis, at
              elementum ligula sollicitudin.
            </p>

            <button>Un projet ? Parlons-en !</button>
          </div>
        </div>
      </section>

      <section className="rest container mx-auto flex flex-wrap">
        <div className="w-full order-last md:order-first md:w-4/12 logo">
          <Link href="/">
            <a>
              <img src="cf201-logo.svg" />
            </a>
          </Link>

          <p className="text-center md:text-left">
            Mentions légales
            <br />
            Tous droits réservés
            <br />
            &copy; 2020 - COLLECTIF 201
          </p>
        </div>
        <div className="w-full mb-8 md:mb-0 md:w-8/12 flex items-center justify-center social">
          <div>
            <div>
              <p className="w-full text-center italic">
                Retrouvez-nous sur les réseaux sociaux ou sur vos portables
                téléphoniques
              </p>
            </div>
            <div className="flex mt-8 md:-mx-4">
              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <Facebook />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <Twitter />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <Linkedin />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <Instagram />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <Dribbble />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="sitemap flex items-center justify-center mt-16 mb-16">
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
