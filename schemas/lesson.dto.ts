import z from "zod";

export const LessonDTOSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	video_url: z.url(),
	published: z.boolean(),
	slug: z.string(),
	access: z.enum(["private", "public"]),
});

export type LessonDTO = z.infer<typeof LessonDTOSchema>;
