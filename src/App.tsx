import { useState } from "react";
import Form from "./components/Form";
import { initalValue } from "./constants/constants";

function App() {
  const [formData, setFormData] = useState(initalValue);

  return (
    <section>
      <div></div>
      <div>
        <Form formData={formData} handleFormData={setFormData} />
      </div>
    </section>
  );
}

export default App;
