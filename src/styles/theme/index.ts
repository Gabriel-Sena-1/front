import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./components/Input";
import { SelectTheme } from "./components/Select";
import { numberInputTheme } from "./components/NumberInput";
import { tableTheme } from "./components/Table";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontSize: "sm",
        lineHeight: "tall",
      },
      "&::-webkit-scrollbar": {
        width: "8px",
      },
      "&::-webkit-scrollbar-track": {
        width: "16px",
        background: "whiteAlpha.800",
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: "24px",
        background: "blue.500",
        width: "16px",
      },
      input: {
        color: "gray.700",
        _placeholder: {
          color: "gray.500",
        },
      },
      ".rdp-caption_label": {
        textTransform: "capitalize",
      },
      ".custom-selected:not([disabled])": {
        backgroundColor: "#399469",
        color: "white",
      },
      ".custom-selected:hover:not([disabled]):not(.rdp-day_selected)": {
        backgroundColor: "#276749",
      },
    },
    colors: {
      blue: {
        50: "#f0f9ff", // Sky muito claro
        100: "#e0f2fe", // Sky claro
        200: "#bae6fd", // Sky claro médio
        300: "#7dd3fc", // Sky médio
        400: "#38bdf8", // Sky padrão
        500: "#0ea5e9", // Sky padrão um pouco mais escuro
        600: "#0284c7", // Sky escuro
        700: "#0369a1", // Sky mais escuro
        800: "#075985", // Sky muito escuro
        900: "#0c4a6e", // Sky ainda mais escuro
        950: "#082f49", // Sky quase preto
      },
    },
  },
  components: {
    Input: inputTheme,
    Select: SelectTheme,
    NumberInput: numberInputTheme,
    Button: {
      variants: {
        solid: {
          bg: "blue.500",
          color: "gray.50",
          _hover: {
            bg: "blue.600",
          },
        },
        ghost: {
          bg: "blackAlpha.100",
          _hover: {
            bg: "blackAlpha.200",
          },
        },
        danger: {
          bg: "red.500",
          color: "whiteAlpha.900",
          _hover: {
            bg: "red.400",
          },
        },
      },
    },
    Table: tableTheme,
  },
});

export default theme;
