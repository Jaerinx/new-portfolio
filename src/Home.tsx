export default function Home() {
  return (
    <section
      className="px-24 w-full flex min-h-screen items-center shadow-primary_darker shadow-2xl z-[100]"
      id="home"
    >
      <span className=" text-8xl text-accent font-semibold">
        Hi,
        <div className="border-accent border-8 rounded-full w-52 aspect-square inline-block animate-[shadow_12s_linear_infinite]"></div>
        <br /> I'm Hieu <br />
        <p className="text-black text-2xl max-w-[40vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          necessitatibus quas laboriosam ad consequuntur repellendus consequatur
        </p>
      </span>
    </section>
  );
}
