import { ICategory } from "@/types";
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema<ICategory>({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	thumbnail: {
		type: String,
	},
});

export const Category = mongoose.models.Category ?? mongoose.model("Category", categorySchema);
