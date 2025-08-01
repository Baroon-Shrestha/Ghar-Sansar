import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/AboutPage";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Products from "./Pages/Products";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Hero1 from "./Components/HomeComponents/Hero1";
import ServiceHero from "./Components/ServicesComponents/ServiceHero";
import ScrollToTop from "./Components/HelperComponents/ScrollToTOp";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hero1" element={<Hero1 />} />
        <Route path="/serviceHero" element={<ServiceHero />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
