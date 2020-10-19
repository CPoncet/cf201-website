import React from "react";
import Link from "next/link";
import SVG from "react-inlinesvg";

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
          <div className="text text-center w-2/4">
            <h2 className="not-italic mb-8">Votre projet</h2>

            <p className="mb-8">
              Nous avons hâte de découvrir votre prochain projet ! Vous en avez
              une idée floue, ou au contraire, vous êtes à un stade avancé de
              réflexion ? Notre collectif vous accompagne à n'importe quelle
              étape de votre projet, en prenant en compte votre environnement.
            </p>
          </div>
        </div>
      </section>

      <section className="rest container mx-auto flex flex-wrap">
        <div className="w-full order-last md:order-first md:w-4/12 logo">
          <Link href="/">
            <a>
              <SVG src="/logo-cf201.svg" />
            </a>
          </Link>

          <p className="text-center md:text-left">
            <Link href="/mentions-legales">
              <a className="text-primary underline font-semibold">
                Mentions légales
              </a>
            </Link>
            <br />
            Tous droits réservés
            <br />
            &copy; 2020 - COLLECTIF 201
          </p>
        </div>
        <div className="w-full mb-8 md:mb-0 md:w-8/12 flex items-center justify-center social">
          <div className="w-full md:w-8/12">
            <div>
              <p className="w-full text-center italic">
                Retrouvez-nous sur les réseaux sociaux !
              </p>
            </div>
            <div className="flex mt-8 md:-mx-4">
              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <SVG src="/social/facebook.svg" />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <SVG src="/social/linkedin.svg" />
                </a>
              </div>

              <div className="flex-1 px-0 md:px-4">
                <a href="#" className="social-link">
                  <SVG src="/social/instagram.svg" />
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
              <Link href="/">
                <a className="text-primary no-underline">Accueil</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="/le-collectif">
                <a className="text-primary no-underline">Le Collectif</a>
              </Link>
            </li>
            <li className="inline-block ml-4">
              <Link href="/nos-services">
                <a className="text-primary no-underline">Nos services</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
