import { useState } from "react";
import { useTranslation } from "react-i18next";
import './App.css';
import ScrollButton from './main_page/ScrollButton';
import Build from './main_page/build';
import Cards from './main_page/cards';
import Footer from './main_page/footer';
import HeroPage from './main_page/heropage';
import Main from './main_page/main';
import Navbar from './main_page/navbar';

function App() {
  const { i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  
  const handleChangeLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <>
      <Navbar />
      <Main />
      <HeroPage />
      <Build />
      <Cards />
      <Footer />
      <ScrollButton />
    </>
  );
}

export default App;
