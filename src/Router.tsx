import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import ToDo from "./views/ToDo";

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
