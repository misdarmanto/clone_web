import { z } from "zod";

export const loginSchema = z.object({
  nip: z
    .string()
    .min(1, "NIP wajib diisi")
    .regex(/^\d{18}$/, "NIP harus terdiri dari 18 digit angka"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/[a-z]/, "Password harus mengandung huruf kecil")
    .regex(/[A-Z]/, "Password harus mengandung huruf besar")
    .regex(/\d/, "Password harus mengandung angka")
    .regex(/[\W_]/, "Password harus mengandung karakter spesial"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
