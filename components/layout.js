import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className="container mx-auto">
      <Header />

      <main>{props.children}</main>

      <Footer social={props.social} />
    </div>
  );
}

export default Layout;
