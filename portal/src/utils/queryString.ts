import { Primitive } from '@type/common.ts';

export type QueryStringObject = { [key: string]: Primitive | Primitive[] };
export const objectToQueryString = (obj: QueryStringObject) => {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (value !== 0 && !value) return;
      if (!Array.isArray(value))
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

      return value
        .map((v) => {
          if (v !== 0 && !v) return;
          return `${encodeURIComponent(key)}}=${encodeURIComponent(v)}`;
        })
        .join('&');
    })
    .join('&');
};
