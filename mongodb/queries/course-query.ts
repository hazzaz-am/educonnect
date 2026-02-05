import { Category, Course } from "../models";

export const getCourses = async () => {
	try {
		const courses = await Course.find().populate({
			path: "category",
			model: Category,
		});
		return courses;
	} catch (error) {
		console.log(error);
	}
};
