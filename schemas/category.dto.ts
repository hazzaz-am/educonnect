import { z } from "zod";

export const CategoryDTOSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	thumbnail: z.string(),
});

export type CategoryDTO = z.infer<typeof CategoryDTOSchema>;
