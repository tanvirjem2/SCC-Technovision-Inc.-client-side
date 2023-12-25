import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home/Home';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './Pages/Dashboard';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <LogIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
