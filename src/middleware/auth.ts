import { Request, Response, NextFunction } from "express";
import { auth } from "express-oauth2-jwt-bearer";
import jwt from "jsonwebtoken";
import User from "../models/user";

export const jwtCheck = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    tokenSigningAlg: 'RS256'
});

export const jwtParse = async(
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const { authorization } = req.headers;

    if(!authorization || !authorization.startsWith("Bearer ")){
        return res.sendStatus(401);
    };

    // Get token from authorisation header
    const token = authorization.split(" ") [1];

    try {
        const decoded = jwt.decode(token) as jwt.JwtPayload;
        const auth0Id = decoded.sub;

        const user = await User.findOne({ auth0Id });
        
    } catch (error) {
        return res.sendStatus(401);
    }
};