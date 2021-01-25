import React from "react";
import parse from "html-react-parser";

const BlocsOrangeFonce = ({ data }) => {
  return (
    <section className="container mx-auto">
      {data.blocsOrange
        ? data.blocsOrange.map((bloc, index) => (
            <div
              key={`${bloc.title}-${index}`}
              className={`collectif-box rounded-lg flex p-8 sm:pl-64 sm:pt-24 sm:pb-24 mb-8`}
              style={{
                background: `url('${bloc.backgroundImage.sourceUrl}') no-repeat center/cover, #f19066`,
              }}
            >
              <div className={`w-full sm:w-3/5`}>
                <h4>{bloc.title}</h4>

                {parse(bloc.content)}
              </div>
            </div>
          ))
        : null}
    </section>
  );
};

export default BlocsOrangeFonce;
