import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Fire from "./pages/Fire";
import Marine from "./pages/Marine";
import Motor from "./pages/Motor";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/fire", element: <Fire /> },
      { path: "/marine", element: <Marine /> },
      { path: "/motor", element: <Motor /> },
    ],
  },
]);
