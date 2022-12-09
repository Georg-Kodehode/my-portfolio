import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FrontPage from "./FrontPage";
import AboutMePage from "./AboutMePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";

import ScrollToTop from "../components/ScrollToTop";

const LandingPage = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/cv" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<FrontPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default LandingPage;
