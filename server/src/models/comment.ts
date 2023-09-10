import mongoose from "mongoose";
import { Comment } from "../interface/comment";

const commentSchema = new mongoose.Schema<Comment>({
    star: { type: Number },
    comment: { type: String },
    user: { type: String },
    product: { type: String },
});

const CommentModel = mongoose.model<Comment>("Comment", commentSchema);
module.exports = CommentModel;
