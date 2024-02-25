import Image from "next/image";
import TopSection from "./components/TopSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection"; 
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <div className="container mx-auto px-12 py-4">
        <TopSection/>
        <AboutSection/>
        <ProjectsSection/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
