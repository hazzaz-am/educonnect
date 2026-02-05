import { ICourse } from "@/types";
import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema<ICourse>({
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

export const Course = mongoose.models.Course ?? mongoose.model("Course", courseSchema);
