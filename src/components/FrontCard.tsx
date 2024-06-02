import { motion } from "framer-motion";
import { cardDetailsType } from "./Form";

const animateFrontVariant = {
  mobile: {
    x: [-600, 80, 40],
    y: [120, 120, 120],
    opacity: [0, 1, 1],
  },
  tablet: {
    x: [-600, 250, 180],
    y: [120, 120, 120],
    opacity: [0, 1, 1],
  },
  desktop: {
    x: [-600, 180, 165],
    y: [190, 190, 190],
    opacity: [0, 1, 1],
  },
};

function FrontCard({
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
      variants={animateFrontVariant}
      transition={{ duration: 1 }}
      className="px-5 py-4 text-lg absolute bg-[url('/images/bg-card-front.webp')] z-10 w-[17rem] md:w-[22rem] md:h-[12rem] xl:w-[27.8rem] bg-cover h-[9.35rem] md:py-6 md:px-8 xl:h-[15.3rem] shadow-2xl"
    >
      <div className="mb-10 xl:mb-[4.5rem]">
        <img
          className="md:w-[4rem] xl:w-[5rem]"
          src="/images/card-logo.svg"
          width={50}
          height={40}
          alt=""
        />
      </div>
      <span className="block text-center tracking-widest text-[1.1rem] text-customNeutral-400 md:text-[1.2rem] xl:text-[1.8rem]">
        {formData.cardnumber ? formData.cardnumber : "0000 0000 0000 0000"}
      </span>
      <div className="flex justify-between md:mt-6">
        <span className="text-[12px] tracking-widest text-customNeutral-400 md:text-base">
          {formData.name ? formData.name.toUpperCase() : "JANE APPLESEED"}
        </span>
        <span className="text-[12px] tracking-widest text-customNeutral-400 md:text-base">
          {`${
            formData.expmonth
              ? Number(formData.expmonth) < 10
                ? "0" + formData.expmonth
                : formData.expmonth
              : "00"
          }` +
            "/" +
            `${formData.expyear ? formData.expyear : "00"}`}
        </span>
      </div>
    </motion.div>
  );
}

export default FrontCard;
