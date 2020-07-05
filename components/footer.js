import React from "react";

function Footer({ social }) {
  return (
    <footer>
      <section
        className="w-100 p-24 flex justify-center"
        style={{
          background:
            "url('/layout/footer/banner.svg') no-repeat center/contain",
        }}
      >
        <div className="w-1/2">
          <h2 className="text-center mb-16">Votre projet</h2>

          <p className="mb-16">
            Lorem ipsum dolor sit amet montius advocatos deiectas lenitatem post
            commune si palatinarum iniusta adlocutus conperto id ille ut
            adimenda.
          </p>

          <div className="text-center">
            <a className="button-cf201">Un projet ? Parlons-en !</a>
          </div>
        </div>
      </section>
      <section>
        <div className="flex items-center">
          <div className="w-1/2">
            <img src="/layout/logo.svg" alt="Collectif 201" />

            <p className="pl-32">
              Mentions légales
              <br />
              Tous droits réservés
              <br />© 2020 - COLLECTIF 201
            </p>
          </div>
          <div className="w-1/2">
            <div>
              <p className="italic text-center">
                Retrouvez-nous les réseaux sociaux ou sur vos portables
                téléphoniques
              </p>
            </div>
            <div className="flex justify-center">
              {social &&
                social.map((item, index) => (
                  <div
                    key={`social-${index}`}
                    className={`w-1/${social.length} flex justify-center`}
                  >
                    <a className="cursor-pointer" href={item.url}>
                      <img
                        src={`${process.env.STRAPI_ENDPOINT}${item.icone.url}`}
                        alt={item.nom}
                      />
                    </a>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
