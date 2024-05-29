import { z } from "zod";

export const cardDetailsFormSchema = z.object({
  name: z.string(),
  cardnumber: z.string(),
  expmonth: z.string(),
  expyear: z.string(),
  cvc: z.string(),
});
