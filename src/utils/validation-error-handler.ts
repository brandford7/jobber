import { z } from "zod";
import { toast } from "react-toastify"; // Or your preferred toast library

export interface ValidationError {
  path: (string | number)[];
  message: string;
}

export const formatZodError = (error: z.ZodError): ValidationError[] => {
  return error.errors.map((err) => ({
    path: err.path,
    message: err.message,
  }));
};

export const handleValidationError = (error: z.ZodError): ValidationError[] => {
  const formattedErrors = formatZodError(error);

  // Display a toast with the first error
  if (formattedErrors.length > 0) {
    toast.error(formattedErrors[0].message);
  }

  return formattedErrors;
};

export const getFieldErrorMessage = (
  errors: ValidationError[],
  fieldPath: string
): string | undefined => {
  const fieldError = errors.find((err) => err.path[0] === fieldPath);
  return fieldError?.message;
};
