import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App"
import UsersDashboard from "../../features/users/UsersDashboard";
import ProfileDashboard from "../../features/userProfile/ProfileDashboard"

export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
                {path: 'users',element :<UsersDashboard/>},
                {path: 'users/:uuid', element: <ProfileDashboard/>}
        ]


    }
]


export const router = createBrowserRouter(routes);