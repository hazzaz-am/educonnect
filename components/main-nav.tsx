"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useState } from "react";

import lwsLogo from "@/assets/lws_logo.svg";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { MobileNav } from "./mobile-nav";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { navLinks } from "@/data";

interface MainNavProps {
	children?: ReactNode;
}

export function MainNav({ children }: MainNavProps) {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<div className="flex gap-6 lg:gap-10">
				<Link href="/">
					<Image className="max-w-25" src={lwsLogo} alt="Logo" />
				</Link>
				{navLinks?.length ? (
					<nav className="hidden gap-6 lg:flex">
						{navLinks?.map((item, index) => (
							<Link
								key={index}
								href={item.disabled ? "#" : item.href}
								className={cn(
									"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
								)}
							>
								{item.title}
							</Link>
						))}
					</nav>
				) : null}

				{showMobileMenu && navLinks && <MobileNav>{children}</MobileNav>}
			</div>
			<nav className="flex items-center gap-3">
				<div className="items-center gap-3 hidden lg:flex">
					<Link href="/login" className={cn(buttonVariants({ size: "sm" }), "px-4")}>
						Login
					</Link>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" size="sm">
								Register
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-56 mt-4">
							<DropdownMenuItem className="cursor-pointer">
								<Link href="">Student</Link>
							</DropdownMenuItem>
							<DropdownMenuItem className="cursor-pointer">
								<Link href="">Instructor</Link>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<div className="cursor-pointer">
							<Avatar>
								<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-56 mt-4">
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="account">Profile</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="account/enrolled-courses">My Courses</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="">Testimonials & Certificates</Link>
						</DropdownMenuItem>
						<DropdownMenuItem className="cursor-pointer" asChild>
							<Link href="">Logout</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
				<button className="flex items-center space-x-2 lg:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
					{showMobileMenu ? <X /> : <Menu />}
				</button>
			</nav>
		</>
	);
}
