import { Document } from "mongoose";
import { ICourseBase } from "./course";
import { IUser } from "./user";

export interface ITestimonialBase {
	content: string;
	rating: string;
	courseId: string;
	userId: string;
}

export interface ITestimonialDocument extends ITestimonialBase, Document {}

export interface ITestimonialPopulated extends Omit<ITestimonialBase, "courseId" | "userId"> {
	_id: string;
	courseId: ICourseBase;
	userId: IUser;
}
