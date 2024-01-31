import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Components/Layouts/AppLayout";
import { LoginPage } from "../Pages/Auth/LoginPage";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { DashboardLayout } from "../Components/Layouts/DashboardLayout";
import { Settings } from "../Pages/Settings/Settings";
import { AuthorManager } from "../Pages/AuthorManager/AuthorManager";


// Truncated for brevity
export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                index: true,
                element: <LoginPage />
            },
            {   
                path: "dashboard",
                element: <DashboardLayout />,
                children:[
                    {
                        index: true,
                        element: <Dashboard />
                    },
                    {
                        path: "Authors Management",
                        element: <AuthorManager />
                    },
                    {
                        path: "settings",
                        element: <Settings />
                    }
                  
                ]
            }
        ]
    }
]);
