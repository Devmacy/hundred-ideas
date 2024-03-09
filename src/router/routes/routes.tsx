import Home from "@/pages/home/Home.tsx";
import Error from "@/pages/Error.tsx";
import {RouteObject} from "react-router-dom";
import Tools from "@/pages/tools/Tools.tsx";
import UUIDGenerate from "@/components/UUIDGenerate.tsx";
import {v4} from "uuid";

const routes: RouteObject[] = [
    {
        id: v4(),
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
        children: [
            {
                id: v4(),
                path: '/itTools',
                element: <Tools/>,
                children: [
                    {
                        id: v4(),
                        path: "/itTools/UUIDGenerate",
                        element: <UUIDGenerate/>,
                    }
                ]
            }
        ]
    },
];

export default routes;
