import React from "react";
import BlocsOrangeFonce from "./acf-layouts/blocsOrangeFonce";
import BlocsOrangeClair from "./acf-layouts/blocsOrangeClair";
import Cards from "./acf-layouts/cards";
import Hero from "./acf-layouts/hero";
import MediaText from "./acf-layouts/mediaText";
import Title from "./acf-layouts/title";
import Text from "./acf-layouts/text";

const PageBuilder = ({ page }) => {
  return (
    <>
      {page.acf.builder
        ? page.acf.builder.map((element, index) => {
            switch (element.acf_fc_layout) {
              case "hero":
                if (!element.title) {
                  element.title = page.title.rendered;
                }
                return (
                  <Hero
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "titrage":
                return (
                  <Title
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "text_content":
                return (
                  <Text
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "media_text":
                return (
                  <MediaText
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "cards":
                return (
                  <Cards
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "blocs_orange_fonce":
                return (
                  <BlocsOrangeFonce
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              case "blocs_orange_clair":
                return (
                  <BlocsOrangeClair
                    key={`${element.acf_fc_layout}-${index}`}
                    data={element}
                  />
                );
              default:
                return null;
            }
          })
        : null}
    </>
  );
};

export default PageBuilder;
