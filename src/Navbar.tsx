import { Link } from "react-router";
export default function Navbar() {
  return (
    <div className="fixed text-black top-0 left-0 h-fit w-full gap-10 flex justify-end text-[1.5rem] px-16 font-extralight bg-primary/45 backdrop-blur-sm  p-4 z-[100] bg-linear-to-b">
      <a href="#home" className="mr-auto">
        Home
      </a>
      <a href="#education" className="">
        Education
      </a>
      <a href="#projects" className="">
        Projects
      </a>
      <Link to="" className="">
        My Stack
      </Link>
      <a href="#contact" className="">
        Contact
      </a>
    </div>
  );
}
