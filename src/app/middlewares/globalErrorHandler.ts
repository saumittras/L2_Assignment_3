// src/middlewares/globalErrorHandler.ts
import { ErrorRequestHandler } from "express";
import { Error as MongooseError } from "mongoose";
import { ApiError } from "../errors/apiError";
import { handleValidationError } from "../errors/handleValidationError";
import { IGenericErrorResponse } from "../interface/error.interface";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let response: IGenericErrorResponse = {
    message: "Something went wrong!",
    success: false,
    error: err,
  };

  if (err instanceof MongooseError.ValidationError) {
    statusCode = 400;
    response = handleValidationError(err);
  }

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    response = {
      message: err.message,
      success: false,
      error: {
        name: "ApiError",
        statusCode: err.statusCode,
      },
    };
  }

  res.status(statusCode).json(response);
};

export default globalErrorHandler;
