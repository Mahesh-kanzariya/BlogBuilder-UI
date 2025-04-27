import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BlogCreation from "../Components/BlogCreation";
import ExplorePage from "../Components/Explore";
import HomePage from "../Components/Home";
import LoginPage from "../Components/Login";
import BlogsPage from "../Components/MyBlogs";
import ProfilePage from "../Components/Profile";
import SignupPage from "../Components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LoginPage /> },
      { path:"signup", element: <SignupPage/> },
      { path:"home", element: <HomePage /> },
      { path:"profile", element: < ProfilePage/> },
      { path:"create-blog", element: < BlogCreation/> },
      { path:"my-blogs", element: < BlogsPage/> },
      { path:"explore", element: < ExplorePage/> },
      { path: "*", element: <div>404 Not Found</div> }, // Temporary fallback
    ],
  },
]);

export default router;
