import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./controllers/SignIn";
import SignUp from "./controllers/SignUp";
import ToDo from "./controllers/ToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "todo",
        element: <ToDo />,
      },
    ],
  },
]);

export default router;
