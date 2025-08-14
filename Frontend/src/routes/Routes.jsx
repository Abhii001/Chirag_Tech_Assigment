import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import AuthLayout from '../layouts/AuthLayout';
import Dashboard from '../component/Dashboard';
import Error from '../component/Error';
import Login from '../component/Login';
import UserForm from '../component/UserForm';
import CreateCar from '../component/CreateCar';

const appRoutes = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <UserForm />
            },
        ],
        errorElement: <Error />,
    },
    {
        element: <App />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/createcar',
                element: <CreateCar/>
            }
        ],
    },
]);

function Routes() {
    return <RouterProvider router={appRoutes} />;
}

export default Routes;
