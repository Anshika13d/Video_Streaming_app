//verify the user so that only the desired user can make the changes in its id

import jwt from "jsonwebtoken";
import {createError} from "./error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are not authenticated"))


    //if the token is not valid
    jwt.verify(token, process.env.JWT, (err, user) =>{
        if(err) return next (createError(403, "Token is not valid!"));
        req.user = user;

        //after verification continue where you left so we use next()
        next()
    });
};
