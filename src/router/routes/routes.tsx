import Home from "@/pages/home/Home.tsx";
import Error from "@/pages/Error.tsx";

const routes = [
    {
        path: '/',
        element: <Home/>,
        errorElement: <Error/>,
    }
];

export default routes;
