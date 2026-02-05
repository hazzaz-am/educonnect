import { ObjectId } from "mongoose";

export interface ICourse {
  _id: ObjectId;
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
