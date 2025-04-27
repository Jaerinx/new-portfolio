export default function ProjectCard() {
  return (
    <>
      <div className="relative w-fit h-fit group">
        <div className="w-[40vw] aspect-[1.4/1] rounded-2xl  z-1 invisible" />
        <div className="absolute top-0 left-0 w-full h-full rounded-4xl bg-secondary z-1 group-hover:top-2 group-hover:-left-2 duration-200 ease-in-out"></div>
        <div className="absolute top-2 -left-2 w-full h-full rounded-4xl bg-accent z-0"></div>
      </div>
    </>
  );
}
