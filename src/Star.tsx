import { motion } from "framer-motion";
import { AppearingVariants, starVariants } from "./LandingVariants";
import star from "/cross-svgrepo-com.svg";

const Star = ({ index }: { index: number }) => {
  return (
    <motion.div
      variants={AppearingVariants}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        position: "absolute"
      }}
    >
      <div>
        <motion.img
          src={star}
          alt=""
          variants={starVariants}
          initial="initial"
          animate="animate"
          className="star"
          transition={{
            delay: index * 0.1,
            duration: 8 + Math.floor(Math.random() * 4),
            repeat: Infinity
          }}
          style={{ width: `${Math.random() * 0.8}vw` }}
        />
      </div>
    </motion.div>
  );
};

export default Star;
