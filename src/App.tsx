import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import Education from "./Education.tsx";
import Projects from "./Projects.tsx";
import Experience from "./Experience.tsx";
import Contact from "./Contact.tsx";
import Footer from "./footer.tsx";
export default function App() {
  return (
    <div className="w-full bg-primary min-h-screen h-fit z-50 light" id="app">
      <Navbar />
      <div className="h-10"></div>
      <Home />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
