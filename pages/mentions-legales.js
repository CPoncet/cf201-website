import React from "react";
import Link from "next/link";
import Layout from "../components/layout";

import Hero from "../components/parts/hero";

export default () => {
  return (
    <Layout page={`mentions-legales`}>
      <Hero noImage>
        <h1>Mentions Légales</h1>
      </Hero>

      <section className="container mx-auto">
        <h2>1. Présentation du site</h2>

        <p>
          Conformément aux dispositions des articles 6-III et 19 de la Loi n°
          2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
          dite L.C.E.N., nous portons à la connaissance des utilisateurs et
          visiteurs du site : www.collectif201.fr les informations suivantes :
        </p>

        <ul>
          <li>Collectif 201</li>

          <li>Identifiée par le numéro de SIRET : 53409996500038</li>

          <li>
            Siège social situé au : 177 avenue du Général Leclerc 54000 NANCY
          </li>

          <li>Adresse mail : contact@collectif201.fr</li>
        </ul>

        <p>
          L’hébergeur du site est : Infomaniak - 25 Eugène-Marziano 1227 Les
          Acacias - GENÈVE
        </p>

        <h2>2. Description des services fournis</h2>

        <p>
          Le site www.collectif201.fr a pour objet de fournir une information
          concernant l’ensemble des activités de la société.
        </p>

        <p>
          Le propriétaire du site s’efforce de fournir sur le site
          www.collectif201.fr des informations aussi précises que possible.
          Toutefois, il ne pourra être tenu responsable des omissions, des
          inexactitudes et des carences dans la mise à jour, qu’elles soient de
          son fait ou du fait des tiers partenaires qui lui fournissent ces
          informations.
        </p>

        <p>
          Toutes les informations proposées sur le site www.collectif201.fr sont
          données à titre indicatif, sont non exhaustives, et sont susceptibles
          d’évoluer. Elles sont données sous réserve de modifications ayant été
          apportées depuis leur mise en ligne.
        </p>

        <h2>3. Propriété intellectuelle et contrefaçons</h2>

        <p>
          Le propriétaire du site est propriétaire des droits de propriété
          intellectuelle ou détient les droits d’usage sur tous les éléments
          accessibles sur le site, notamment les textes, images, graphismes,
          logo, icônes, sons, logiciels…
        </p>

        <p>
          Toute reproduction, représentation, modification, publication,
          adaptation totale ou partielle des éléments du site, quel que soit le
          moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
          préalable à l'email : contact@collectif201.fr
        </p>

        <p>
          Toute exploitation non autorisée du site ou de l’un quelconque de ces
          éléments qu’il contient sera considérée comme constitutive d’une
          contrefaçon et poursuivie conformément aux dispositions des articles
          L.335-2 et suivants du Code de Propriété Intellectuelle.
        </p>

        <h2>4. Liens hypertextes et cookies</h2>

        <p>
          Le site www.collectif201.fr contient un certain nombre de liens
          hypertextes vers d’autres sites (partenaires, informations …) mis en
          place avec l’autorisation du propriétaire du site. Cependant, le
          propriétaire du site n’a pas la possibilité de vérifier le contenu des
          sites ainsi visités et décline donc toute responsabilité de ce fait
          quant aux risques éventuels de contenus illicites.
        </p>

        <p>
          L’utilisateur est informé que lors de ses visites sur le site
          www.collectif201.fr, un ou des cookies sont susceptible de s’installer
          automatiquement sur son ordinateur. Un cookie est un fichier de petite
          taille, qui ne permet pas l’identification de l’utilisateur, mais qui
          enregistre des informations relatives à la navigation d’un ordinateur
          sur un site. Les données ainsi obtenues visent à faciliter la
          navigation ultérieure sur le site, et ont également vocation à
          permettre diverses mesures de fréquentation.
        </p>

        <p>
          Le paramétrage du logiciel de navigation permet d’informer de la
          présence de cookie et éventuellement, de refuser de la manière décrite
          à l’adresse suivante : www.cnil.fr
        </p>

        <p>
          Le refus d’installation d’un cookie peut entraîner l’impossibilité
          d’accéder à certains services. L’utilisateur peut toutefois configurer
          son ordinateur de la manière suivante, pour refuser l’installation des
          cookies :
        </p>
        <ul>
          <li>
            Sous Internet Explorer : onglet outil / options internet. Cliquez
            sur Confidentialité et choisissez Bloquer tous les cookies. Validez
            sur Ok.
          </li>

          <li>
            Sous Netscape : onglet édition / préférences. Cliquez sur Avancées
            et choisissez Désactiver les cookies. Validez sur Ok.
          </li>
        </ul>

        <h2>
          5. Protection des biens et des personnes - gestion des données
          personnelles
        </h2>

        <p>
          Utilisateur : Internaute se connectant, utilisant le site susnommé :
          www.collectif201.fr
        </p>

        <p>
          En France, les données personnelles sont notamment protégées par la
          loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
          l'article L. 226-13 du Code pénal et la Directive Européenne du 24
          octobre 1995.
        </p>

        <p>
          Sur le site www.collectif201.fr, le propriétaire du site ne collecte
          des informations personnelles relatives à l'utilisateur que pour le
          besoin de certains services proposés par le site www.collectif201.fr.
          L'utilisateur fournit ces informations en toute connaissance de cause,
          notamment lorsqu'il procède par lui-même à leur saisie. Il est alors
          précisé à l'utilisateur du site www.collectif201.fr l’obligation ou
          non de fournir ces informations.
        </p>

        <p>
          Conformément aux dispositions des articles 38 et suivants de la loi
          78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux
          libertés, tout utilisateur dispose d’un droit d’accès, de
          rectification, de suppression et d’opposition aux données personnelles
          le concernant. Pour l’exercer, adressez votre demande à
          www.collectif201.fr par email : email du webmaster ou en effectuant sa
          demande écrite et signée, accompagnée d’une copie du titre d’identité
          avec signature du titulaire de la pièce, en précisant l’adresse à
          laquelle la réponse doit être envoyée.
        </p>

        <p>
          Aucune information personnelle de l'utilisateur du site
          www.collectif201.fr n'est publiée à l'insu de l'utilisateur, échangée,
          transférée, cédée ou vendue sur un support quelconque à des tiers.
          Seule l'hypothèse du rachat du site www.collectif201.fr à le
          propriétaire du site et de ses droits permettrait la transmission des
          dites informations à l'éventuel acquéreur qui serait à son tour tenu
          de la même obligation de conservation et de modification des données
          vis à vis de l'utilisateur du site www.collectif201.fr.
        </p>

        <p>
          Le site www.collectif201.fr est déclaré à la CNIL sous le numéro En
          cours de traitement.
        </p>

        <p>
          Les bases de données sont protégées par les dispositions de la loi du
          1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
          relative à la protection juridique des bases de données.
        </p>
      </section>
    </Layout>
  );
};
