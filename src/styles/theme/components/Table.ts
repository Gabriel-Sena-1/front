import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const striped = definePartsStyle({
  tbody: {
    tr: {
      "&:nth-of-type(odd)": {
        td: {
          "input, select": {
            bg: "whiteAlpha.800",
          },
        },
      },
    },
  },
});

export const tableTheme = defineMultiStyleConfig({
  variants: { striped },
  defaultProps: { variant: "striped", colorScheme: "blue" },
});
