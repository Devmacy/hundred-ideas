import Home from "@/pages/home/Home.tsx";
import Error from "@/pages/Error.tsx";
import {RouteObject} from "react-router-dom";
import Tools from "@/pages/tools/Tools.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/itTools',
                element: <Tools/>,
                children: []
            }
        ]
    },
];

export default routes;
