import Button from "./Button";
import Field from "./Field";
import { cardDetailsFormSchema } from "../schemas/cardDetailsFormSchema";

import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";

export type cardDetailsType = z.infer<typeof cardDetailsFormSchema>;
function Form({
  formData,
  handleFormData,
  handleOnSubmit,
}: {
  formData: cardDetailsType;
  handleFormData: Dispatch<SetStateAction<cardDetailsType>>;
  handleOnSubmit: () => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<cardDetailsType>({
    resolver: zodResolver(cardDetailsFormSchema),
  });

  const onSubmit: SubmitHandler<cardDetailsType> = () => {
    handleOnSubmit();
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
      .replace(/[^a-zA-Z\d]/g, "")
      .slice(0, 16)
      .replace(/([\da-zA-Z]{4})/g, "$1 ")
      .trim();

    handleFormData({ ...formData, [name]: newValue });
  };

  const oncvcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value === "") handleFormData({ ...formData, [name]: "" });
    if (isNaN(Number(value))) return;

    handleFormData({ ...formData, [name]: value });
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (value === "") handleFormData({ ...formData, [name]: "" });

    handleFormData({ ...formData, [name]: value });
  };

  return (
    <form
      className="flex flex-col gap-4 lg:w-[55%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field id="name" label="CARDHOLDER NAME">
        <span className="p-[1px] pb-[1.4px] pe-[1.1px] input">
          <input
            className="w-full px-4 py-2 text-lg border-none rounded-lg placeholder:text-customNeutral-300 border-customNeutral-300"
            {...register("name")}
            id="name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            onChange={onNameChange}
          />
        </span>
        {errors.name && (
          <span className="text-xs text-customErrorRed">
            {errors.name.message}
          </span>
        )}
      </Field>
      <Field id="cardnumber" label="CARD NUMBER">
        <span className="p-[1px] pe-[1.2px] py-[1.5px] input">
          <input
            className="w-full border-none placeholder:text-customNeutral-300 border-[1px] text-lg px-4 py-2 border-customNeutral-300 rounded-lg"
            {...register("cardnumber")}
            id="cardnumber"
            type="text"
            value={formData.cardnumber}
            onChange={onCardNumberChange}
            placeholder="e.g. 1234 5678 9123 0000"
          />
        </span>
        {errors.cardnumber && (
          <span className="text-xs text-customErrorRed">
            {errors.cardnumber.message}
          </span>
        )}
      </Field>
      <div className="flex gap-3">
        <label className="flex flex-col w-1/2 gap-2">
          <span className="text-sm font-bold tracking-wider">
            EXP. DATE (MM/YY)
          </span>
          <div className="flex gap-2">
            <span className="w-1/2 px-[1.3px] py-[1.5px] input">
              <input
                className="w-full border-none placeholder:text-customNeutral-300 border-[1px]  text-lg px-4 py-2 border-customNeutral-300 rounded-lg"
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
            </span>
            <span className="w-1/2 px-[1.3px] py-[1px] input">
              <input
                className="w-full border-none border-[1px] text-lg px-4 py-2 placeholder:text-customNeutral-300 border-customNeutral-300 rounded-lg"
                {...register("expyear")}
                type="text"
                placeholder="YY"
                maxLength={2}
                value={formData.expyear}
                onChange={onYearChange}
              />
            </span>
          </div>
          {(errors.expmonth || errors.expyear) && (
            <span className="text-xs text-customErrorRed">
              {errors.expmonth
                ? errors.expmonth.message
                : errors.expyear?.message}
            </span>
          )}
        </label>
        <div className="w-1/2">
          <Field id="cvc" label="CVC">
            <span className="px-[1.4px] py-[1.5px] input">
              <input
                className="w-full px-4 py-2 text-lg border-none rounded-lg placeholder:text-customNeutral-300 border-customNeutral-300"
                {...register("cvc")}
                id="cvc"
                type="text"
                maxLength={3}
                placeholder="eg. 123"
                onChange={oncvcChange}
                value={formData.cvc}
              />
            </span>
            {errors.cvc && (
              <span className="text-xs text-customErrorRed">
                {errors.cvc.message}
              </span>
            )}
          </Field>
        </div>
      </div>

      <Button>Confirm</Button>
    </form>
  );
}

export default Form;
