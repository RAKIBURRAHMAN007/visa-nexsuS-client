import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErroePage/ErrorPage";
import Banner from "../components/Banner/Banner";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Banner></Banner>
        }
      ]
      
    },
  ]);

  export default router;