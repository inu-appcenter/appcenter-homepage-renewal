import { PART, SECTION } from '@constants/common.ts';

export type Part = keyof typeof PART;
export type PartParam = { part: Part };

export type Team = Exclude<keyof typeof PART, 'common'>;
export type TeamParam = { part: Team };

export type Section = keyof typeof SECTION;
export type SectionParam = { section: Section };

export type Primitive = number | string | boolean | null | undefined;
