import { Error } from "mongoose";
import { IGenericErrorResponse } from "../interface/error.interface";

export const handleValidationError = (
  err: Error.ValidationError
): IGenericErrorResponse => {
  return {
    message: "Validation failed",
    success: false,
    error: err,
  };
};
