import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <section className="layout">
      <Navbar />
      <section className="content">{children}</section>
      <Footer />
    </section>
  );
}
