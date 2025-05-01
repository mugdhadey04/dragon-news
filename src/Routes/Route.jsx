import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import HomePage from "../Components/HomeLayout/HomePage";
import CategoryNews from "../Pages/CategoryNews";
const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                path: "",
                Component: HomePage
            },
            {
                path: '/category/:id',
                Component: CategoryNews
            },
        ],
    },
    {
        path: "/auth",
        element: <h2>Authentication</h2>,
    },
    {
        path: "/news",
        element: <h2>News</h2>,
    },
    {
        path: "/*",
        element: <div>Error</div>,
    },

]);
export default router;