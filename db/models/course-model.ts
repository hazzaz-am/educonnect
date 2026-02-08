import { ICourseDocument } from "@/types";
import mongoose, { Model, Schema } from "mongoose";

const courseSchema = new Schema<ICourseDocument>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	thumbnail: {
		type: String,
	},
	modules: [
		{
			type: Schema.ObjectId,
			ref: "Module",
		},
	],
	price: {
		required: true,
		type: Number,
	},
	active: {
		required: true,
		type: Boolean,
	},
	category: {
		type: Schema.ObjectId,
		ref: "Category",
	},
	instructor: {
		type: Schema.ObjectId,
	},
	testimonials: [
		{
			type: Schema.ObjectId,
			ref: "Testimonial",
		},
	],
	quizSet: {
		type: Schema.ObjectId,
	},
});

export const Course: Model<ICourseDocument> =
	mongoose.models.Course ?? mongoose.model<ICourseDocument>("Course", courseSchema);
