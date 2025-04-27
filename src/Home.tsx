import Star from "./Star";

export default function Home() {
  return (
    <section
      className="px-24 w-full h-[calc(100vh-3rem)] mt-8 grid grid-cols-[auto_1fr] grid-rows-[1fr_auto_1fr]  shadow-primary_darker shadow-2xl z-[100]"
      id="home"
    >
      <div className="col-start-1 row-start-1 w-full h-full relative bg-transparent">
        {Array.from({ length: 3 }).map((_, index) => {
          return <Star index={index} />;
        })}
      </div>
      <div className="col-start-2 row-start-1 w-full h-full relative bg-transparent">
        {Array.from({ length: 2 }).map((_, index) => {
          return <Star index={index} />;
        })}
      </div>
      <div className="col-start-2 row-start-2 w-full h-full relative bg-transparent">
        {Array.from({ length: 2 }).map((_, index) => {
          return <Star index={index} />;
        })}
      </div>
      <div className="col-start-2 row-start-3 w-full h-full relative bg-transparent">
        {Array.from({ length: 1 }).map((_, index) => {
          return <Star index={index} />;
        })}
      </div>
      <div className="col-start-1 row-start-3 w-full h-full relative bg-transparent">
        {Array.from({ length: 1 }).map((_, index) => {
          return <Star index={index} />;
        })}
      </div>
      <span className="col-start-1 row-start-2 col-span-1 text-8xl text-accent font-semibold">
        Hi,
        <div className=" border-accent border-8 rounded-full w-52 aspect-square inline-block animate-[shadow_12s_linear_infinite] p-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1681566925827-d1969127dd3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="-z-10 opacity-60 min-w-full min-h-full object-cover rounded-full"
          />
        </div>
        <br /> I'm Hieu <br />
        <p className="text-black text-2xl max-w-[40vw]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, necessitatibus quas
          laboriosam ad consequuntur repellendus consequatur
        </p>
      </span>
    </section>
  );
}
