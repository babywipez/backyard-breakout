import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReachOut from "./ReachOut";
import "../styles/global.css";

export default function Layout({ children }) {
  return (
    <section className="layout">
      <Navbar />
      <ReachOut />
      <section className="content">{children}</section>
      <Footer />
    </section>
  );
}
