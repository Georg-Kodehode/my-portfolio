import { Routes, Route, NavLink } from "react-router-dom";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FrontPage from "./FrontPage";
import AboutMePage from "./AboutMePage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<FrontPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/cv" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default LandingPage;
