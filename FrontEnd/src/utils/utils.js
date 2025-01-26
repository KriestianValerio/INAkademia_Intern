import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function limitCharacters(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  } else {
    return text;
  }
}

export function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} hour${hours !== 1 ? "s" : ""} ${remainingMinutes} minute${remainingMinutes !== 1 ? "s" : ""}`;
}

export const filterTime = (date) => {
  const isPastTime = new Date().getTime() > date.getTime();
  return !isPastTime;
};

export function createSmpSma() {
  const array = [];

  for (let i = 7; i <= 12; i++) {
    array.push({ label: i, value: i });
  }

  return array;
}

export function createMahasiswa() {
  const array = [];

  for (let i = 1; i <= 8; i++) {
    array.push({ label: i, value: i });
  }

  return array;
}
