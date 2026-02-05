import { ObjectId } from "mongoose";

export interface IModule {
  _id: string;
  title: string;
  description: string;
  status: string;
  slug: string;
  course: ObjectId
  lessonIds: ObjectId[]
}