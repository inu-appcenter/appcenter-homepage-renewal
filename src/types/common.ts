import {PART} from "../constants/common.ts";

export type Part = keyof typeof PART;
export type PartParam = { part: Part;}
