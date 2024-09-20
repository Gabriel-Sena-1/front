import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const outline = definePartsStyle({
  field: {
    bg: "blackAlpha.50",
    _focusVisible: {
      borderColor: "blue.500",
      boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
    },
  },
});

export const inputTheme = defineMultiStyleConfig({ variants: { outline } });
