import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "nama wajib di isi"),
  email: z.string().min(1, "email wajib di isi"),
  textMessage: z.string().min(1, "pesan wajib di isi"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
