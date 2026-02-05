import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { dbConnect } from "@/mongodb";

const inter = Inter({
	subsets: ["latin"],
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "EduConnect - Best Learning Platform in Bangladesh",
	description: "Explore | Learn | Build | Share",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	await dbConnect()

	return (
		<html lang="en">
			<body className={cn(inter.className, poppins.className)}>
				{children}
				<Toaster richColors position="top-center" />
			</body>
		</html>
	);
}
