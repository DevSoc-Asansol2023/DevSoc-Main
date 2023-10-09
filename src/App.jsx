import './App.css';
import Main from './main_page/main';
import HeroPage from './main_page/heropage';
import Build from './main_page/build';
import Navbar from './main_page/navbar';
import Cards from './main_page/cards';
import Footer from './main_page/footer';
import ScrollButton from './main_page/ScrollButton';

function App() {
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
