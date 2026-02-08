import { CourseDTO } from "@/schemas/course.dto";
import { ICoursePopulated } from "@/types";

export const mapCourseToDTO = (course: ICoursePopulated): CourseDTO => ({
	id: course._id.toString(),
	title: course.title,
	description: course.description,
	thumbnail: course.thumbnail ?? null,
	price: course.price,
	testimonials: course.testimonials.map((t) => ({
		id: t._id.toString(),
		content: t.content,
		rating: t.rating,
		courseId: t.courseId,
		userId: t.userId,
	})),
});
