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
            x: [-600, 30, 15],
            y: [120, 120, 120],
            opacity: [0, 1, 1],
          }}
          transition={{ duration: 1 }}
          className="absolute z-10 min-w-fit h-fit"
        >
          <span className="absolute">43434</span>
          <img
            src="/public/images/bg-card-front.png"
            width={290}
            height={100}
            alt=""
          />
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
