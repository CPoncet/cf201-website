import React from "react";
import Header from "./header";
import Footer from "./footer";

function Layout(props) {
  return (
    <div className={props.page}>
      <Header />

      <main className="container mx-auto">{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
