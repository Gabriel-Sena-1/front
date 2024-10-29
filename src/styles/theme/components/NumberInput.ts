import { numberInputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(numberInputAnatomy.keys);

const outline = definePartsStyle({
  field: {
    bg: "blackAlpha.50",
    _focusVisible: {
      borderColor: "green.500",
      boxShadow: "0 0 0 1px var(--chakra-colors-green-500)",
    },
  },
});

export const numberInputTheme = defineMultiStyleConfig({
  variants: { outline },
});
