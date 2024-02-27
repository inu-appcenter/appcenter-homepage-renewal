import { extendTheme } from '@chakra-ui/react';
import tailwindConfig from '../tailwind.config.ts';

const {
  theme: {
    extend: { colors },
  },
} = tailwindConfig;

const chakraTheme = extendTheme({
  colors: colors,
});

export default chakraTheme;
