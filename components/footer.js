import React from "react";
import Link from "next/link";
import parse from "html-react-parser";
import SVG from "react-inlinesvg";

function Footer({ mainMenu, mainLogo, legalMenu, social, text, introRs }) {
  return (
    <footer>
      {text ? (
        <section>
          <div
            className="banner relative mt-10 flex flex-col items-center justify-center"
            style={{
              background:
                "url('/footer/banner_footer.svg') no-repeat center/cover",
            }}
          >
            <div className="text text-center w-2/4">
              <h2 className="not-italic mb-8">{text.title}</h2>

              <div className="mb-8">{parse(text.text)}</div>

              <div className="flex justify-center">
                {text.buttons
                  ? text.buttons.map((button, index) => (
                      <Link
                        key={`${button.text}-${index}`}
                        href={
                          button.internal_link
                            ? button.internal_link.post_name
                            : button.external_link
                        }
                      >
                        <button
                          target={button.internal_link ? "_self" : "_blank"}
                          className="mb-4"
                        >
                          {button.text}
                        </button>
                      </Link>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="rest container mx-auto flex flex-wrap pb-0">
        <div className="w-full order-last md:order-first md:w-4/12 logo">
          <Link href="/">
            <a>
              <img src={mainLogo} alt="logo" />
            </a>
          </Link>

          <p className="text-center md:text-left">
            {legalMenu
              ? legalMenu.map((item, index) => (
                  <Link
                    key={`${item.text}-${index}`}
                    href={`/${item.link.post_name}`}
                    className="legal-menu"
                  >
                    <a className="text-primary underline font-semibold">
                      {item.text}
                    </a>
                  </Link>
                ))
              : null}
            <br />
            Tous droits réservés
            <br />
            &copy; {new Date().getFullYear()} - COLLECTIF 201
          </p>
        </div>
        <div className="w-full mb-8 md:mb-0 md:w-8/12 flex items-center justify-center social">
          <div className="w-full md:w-8/12">
            <div>
              <p className="w-full text-center italic">{introRs}</p>
            </div>
            {social ? (
              <div className="flex mt-8 md:-mx-4">
                {social.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex-1 px-0 md:px-4"
                  >
                    <Link href={item.link} className="social-link">
                      <a target="_blank">
                        <img src={item.icone} alt={item.name} />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
      {mainMenu ? (
        <div className="sitemap flex items-center justify-center mt-16 mb-16">
          <nav className="nav-sitemap">
            <ul className="list-none">
              {mainMenu.map((item, index) => (
                <li
                  key={`${item.text}-${index}`}
                  className={`inline-block ${index === 0 ? "ml-0" : "ml-4"}`}
                >
                  <Link
                    href={item.is_homepage ? "/" : `/${item.link.post_name}`}
                  >
                    <a className="text-primary no-underline">{item.text}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </footer>
  );
}

export default Footer;
