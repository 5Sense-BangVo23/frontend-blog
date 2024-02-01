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
        path: "", // Empty path for the default child
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true, // Index route for the default child of "dashboard"
            element: <Dashboard />,
          },
          {
            path: "authors",
            element: <AuthorManager />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
