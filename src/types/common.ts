import {PART, SECTION} from "../constants/common.ts";

export type Part = keyof typeof PART;
export type PartParam = { part: Part;}

export type Section = keyof typeof SECTION;
export type SectionParam = { section: Section }
