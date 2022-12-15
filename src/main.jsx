import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ErrorPage from "./error-page";
import Completed from "./components/Completed";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/completed",
    element: <Completed />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
