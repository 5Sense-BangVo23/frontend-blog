import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Components/Layouts/AppLayout";
import { LoginPage } from "../Pages/Auth/LoginPage";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { DashboardLayout } from "../Components/Layouts/DashboardLayout";
import { Settings } from "../Pages/Settings/Settings";
import { AuthorManager } from "../Pages/AuthorManager/AuthorManager";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      {
        index: true, // Set as index route
        element: <LoginPage />,
      },
      {
        path: "login", // Removed the leading slash to make it relative
        element: <LoginPage />,
      },
      {
        path: "dashboard", // Removed the leading slash to make it relative
        element: <DashboardLayout />,
      },
      {
        path: "authors", // Removed the leading slash to make it relative
        element: <AuthorManager />,
      },
      {
        path: "settings", // Removed the leading slash to make it relative
        element: <Settings />,
      },
    ],
  },
]);
