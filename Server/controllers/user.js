import { createError } from "../error.js"
import User from "../models/User.js"
import Video from "../models/Video.js";

export const update = async (req, res, next) => {
    //compare the jwt id and the user id so that the user is verified


    //here the req.user.id is coming from jwt ans req.params.id is coming from the user

    if(req.params.id === req.user.id){
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id,
                {
                    $set:req.body,
                },
                {
                    //adding this so that we can see the new change
                    new: true
                }
            )
            res.status(200).json(updatedUser)
        }
        catch(err){
            next(err)
        }
    }
    else{
        return next(createError(403, " You can update only your account! "))
    }
};

export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id){
        try{
            await User.findByIdAndDelete(req.params.id,
                
            );

            res.status(200).json("user has been deleted")
        }
        catch(err){
            next(err)
        }
    }
    else{
        return next(createError(403, " You can delete only your account! "))
    }
}

export const getUser = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        next(err)
    }
};

//for subscribing we need other user's id 
export const subscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $push:{subscribedUsers:req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id, {
            //$inc is a mongodb method to increment the count so we are usign here to increment the subscribers for the user
            $inc:{subscribers: 1},
        });

        res.status(200).json("Subsciption done.");
    }
    catch(err){
        next(err);
    }
}

export const unsubscribe = async (req, res, next) => {
    try{
        await User.findByIdAndUpdate(req.user.id,{
            $pull:{subscribedUsers:req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id, {
            //$inc is a mongodb method to increment the count so we are usign here to increment the subscribers for the user
            $inc:{subscribers: -1},
        });

        res.status(200).json("Unsubsciption done.")
    }
    catch(err){
        next(err);
    }
}

export const like = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
// this $addtoSet method will ensure that no matter how many times you click the like button it will, your id will only be present once so its like a set

            $addToSet:{likes:id},

            //if you dislike the video before so it will pull out the user id 
            $pull:{dislikes:id}
        })

        res.status(200).json("The video has been liked!")
    }
    catch(err){
        next(err);
    }
}

export const dislike = async (req, res, next) => {
    const id = req.user.id;
    const videoId = req.params.videoId;
    try{
        await Video.findByIdAndUpdate(videoId, {
            $addToSet:{dislikes:id},
            $pull:{likes:id}
        })

        res.status(200).json("The video has been disliked!")
    }
    catch(err){
        next(err);
    }
}
