import ProjectCard from "./ProjectCard";

export default function ProjectsExperience() {
  return (
    <div className="px-14 w-full grid grid-cols-[1fr_1px_1fr]">
      <div className="h-screen w-full flex items-center pt-10 flex-col">
        <h1>Projects</h1>
        <ProjectCard></ProjectCard>
      </div>
      <div className="bg-black"></div>
      <div className="h-screen w-full flex justify-center pt-10">
        <h1>Experience</h1>
      </div>
    </div>
  );
}
