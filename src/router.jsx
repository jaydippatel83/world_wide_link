import { useRoutes } from "react-router-dom";
import Stack from "./components/Stack";
import Landing from "./components/Landing";
import DashboardLayout from "./dashboard";

export default function Router() {
    return useRoutes([
        {
            path: "/dashboard",
            element: <DashboardLayout />,
            children: [
                {
                    path: "Stack",
                    element: <Stack />,
                },
                {
                    path: "Landing",
                    element: <Landing />,
                }
            ],
        }
    ]);
}
