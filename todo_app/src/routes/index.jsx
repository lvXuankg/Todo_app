import Home from "../../pages/Home";
import Error404 from "../../pages/Error404";
export const routes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "*",
        element: <Error404/>
    }
]