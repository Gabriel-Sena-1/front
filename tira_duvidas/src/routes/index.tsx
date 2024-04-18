import { SignIn } from "../screens/sign-in";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    type: "collapse",
    name: "Sair",
    key: "sign-in",
    path: "*",
    element: <SignIn />,
  },
];

export const router = createBrowserRouter(routes);
