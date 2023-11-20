import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/home";
import Shop from "../pages/shop/shop";
import About from "../pages/About";
import Blog from "../pages/blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    },
]);


export default router;