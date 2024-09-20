import { RouterProvider } from "react-router-dom";
import { unauthenticatedRouter } from "./routes/unauthenticated-routes";

function App() {
  return <RouterProvider router={unauthenticatedRouter} />;
}

export default App;
