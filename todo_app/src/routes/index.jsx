import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import DefaultLayouts from "../layouts";
export const routes = [
    {
        path: "/",
        element: <DefaultLayouts/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "*",
                element: <Error404/>
            }
        ]
    }
    
];