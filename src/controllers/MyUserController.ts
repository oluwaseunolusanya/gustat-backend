import { Request, Response } from "express";

const createCurrentUser = async (req: Request, res: Response) => {
    // 1. Check if the user exists
    // 2. If not create the user
    // 3. Return the user object to the calling client
};

export default {
    createCurrentUser,
};