import { Link } from "react-router";
export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-fit w-full gap-10 flex justify-end text-[1.5rem] px-16 font-extralight bg-primary/30 backdrop-blur-lg p-8 z-[100]">
      <Link to="" className="mr-auto">
        Home
      </Link>
      <Link to="" className="">
        Education
      </Link>
      <Link to="" className="">
        Projects
      </Link>
      <Link to="" className="">
        My Stack
      </Link>
      <Link to="" className="">
        Contact
      </Link>
    </div>
  );
}
