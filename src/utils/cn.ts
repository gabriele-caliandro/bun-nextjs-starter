import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Helper function to merge classnames and conditional styles
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
