import { useEffect, useState } from "react";
import Form from "./components/Form";
import { initalValue } from "./constants/constants";
import { motion } from "framer-motion";
import Success from "./components/Success";

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

function App() {
  const [formData, setFormData] = useState(initalValue);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onSubmitHandler = () => {
    setIsSubmitted((value) => !value);
  };
  return (
    <section className="flex flex-col min-h-svh lg:flex-row">
      <div className="relative max-lg:h-[15rem] lg:basis-[38%] bg-[url('/images/bg-main-mobile.png')] lg:bg-[url('/images/bg-main-desktop.png')] bg-cover">
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
          className="px-5 py-4 text-lg absolute bg-[url('/images/bg-card-front.png')] z-10 w-[17rem] md:w-[22rem] md:h-[12rem] xl:w-[27.8rem] bg-cover h-[9.35rem] md:py-6 md:px-8 xl:h-[15.3rem] shadow-2xl"
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
            className="md:w-[23rem] xl:h-[15.3rem] xl:w-[27.8rem]"
            src="/images/bg-card-back.png"
            width={290}
            height={100}
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center max-lg:pt-[5.5rem] max-md:px-5 md:px-20 max-lg:pb-[3rem] lg:ps-44 lg:w-3/4 lg:pt-64 lg:pb-72">
        {isSubmitted ? (
          <Success handleContinue={onSubmitHandler} />
        ) : (
          <Form
            formData={formData}
            handleOnSubmit={onSubmitHandler}
            handleFormData={setFormData}
          />
        )}
      </div>
    </section>
  );
}

export default App;
