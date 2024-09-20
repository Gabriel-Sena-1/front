import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./styles/theme/index.ts";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider
      theme={theme}
      toastOptions={{ defaultOptions: { isClosable: true } }}
    >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
