import z from "zod";

export const UserDTOSchema = z.object({
	id: z.string(),
	firstName: z.string(),
	lastName: z.string(),
	password: z.string(),
	email: z.string(),
	phone: z.string(),
	role: z.string(),
	bio: z.string(),
	socialMedia: z.string(),
	profilePicture: z.string(),
});

export type UserDTO = z.infer<typeof UserDTOSchema>;
