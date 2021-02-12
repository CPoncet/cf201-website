import React from "react";
import BlocsOrangeFonce from "./acf-layouts/blocsOrangeFonce";
import BlocsOrangeClair from "./acf-layouts/blocsOrangeClair";
import Cards from "./acf-layouts/cards";
import Hero from "./acf-layouts/hero";
import MediaText from "./acf-layouts/mediaText";
import Title from "./acf-layouts/title";
import Text from "./acf-layouts/text";
import ContactModule from "./acf-layouts/contactModule";

const PageBuilder = ({ page }) => {
  return (
    <>
      {page.builder
        ? page.builder.map((element, index) => {
            switch (element.fieldGroupName) {
              case "page_Builder_Builder_Hero":
                if (!element.title) {
                  element.title = page.title.rendered;
                }
                return (
                  <Hero
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_Titrage":
                return (
                  <Title
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_TextContent":
                return (
                  <Text
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_MediaText":
                return (
                  <MediaText
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_Cards":
                return (
                  <Cards
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_BlocsOrangeFonce":
                return (
                  <BlocsOrangeFonce
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_BlocsOrangeClair":
                return (
                  <BlocsOrangeClair
                    key={`${element.fieldGroupName}-${index}`}
                    data={element}
                  />
                );
              case "page_Builder_Builder_ContactModule":
                return (
                  <ContactModule
                    key={`${element.fieldGroupName}-${index}`}
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
