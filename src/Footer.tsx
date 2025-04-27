import { motion, useMotionValueEvent, useScroll, useSpring, useVelocity } from "motion/react";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
export default function Footer() {
  const { scrollY, scrollYProgress } = useScroll();
  const [, setScroll] = useState(0);
  const velocity = useVelocity(scrollY);
  const [isDark, setIsDark] = useState(false);
  useMotionValueEvent(velocity, "change", (latestValue) => {
    translateY.set(-latestValue / 200);
  });

  useMotionValueEvent(scrollYProgress, "change", (latestValue) => {
    setScroll(latestValue);
  });
  const translateY = useSpring(velocity, {
    stiffness: 3000,
    damping: 100,
    restDelta: 0.0001
  });
  useEffect(() => {
    const app = document.getElementById("app");
    if (isDark) {
      app?.classList.add("dark");
      app?.classList.remove("light");
    } else {
      app?.classList.add("light");
      app?.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <>
      <footer
        className={`fixed w-full flex justify-center duration-200 delay-200 z-100  ${
          scrollYProgress.get() == 1 ? "bottom-0 bg-primary_darker" : "bottom-5"
        }`}
      >
        <motion.span
          className={` ${
            scrollYProgress.get() == 1 ? "w-full border-t" : "w-max rounded-full border"
          } p-2 bg-primary/30 backdrop-blur-xs flex gap-2 text-2xl justify-center text-black duration-200 border-black `}
          style={{ translateY }}
        >
          Hieu Nguyen |
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Dark mode toggle"
            className=" cursor-pointer inline-block  rounded-full p-0"
          >
            {isDark ? "🌙" : "🔆"}
          </button>
          <GithubOutlined />
          <LinkedinOutlined />
        </motion.span>
      </footer>
    </>
  );
}
