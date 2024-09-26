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
        element:   <Add></Add>    ,
      },
      {
        path: "/order",
        element:  <Order></Order> ,
      },
      {
        path: "/details",
        element:  <CarDetails></CarDetails>    ,
      },
      {
        path: "/manage",
        element:  <Manage></Manage> ,
      },
      {
        path: "/login",
        element:   <Login></Login> ,
      },
      {
        path: "/up",
        element:  <Registration></Registration> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
