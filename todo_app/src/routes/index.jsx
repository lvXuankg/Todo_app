import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import DefaultLayouts from "../layouts";
import ShowTodoElement from "../pages/ShowTodoElement";
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
                path: "/showTodo/:id",
                element: <ShowTodoElement/>
            },
            {
                path: "*",
                element: <Error404/>
            }
        ]
    }
    
];