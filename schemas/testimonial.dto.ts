import z from "zod";

export const TestimonialDTOSchema = z.object({
	id: z.string(),
	content: z.string(),
	rating: z.string(),
	courseId: z.string(),
	userId: z.string(),
});

export type TestimonialDTO = z.infer<typeof TestimonialDTOSchema>;
