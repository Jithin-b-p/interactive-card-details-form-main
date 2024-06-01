import { useState } from "react";
import Form from "./components/Form";
import { initalValue } from "./constants/constants";
import { motion } from "framer-motion";

function App() {
  const [formData, setFormData] = useState(initalValue);

  return (
    <section className="flex flex-col h-full md:flex-row">
      <div className="relative max-md:h-[15rem] md:basis-1/2 bg-[url('/images/bg-main-mobile.png')]">
        <motion.div
          animate={{
            x: [-600, 30, 18],
            y: [120, 120, 120],
            opacity: [0, 1, 1],
          }}
          transition={{ duration: 1 }}
          className="px-5 py-4 text-lg absolute bg-[url('/images/bg-card-front.png')] z-10 w-[17rem] bg-contain h-[9.35rem]"
        >
          <div className="mb-10">
            <img src="/images/card-logo.svg" width={50} height={40} alt="" />
          </div>
          <span className="tracking-widest text-customNeutral-400">
            {formData.cardnumber ? formData.cardnumber : "0000 0000 0000 0000"}
          </span>
          <div className="flex justify-between">
            <span className="text-[12px] tracking-widest text-customNeutral-400">
              {formData.name ? formData.name.toUpperCase() : "JANE APPLESEED"}
            </span>
            <span className="text-[12px] tracking-widest text-customNeutral-400">
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
          animate={{
            x: [200, 30, 70],
            y: [30, 30, 30],
            opacity: [0, 1, 1],
          }}
          transition={{ duration: 1 }}
          className="absolute -z-1 min-w-fit h-fit"
        >
          <span className="absolute text-xs text-customNeutral-400 right-[2.4rem] tracking-wider top-[4.4rem]">
            {formData.cvc ? formData.cvc : "000"}
          </span>
          <img
            src="/public/images/bg-card-back.png"
            width={290}
            height={100}
            alt=""
          />
        </motion.div>
      </div>
      <div className="flex items-center justify-center max-md:pt-[5.5rem] max-md:px-5 max-md:pb-[3rem] md:w-3/4">
        <Form formData={formData} handleFormData={setFormData} />
      </div>
    </section>
  );
}

export default App;
