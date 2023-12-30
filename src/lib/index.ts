// place files you want to import through the `$lib` alias in this folder.
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
