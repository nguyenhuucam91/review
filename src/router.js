import {createBrowserRouter} from "react-router-dom";
import Dashboard from "./modules/dashboard";
import routes from "./routes";
import User from "./modules/user";
import MainLayout from "./views/layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: routes.web.dashboard,
                element: <Dashboard />
            },
            {
                path: routes.web.user.index,
                element: <User />,
            }
        ]
    }

])

export default router;