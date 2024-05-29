import Button from "./Button";
import Field from "./Field";
import { cardDetailsFormSchema } from "../schemas/cardDetailsFormSchema";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

type cardDetailsType = z.infer<typeof cardDetailsFormSchema>;
function Form() {
  const [month, setMonth] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<cardDetailsType>({
    resolver: zodResolver(cardDetailsFormSchema),
  });

  const onSubmit: SubmitHandler<cardDetailsType> = (data) => {
    console.log(data);
    reset();
  };

  const handleMonthValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") setMonth("");
    if (isNaN(Number(e.target.value))) return;
    setMonth(e.target.value);
  };

  const handleCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value;
    setCardNumber(
      sanitizedValue
        .replace(/[^\d]/g, "")
        .slice(0, 16)
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field id="name" label="CARDHOLDER NAME">
        <input
          {...register("name")}
          id="name"
          type="text"
          placeholder="e.g. Jane Appleseed"
        />
      </Field>
      <Field id="cardnumber" label="CARD NUMBER">
        <input
          {...register("cardnumber")}
          id="cardnumber"
          type="text"
          value={cardNumber}
          onChange={handleCardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
        />
        {errors.cardnumber && <span>{errors.cardnumber.message}</span>}
      </Field>
      <div>
        <label>
          <span>EXP. DATE (MM/YY)</span>
          <div>
            <input
              {...register("expmonth")}
              id="expdate"
              type="text"
              inputMode="numeric"
              maxLength={2}
              placeholder="MM"
              value={month}
              max={12}
              onChange={handleMonthValueChange}
            />
            <input {...register("expyear")} type="number" placeholder="YY" />
          </div>
        </label>
        <Field id="cvc" label="CVC">
          <input
            {...register("cvc")}
            id="cvc"
            type="number"
            placeholder="eg. 123"
          />
        </Field>
      </div>

      <Button />
    </form>
  );
}

export default Form;
