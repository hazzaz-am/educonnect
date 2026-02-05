import { ITestimonial } from "@/types";
import mongoose, { Schema } from "mongoose";

const testimonialSchema = new Schema<ITestimonial>({
	content: {
		type: String,
		required: true,
	},
	rating: {
		type: String,
		required: true,
	},
	courseId: {
		type: String,
		required: true,
	},
	userId: {
		type: String,
		required: true,
	},
});

export const Testimonial = mongoose.models.Testimonial ?? mongoose.model("Testimonial", testimonialSchema);
