import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";

declare global{
    namespace Express {
        interface Request {
            userId: string;
            auth0Id: string;
        }
    }
};

// Middleware for JWT authenticaltion with express OAuth2 JWT bearer
export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});

// Middleware to parse and validate JWT token
export const jwtParse = async(
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith("Bearer ")){
        return res.sendStatus(401);
    };

    // Extract token from authorisation header
    const token = authorization.split(" ") [1];

    try {
        // Decode token to get payload
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        // Find user by Auth0 ID
        const user = await User.findOne({ auth0Id });

        if(!user){
            return res.sendStatus(401);
        };

        // Attach Auth0 ID and User ID to the  request
        req.auth0Id = auth0Id as string;
        req.userId = user._id.toString(); 
        next(); // Proceed to the next middleware or route handler
        
    } catch (error) {
        return res.sendStatus(401);
    }
};