import { IUser } from "@/types";
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  socialMedia: {
    type: Object,
  },
  profilePicture: {
    type: String,
  },
})

export const User = mongoose.models.User ?? mongoose.model("User", userSchema)