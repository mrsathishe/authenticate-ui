import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../containers/ErrorPage";
import App from "../App";
import Login from "../containers/Login";
import Register from "../containers/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage />
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <ErrorPage />
    }
]);
  