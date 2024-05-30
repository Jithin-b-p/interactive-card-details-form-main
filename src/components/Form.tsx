import Button from "./Button";
import Field from "./Field";
import { cardDetailsFormSchema } from "../schemas/cardDetailsFormSchema";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { initalValue } from "../constants/constants";

type cardDetailsType = z.infer<typeof cardDetailsFormSchema>;
function Form({
  formData,
  handleFormData,
}: {
  formData: cardDetailsType;
  handleFormData: Dispatch<SetStateAction<cardDetailsType>>;
}) {
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
    handleFormData(initalValue);
    reset();
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value === "") handleFormData({ ...formData, [name]: "" });
    if (isNaN(Number(value))) return;
    if (Number(value) > 12) {
      handleFormData({ ...formData, [name]: "12" });
      return;
    }
    handleFormData({ ...formData, [name]: value });
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") handleFormData({ ...formData, [name]: "" });
    if (isNaN(Number(value))) return;
    handleFormData({ ...formData, [name]: value });
  };

  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = value;
    const newValue = sanitizedValue
      .replace(/[^\d]/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();

    handleFormData({ ...formData, [name]: newValue });
  };

  const oncvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") handleFormData({ ...formData, [name]: "" });
    if (isNaN(Number(value))) return;

    handleFormData({ ...formData, [name]: value });
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
          value={formData.cardnumber}
          onChange={onCardNumberChange}
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
              value={formData.expmonth}
              max={12}
              onChange={onMonthChange}
            />
            <input
              {...register("expyear")}
              type="text"
              placeholder="YY"
              maxLength={2}
              value={formData.expyear}
              onChange={onYearChange}
            />
          </div>
        </label>
        <Field id="cvc" label="CVC">
          <input
            {...register("cvc")}
            id="cvc"
            type="text"
            maxLength={3}
            placeholder="eg. 123"
            onChange={oncvcChange}
            value={formData.cvc}
          />
        </Field>
      </div>

      <Button />
    </form>
  );
}

export default Form;
