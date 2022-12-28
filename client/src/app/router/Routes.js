import { createBrowserRouter } from "react-router-dom";
import App from "../../App"
import UsersDashboard from "../../features/users/UsersDashboard";

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
                {path: 'users',element :<UsersDashboard/>}
        ]


    }
]


export const router = createBrowserRouter(routes);