import * as z from "zod";

// Profile form validation schema
export const profileSchema = z.object({
  name: z.string().min(1, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
});

// Address form validation schema
export const addressSchema = z.object({
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State/Province is required"),
  zip: z.string().min(1, "Zip/Postal code is required"),
  country: z.string().min(1, "Country is required"),
});

// Password form validation schema
export const passwordSchema = z.object({
  current: z.string().min(1, "Current password is required"),
  new: z.string().min(6, "New password must be at least 6 characters"),
  confirm: z.string().min(1, "Please confirm your password"),
}).refine((data) => data.new === data.confirm, {
  message: "Passwords don't match",
  path: ["confirm"],
});

// TypeScript types inferred from schemas
export type ProfileFormData = z.infer<typeof profileSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type PasswordFormData = z.infer<typeof passwordSchema>; 