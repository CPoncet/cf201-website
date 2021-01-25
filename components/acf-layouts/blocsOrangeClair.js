import React from "react";
import parse from "html-react-parser";

const BlocsOrangeClair = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.blocsOrange
        ? data.blocsOrange.map((bloc, index) => (
            <div
              key={`${bloc.title}-${index}`}
              className={`collectif-box mb-4 rounded-lg flex flex-col md:flex-row justify-end p-8 sm:pt-24 sm:pb-24`}
              style={{
                background: `#f8c8b3`,
              }}
            >
              <div className="w-full md:w-1/4 flex items-center md:justify-center">
                <img
                  className="h-full"
                  src={bloc.icon.sourceUrl}
                  alt={bloc.title}
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="mb-4">
                  <div className="text">{bloc.title}</div>
                  <div className="bg"></div>
                </h3>

                <div className="mb-4">{parse(bloc.content)}</div>
              </div>
            </div>
          ))
        : null}
    </section>
  );
};

export default BlocsOrangeClair;
