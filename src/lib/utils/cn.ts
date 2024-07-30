import { twMerge } from 'tailwind-merge';
import { type ClassValue, clsx } from 'clsx';

export default function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes))
}
