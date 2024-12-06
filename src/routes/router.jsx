import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErroePage/ErrorPage";
import Banner from "../components/Banner/Banner";
import AllVisas from "../components/AllVisas/AllVisas";
import AddVisas from "../components/AddVisas/AddVisas";
import MyAddedVisas from "../components/MyAddedVisas/MyAddedVisas";
import MyVisaApplications from "../components/MyVIsaApplications/MyVisaApplications";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import Home from "../components/Home/Home";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "../components/VisaDetails/VisaDetails";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allVisa',
            element: <AllVisas></AllVisas>,
            loader: ()=> fetch('http://localhost:5000/visa')
        },
        {
            path: '/addVisa',
            element: <PrivateRoute><AddVisas></AddVisas></PrivateRoute>
        },
        {
            path: '/myAddedVisa',
            element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>
        },
        {
            path: '/myVisaApplications',
            element: <PrivateRoute><MyVisaApplications></MyVisaApplications></PrivateRoute>
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>

        },
        {
            path: '/register',
            element: <RegisterPage></RegisterPage>
        },
        {
          path: '/visaDetails/:id',
          element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/visa/${params.id}`)
        }
      ]
      
    },
  ]);

  export default router;