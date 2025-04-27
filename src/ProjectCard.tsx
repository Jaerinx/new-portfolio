import { ReactNode } from "react";

export default function ProjectCard({ children }: { children?: ReactNode }) {
  return (
    <>
      <div className="relative w-fit h-fit group text-xl">
        <div className="w-[40vw] h-max rounded-2xl  z-1 invisible">
          <div className="w-full p-5 overflow-hidden">{children}</div>
        </div>
        <div className="p-5 text-start absolute top-0 left-0 w-full h-full rounded-4xl bg-secondary opacity-80 z-1 group-hover:top-2 group-hover:-left-2 duration-200 ease-in-out">
          <div className="w-full overflow-hidden">{children}</div>
        </div>
        <div className="p-2 absolute top-2 -left-2 w-full h-full rounded-4xl bg-accent z-0 shadow-accent shadow-lg" />
      </div>
    </>
  );
}
