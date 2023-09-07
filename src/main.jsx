import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductLoader from './Loader/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import FirstPage from './components/FirstPage/FirstPage';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<FirstPage></FirstPage>
      },
      {
        path:'/shop',
        element: <PrivateRoute><Shop></Shop></PrivateRoute>,
      },
      {
        path:'/orders',
        element: <PrivateRoute><Order></Order></PrivateRoute>,
        loader:cartProductLoader
      },
      {
        path:'/checkout',
        element:<Checkout></Checkout>
      },
      {
        path:'/inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/sign-up',
        element: <SignUp></SignUp>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
