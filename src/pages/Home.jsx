import React from "react";
import NavBar from "../main_page/navbar";
import Main from "../main_page/main";
import HeroPage from "../main_page/heropage";
import Build from "../main_page/build";
import Cards from "../main_page/cards";
import Footer from "../main_page/footer";
import ScrollButton from "../main_page/ScrollButton";

const Home = () => {
  return (
    <>
      <NavBar />
      <Main />
      <HeroPage />
      <Build />
      <Cards />
      <Footer />
      <ScrollButton />
    </>
  );
};

export default Home;
