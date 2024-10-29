import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const outline = definePartsStyle({
  field: {
    bg: "blackAlpha.50",
    _focusVisible: {
      borderColor: "blue.500",
      boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)",
    },
  },
});

export const SelectTheme = defineMultiStyleConfig({
  baseStyle: { ...outline },
  variants: { outline },
});
