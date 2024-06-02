import { z } from "zod";

export const cardDetailsFormSchema = z.object({
  name: z.string().min(1, { message: "Can't be blank" }),
  cardnumber: z.string().refine(
    (value) => {
      if (value === "") return false;
      if (value.length < 16) return false;
      return !value.match(/[A-Za-z]/g);
    },
    { message: "Wrong format, numbers only" }
  ),
  expmonth: z.string().min(1, { message: "Can't be blank" }),
  expyear: z.string().min(1, { message: "Can't be blank" }),
  cvc: z.string().min(1, { message: "Can't be blank" }),
});
