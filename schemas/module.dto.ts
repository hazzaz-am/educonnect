import z from "zod";
import { LessonDTOSchema } from "./lesson.dto";

export const ModuleDTOSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	status: z.string(),
	slug: z.string(),
	course: z.string(),
	lessonIds: z.array(LessonDTOSchema),
});

export type ModuleDto = z.infer<typeof ModuleDTOSchema>;
