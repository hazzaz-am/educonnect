import { z } from "zod";
import { CategoryDTOSchema } from "./category.dto";
import { ModuleDTOSchema } from "./module.dto";
import { TestimonialDTOSchema } from "./testimonial.dto";
import { UserDTOSchema } from "./user.dto";

export const CourseDTOSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	thumbnail: z.string().nullable(),
  active: z.boolean(),
	price: z.number(),
	category: CategoryDTOSchema,
	instructor: UserDTOSchema,
	modules: z.array(ModuleDTOSchema),
	testimonials: z.array(TestimonialDTOSchema),
  quizSet: z.string()
});

export type CourseDTO = z.infer<typeof CourseDTOSchema>;
