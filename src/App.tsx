import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import Education from "./Education.tsx";
import Projects from "./Projects.tsx";
import Experience from "./Experience.tsx";
export default function App() {
  return (
    <div className="w-full bg-primary min-h-screen h-fit z-50">
      <Navbar />
      <div className="h-10"></div>
      <Home />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}
