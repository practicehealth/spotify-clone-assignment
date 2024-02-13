import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function shortDescription(description:string) {
  if(description.length < 40) return description;

  return `${description.slice(0,27)}...`
}