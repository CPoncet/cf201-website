import React from "react";
import Link from "next/link";
import parse from "html-react-parser";

const Cards = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.cards ? (
        <>
          <div className="flex flex-wrap p-0 md:p-16">
            {data.cards
              ? data.cards.map((card, index) => (
                  <div
                    key={`${card.title}-${index}`}
                    className="w-full md:flex-1 md:p-4 mb-4 md:mb-0"
                  >
                    <div className="icon-box w-2/3 mx-auto md:w-full md:mx-0 bg-white shadow rounded p-4 flex flex-col items-center justify-center">
                      {card.image ? (
                        <img src={card.image.sourceUrl} alt={card.title} />
                      ) : null}
                      <h4>{card.title}</h4>
                      {card.shortDescription ? (
                        <div>{parse(card.shortDescription)}</div>
                      ) : null}
                      {card.button
                        ? card.button.map((button, index) => (
                            <div
                              key={`${button.text}-${index}`}
                              className="text"
                            >
                              <Link
                                href={
                                  button.internalLink
                                    ? button.internalLink.slug
                                    : button.externalLink
                                }
                              >
                                <button className="block mx-auto" href="#">
                                  <a
                                    target={
                                      button.internalLink ? "_self" : "_blank"
                                    }
                                  >
                                    {button.text}
                                  </a>
                                </button>
                              </Link>
                            </div>
                          ))
                        : null}
                    </div>
                  </div>
                ))
              : null}
          </div>
        </>
      ) : null}
      {data.button
        ? data.button.map((button, index) => (
            <div key={`${button.text}-${index}`} className="text">
              <Link
                href={
                  button.internalLink
                    ? button.internalLink.slug
                    : button.externalLink
                }
              >
                <button className="block mx-auto" href="#">
                  <a target={button.internalLink ? "_self" : "_blank"}>
                    {button.text}
                  </a>
                </button>
              </Link>
            </div>
          ))
        : null}
    </section>
  );
};

export default Cards;
