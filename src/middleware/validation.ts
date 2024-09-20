import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

// Middleware to handle validation errors
const handleValidationErrors = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    // Check for validation errors in request
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

export const validateMyRestaurantRequest = [
    body("restaurantName")
        .notEmpty()
        .withMessage("Restaurant name is required"),
    body("city")
        .notEmpty()
        .withMessage("City is required"),
    body("country")
        .notEmpty()
        .withMessage("Country is required"),
    body("deliveryPrice")
        .isFloat({ min:0 })
        .withMessage("Delivery price must be a positive number"),
    body("estimatedDeliveryTime")
        .isInt({ min:0 })
        .withMessage("Estimated delivery time be a positive integer"),
    body("cuisines")
        .isArray()
        .withMessage("Cuisines must be an array")
        .not()
        .isEmpty()
        .withMessage("Cuisines array cannot be empty"),
    body("menuItems")
        .isArray()
        .withMessage("Menu items must be an array"),
    body("menuItems.*.name")
        .notEmpty()
        .withMessage("Menu items name is required"),
    body("menuItems.*.price")
        .isFloat({ min: 0 })
        .withMessage("Menu items price is required and must a positive number"),
        handleValidationErrors, // Attach validation error handler
]