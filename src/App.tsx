import { useState } from "react";
import Form from "./components/Form";
import { initalValue } from "./constants/constants";

function App() {
  const [formData, setFormData] = useState(initalValue);

  return (
    <section className="flex flex-col h-full md:flex-row">
      <div className="max-md:p-[7.5rem] md:basis-1/2 bg-[url('/images/bg-main-mobile.png')]"></div>
      <div className="flex items-center justify-center max-md:pt-[5.5rem] max-md:px-5 max-md:pb-[3rem] md:w-3/4">
        <Form formData={formData} handleFormData={setFormData} />
      </div>
    </section>
  );
}

export default App;
