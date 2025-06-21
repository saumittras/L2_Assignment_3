"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const apiError_1 = require("../errors/apiError");
const handleValidationError_1 = require("../errors/handleValidationError");
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let response = {
        message: "Something went wrong!",
        success: false,
        error: err,
    };
    if (err instanceof mongoose_1.Error.ValidationError) {
        statusCode = 400;
        response = (0, handleValidationError_1.handleValidationError)(err);
    }
    if (err instanceof apiError_1.ApiError) {
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
exports.default = globalErrorHandler;
