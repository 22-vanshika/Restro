import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import PrivateRouter from "../PrivateRouter/PrivateRouter";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <PrivateRouter><Menu /></PrivateRouter>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile/>
      }
    ],
  },
  // {
  //   path: "/signup",
  //   element: <Signup/>,
  // },
  // {
  //   path: "/signin",
  //   element: <PhoneSignin/>,
  // }
]);

export default router;
