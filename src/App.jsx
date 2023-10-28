import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main_page/main";
import HeroPage from "./main_page/heropage";
import Build from "./main_page/build";
import Navbar from "./main_page/navbar";
import Cards from "./main_page/cards";
import Footer from "./main_page/footer";
import ScrollButton from "./main_page/ScrollButton";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <>
      {/* <Navbar />
      <Main />
      <HeroPage />
      <Signup />
      <Build />
      <Cards />
      <Footer />
      <ScrollButton /> */}

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
