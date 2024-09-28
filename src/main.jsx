import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import Home from './Home.jsx';
import Add from './Add/Add.jsx';
import Order from './order/Order.jsx';
import CarDetails from './Add/CarDetails.jsx';
import Manage from './order/Manage.jsx';
import Login from './Firebase and sign/Login.jsx';
import Registration from './Firebase and sign/Registration.jsx';
import Contact from './home file/Contact.jsx';
import Update from './Add/Update.jsx';
import AuthContext from './firebase/AuthContext.jsx';
import PrivateRoute from './firebase/PrivateRoute.jsx';





const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root> ,
    children: [
      {
        path: "/",
        element:  <Home></Home>  ,
      },
      {
        path: "/add",
        element:   <PrivateRoute><Add></Add></PrivateRoute>  ,
      },
      {
        path: "/order",
        element: <PrivateRoute><Order></Order></PrivateRoute>   ,
      },
      {
        path: "/details",
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>      ,
      },
      {
        path: "/manage",
        element: <PrivateRoute><Manage></Manage></PrivateRoute>   ,
      },
      {
        path: "/login",
        element:    <Login></Login> ,
      },
      {
        path: "/up",
        element:  <Registration></Registration> ,
      },
      {
        path: "/contact",
        element:  <PrivateRoute><Contact></Contact></PrivateRoute>  ,
      },
      {
        path: "/update/:id",
        element: <Update></Update> ,
        loader: ({params}) => fetch(`http://localhost:5000/carData/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <AuthContext>
         
    <RouterProvider router={router} />
 
    </AuthContext>
      
  </StrictMode>,
)
