import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage.jsx";
import CameraPage from "./Pages/CameraPage.jsx";
import LensPage from "./Pages/LensPage.jsx";
import Error from "./Pages/Error.jsx";
import App from "./App.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/camera",
        element: <CameraPage />,
      },
      {
        path: "/lens",
        element: <LensPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
