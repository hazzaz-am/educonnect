import { ICoursePopulated } from "@/types";
import { Category, Course, Module, Testimonial, User } from "../models";

export const getCourseList = async (): Promise<ICoursePopulated[]> => {
	// try {
	const courses = await Course.find({})
		.select(["title", "description", "thumbnail", "price", "category", "instructor", "testimonials", "modules"])
		.populate({
			path: "category",
			model: Category,
		})
		.populate({
			path: "instructor",
			model: User,
		})
		.populate({
			path: "testimonials",
			model: Testimonial,
		})
		.populate({
			path: "modules",
			model: Module,
		})
		.lean<ICoursePopulated[]>();

	return courses;
	// } catch (error) {
	// 	console.log(error);
	// }
};
