import { ObjectId } from "mongoose";

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  phone: string;
  role: string;
  bio: string;
  socialMedia: object;
  profilePicture: string;
}