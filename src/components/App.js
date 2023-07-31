import React from 'react';
import Home from './Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Login';
const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
