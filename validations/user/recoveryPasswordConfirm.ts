import { z } from "zod";

export const recoveryPasswordConfirmSchema = z.object({
    newPassword: z
        .string({
            required_error: "New password is required",
            invalid_type_error: "New password must be a string",
        })
        .min(6, {message: "New password must be at least 6 characters long"}),
    confirmPassword: z
        .string({
            required_error: "Confirm password is required",
            invalid_type_error: "Confirm password must be a string",
        })
        .min(6, {message: "Confirm password must be at least 6 characters long"}),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "New password and confirm password must match",
    path: ["confirmPassword"],
});