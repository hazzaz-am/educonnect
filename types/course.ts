import { Document, ObjectId } from "mongoose";
import { ICategory } from "./category";
import { IModule } from "./module";
import { IQuiz } from "./quiz";
import { IUser } from "./user";
import { ITestimonialPopulated } from "./testimonial";

export interface ICourseBase {
	title: string;
	description: string;
	thumbnail: string;
	modules: ObjectId[];
	price: number;
	active: boolean;
	category: ObjectId;
	instructor: ObjectId;
	testimonials: ObjectId[];
	quizSet: ObjectId;
}

export interface ICourseDocument extends ICourseBase, Document {}

export interface ICoursePopulated extends Omit<
	ICourseBase,
	"category" | "instructor" | "modules" | "testimonials" | "quizSet"
> {
	_id: string;
	category: ICategory;
	instructor: IUser;
	modules: IModule[];
	testimonials: ITestimonialPopulated[];
	quizSet: IQuiz;
}
