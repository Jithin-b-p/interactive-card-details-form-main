import Button from "./Button";
import Field from "./Field";

function Form() {
  return (
    <form>
      <Field id="name" label="CARDHOLDER NAME">
        <input id="name" type="text" placeholder="e.g. Jane Appleseed" />
      </Field>
      <Field id="cardnumber" label="CARD NUMBER">
        <input
          id="cardnumber"
          type="number"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </Field>
      <div>
        <Field id="expdate" label="EXP. DATE (MM/YY)">
          <input id="expdate" type="number" placeholder="MM" />
          <input type="number" placeholder="YY" />
        </Field>
        <Field id="cvc" label="CVC">
          <input id="cvc" type="number" placeholder="eg. 123" />
        </Field>
      </div>

      <Button />
    </form>
  );
}

export default Form;
