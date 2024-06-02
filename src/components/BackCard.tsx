import { motion } from "framer-motion";
import { cardDetailsType } from "./Form";

const animateBackVariant = {
  mobile: {
    x: [200, 30, 70],
    y: [30, 30, 30],
    opacity: [0, 1, 1],
  },

  tablet: {
    x: [600, 150, 250],
    y: [8, 8, 8],
    opacity: [0, 1, 1],
  },
  desktop: {
    x: [10, 350, 260],
    y: [470, 470, 470],
    opacity: [0, 1, 1],
  },
};

function BackCard({
  screenWidth,
  formData,
}: {
  screenWidth: number;
  formData: cardDetailsType;
}) {
  return (
    <motion.div
      animate={`${
        screenWidth >= 1024
          ? "desktop"
          : screenWidth >= 700
          ? "tablet"
          : "mobile"
      }`}
      variants={animateBackVariant}
      transition={{ duration: 1 }}
      className="absolute shadow-xl -z-1 min-w-fit h-fit"
    >
      <span className="absolute text-xs text-customNeutral-400 right-[2.4rem] tracking-wider top-[4.4rem] md:top-[5.2rem] xl:top-[6.5rem] md:right-[3rem] md:text-xl">
        {formData.cvc ? formData.cvc : "000"}
      </span>
      <img
        className="md:w-[23rem] aspect-auto xl:w-[27.8rem]"
        src="/images/bg-card-back.webp"
        width={290}
        height={100}
        alt=""
      />
    </motion.div>
  );
}

export default BackCard;
