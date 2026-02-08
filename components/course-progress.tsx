import { cn } from "@/lib/utils";
import { Progress } from "./ui/progress";

interface CourseProgressProps {
	value: number;
	variant: variantKey;
	size: sizeKey;
}

interface IColorVariant {
	default: string;
	success: string;
}

interface ISizeVariant {
	default: string;
	sm: string;
}

type variantKey = keyof IColorVariant;
type sizeKey = keyof ISizeVariant;

const colorByVariant: IColorVariant = {
	default: "text-sky-700",
	success: "text-emerald-700",
};

const sizeByVariant: ISizeVariant = {
	default: "text-sm",
	sm: "text-xs",
};

export const CourseProgress = ({ value, variant, size }: CourseProgressProps) => {
	return (
		<div>
			<Progress value={value} className={cn("h-2", !variant && "text-sky-700")} />
			<p
				className={cn(
					"font-medium mt-2 text-sky-700",
					colorByVariant[variant || "default"],
					sizeByVariant[size || "default"],
				)}
			>
				{Math.round(value)}% Complete
			</p>
		</div>
	);
};
