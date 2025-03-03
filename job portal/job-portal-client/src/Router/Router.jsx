import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import PostJob from "../pages/PostJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../pages/UpdateJob";
import SignUp from "../components/SignUp";
import Login from '../components/Login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/post-job", element: <PostJob /> },
            { path: "/my-job", element: <MyJobs /> },
            { path: "/edit-job/:id", element: <UpdateJob />, loader: ({ params }) => fetch(`http://localhost:5000/all-jobs/${params.id}`) },
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <Login /> }
        ]
    }
]);

export default router