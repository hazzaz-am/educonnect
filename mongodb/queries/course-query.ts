import { Category, Course, Module, Testimonial, User } from "../models";

export const getCourses = async () => {
	try {
		const courses = await Course.find()
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
			});
		return courses;
	} catch (error) {
		console.log(error);
	}
};
