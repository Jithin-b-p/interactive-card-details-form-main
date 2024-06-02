import { useEffect, useState } from "react";
import Form from "./components/Form";
import { initalValue } from "./constants/constants";
import Success from "./components/Success";
import FrontCard from "./components/FrontCard";
import BackCard from "./components/BackCard";

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
      <div className="relative max-lg:h-[15rem] lg:basis-[38%] bg-[url('/images/bg-main-mobile.webp')] lg:bg-[url('/images/bg-main-desktop.webp')] bg-cover">
        <FrontCard screenWidth={screenWidth} formData={formData} />
        <BackCard screenWidth={screenWidth} formData={formData} />
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
