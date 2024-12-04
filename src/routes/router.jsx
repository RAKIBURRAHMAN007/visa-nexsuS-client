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



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Banner></Banner>
        },
        {
            path: '/allVisa',
            element: <AllVisas></AllVisas>
        },
        {
            path: '/addVisa',
            element: <AddVisas></AddVisas>
        },
        {
            path: '/myAddedVisa',
            element: <MyAddedVisas></MyAddedVisas> 
        },
        {
            path: '/myVisaApplications',
            element: <MyVisaApplications></MyVisaApplications>
        },
        {
            path: '/login',
            element: <LoginPage></LoginPage>

        },
        {
            path: '/register',
            element: <RegisterPage></RegisterPage>
        }
      ]
      
    },
  ]);

  export default router;