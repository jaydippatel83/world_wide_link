import { useRoutes } from "react-router-dom";
import Stack from "./components/Stack";
import Landing from "./components/Landing";
import DashboardLayout from "./dashboard/Index";
import Bridge from "./components/Bridge";
import Swap from "./components/Swap";
import Pool from "./components/Pool";
import Assets from "./components/Assets";

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
                },
                {
                    path: "Bridge",
                    element: <Bridge />,
                },
                {
                    path: "Swap",
                    element: <Swap />,
                },
                {
                    path: "Pool",
                    element: <Pool />,
                },
                {
                    path: "Assets",
                    element: <Assets />,
                },

            ],
        }
    ]);
}
