 import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import Checkoutpage from "../pages/books/Checkoutpage";
import SingleBook from "../pages/books/SingleBook";
import Privaterouter from "./Privaterouter";
import ThankYouPage from "../pages/books/ThankYouPage";
import OrderPage from "../pages/books/OrderPage";
import AdminRoute from "./AdminRoute";
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";

 const router=createBrowserRouter(
    [
        {
            path:"/",
            element: <App/>,
            children: [
                {
                path:"/",
                element: <Home/>,
                },
                {
                    path:"/orders",
                    element:<Privaterouter><OrderPage/></Privaterouter>
                },
                {
                    path:"/about",
                    element:<div>About</div>
                },
                {
                    path:"/login",
                    element:<Login/>
                },
                {
                    path:"/register",
                    element:<Register/>
                },
                {
                    path:"/cart",
                    element:<CartPage/>
                },
                {
                    path:"/checkoutpage",
                    element:<Privaterouter><Checkoutpage/></Privaterouter>
                },
                {
                    path:"/books/:id",
                    element:<SingleBook/>
                },
                {
                    path:"/thankyou",
                    element:<ThankYouPage/>
                }
            ]
        },
        {
            path:"/admin",
            element:<AdminLogin/>
        },
        
        {
            path:"/dashboard",
            element:<AdminRoute/>,
            children:[
                {
                    path:"",
                    element:<AdminRoute><DashboardLayout/></AdminRoute>
                },
                {
                    path:"add-new-book",
                    element:<AdminRoute><div>Added new book</div></AdminRoute>
                },
                {
                    path:"edit-book/:id",
                    element:<AdminRoute><div>Edit book</div></AdminRoute>
                },
                {
                    path:"manage-new-book",
                    element:<AdminRoute><div>Manage Books</div></AdminRoute>
                },
            ]
        }
    ]
 );
 export default router;  