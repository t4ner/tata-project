import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import Matrix from "../components/Matrix";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Movies />
      <Matrix />
      <Blog />
      <Footer />
    </div>
  );
}
