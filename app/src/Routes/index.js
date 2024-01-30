import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../Components/Layouts/AppLayout";
import { MainLayout } from "../Components/Layouts/MainLayout";
import { LoginPage } from "../Pages/Auth/LoginPage";
import { Dashboard } from "../Pages/Dashboard/Dashboard";


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
                element: <MainLayout />,
                children:[
                    {
                        index: true,
                        element: <Dashboard />
                    }
                ]

            }
        ]
    }
])