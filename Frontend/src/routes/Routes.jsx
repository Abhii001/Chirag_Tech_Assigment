import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../App';
import Dashboard from '../component/Dashboard';
import Error from '../component/Error';

let appRoutes = createBrowserRouter([
    {
        path: '/',
        element: <App />, 
        children: [
            {
                index: true, // Default route
                element: <Dashboard />, 
            },
        ],
        errorElement: <Error />
    }
])

function Routes() {
    return (
        <RouterProvider router={appRoutes} />
    )
}

export default Routes;
// This component sets up the routing for the application using React Router.