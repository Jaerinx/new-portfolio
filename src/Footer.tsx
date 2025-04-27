import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useVelocity,
} from "motion/react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Footer() {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const [isDark, setIsDark] = useState(true);
  useMotionValueEvent(velocity, "change", (latestValue) => {
    console.log(-latestValue / 200);
    translateY.set(Math.min(Math.max(-latestValue / 200, -30), 30));
  });
  const translateY = useSpring(velocity, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <footer
        className={`fixed w-full flex justify-center duration-200 bottom-5  `}
      >
        <motion.span
          className="border border-black rounded-full w-max p-2 bg-primary/30 backdrop-blur-xs flex gap-2 text-2xl text-black"
          style={{ translateY }}
        >
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Dark mode toggle"
            className=" cursor-pointer inline-block  rounded-full p-0"
          >
            {isDark ? "🌙" : "🔆"}
          </button>
          Hieu Nguyen |
          <GithubOutlined />
          <LinkedinOutlined />
        </motion.span>
      </footer>
    </>
  );
}
