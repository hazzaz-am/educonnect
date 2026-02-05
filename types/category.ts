import { ObjectId } from "mongoose";

export interface ICategory {
  _id: ObjectId;
  title: string;
  description: string;
  thumbnail: string;
}