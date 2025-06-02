import { Request, Response } from "express";
import { CreatePost, Post } from "../schemas/posts.schemas";
import { createPostService } from "../services/createPost.service";

export const createPostController=async(req:Request,res:Response):Promise<Response>=>{

    const postData:CreatePost = req.body
    const userId = req.user.id
    const post: Post = await createPostService(postData)

    return res.status(201).json(post)

}