import React from "react";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css";

import TestNav from "./TestNav";

export default function Layout({ children }) {
  return (
    <section className="layout">
      {/* <Navbar /> */}
      <TestNav />
      <section className="content">{children}</section>
      <Footer />
    </section>
  );
}
