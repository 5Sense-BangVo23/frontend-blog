import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Components/Layouts/AppLayout";
import { LoginPage } from "../Pages/Auth/LoginPage";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { DashboardLayout } from "../Components/Layouts/DashboardLayout";
import { Analytics } from "../Pages/Analytics/Analytics";
import { Settings } from "../Pages/Settings/Settings";


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
                        path: "analytics",
                        element: <Analytics />
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
