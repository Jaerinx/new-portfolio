import Home from "./Home.tsx";
import Navbar from "./Navbar.tsx";
import Education from "./Education.tsx";
import ProjectsExperience from "./ProjectsExperience.tsx";
export default function App() {
  return (
    <div className="w-full bg-primary min-h-screen h-fit">
      <Navbar />
      <div className="h-10"></div>
      <Home />
      <Education />
      <ProjectsExperience />
    </div>
  );
}
