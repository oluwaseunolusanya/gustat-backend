import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

// Middleware to handle validation errors
const handleValidationErrors = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // Chel for validation errors in request
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    };
    next(); // Proceed to the next middleware or route handler
};

// Validation rules for user-related requests
export const validateMyUserRequest = [
    body("name")
        .isString()
        .notEmpty()
        .withMessage("Name must be a string"),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("Address Line1 must be a string"),
    body("city")
        .isString()
        .notEmpty()
        .withMessage("City must be a string"),
    body("country")
        .isString()
        .notEmpty()
        .withMessage("Country must be a string"),
    handleValidationErrors, // Attach validation error handler
];