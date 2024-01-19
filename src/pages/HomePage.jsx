import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Movies from "../components/Movies";
import Matrix from "../components/Matrix";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Movies />
      <Matrix />
    </div>
  );
}
