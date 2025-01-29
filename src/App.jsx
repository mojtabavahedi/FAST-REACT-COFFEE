import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { loader as loaderMenu } from "./features/menu/Menu";
import { loader as loaderBlog } from "./ui/Blog";
import { loader as loaderBlogDetail } from "./ui/BlogDetail";
import { loader as loaderBranches } from "./ui/Contact";
import Error from "./ui/Error";
import Login from "./features/user/Login";
import Signup from "./features/user/Signup";
import ColdCoffee from "./ui/ColdCoffee";
import HotCoffee from "./ui/HotCoffee";
import Tea from "./ui/Tea";
import ForgetPass from "./features/user/ForgetPass";
import User from "./features/user/User";
import Blog from "./ui/Blog";
import BlogDetail from "./ui/BlogDetail";
import About from "./ui/About";
import Contact from "./ui/Contact";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <AppLayout />,
          errorElement: <Error />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              element: <User />,
              errorElement: <Error />,
              children: [
                {
                  path: "/login",
                  element: <Login />,
                },
                { path: "/forgetpassword", element: <ForgetPass /> },
                { path: "/signup", element: <Signup /> },
              ],
            },
            {
              element: <Menu />,
              loader: loaderMenu,
              errorElement: <Error />,
              children: [
                { path: "/menu/coldcoffee", element: <ColdCoffee /> },
                { path: "/menu/hotcoffee", element: <HotCoffee /> },
                { path: "/menu/tea", element: <Tea /> },
              ],
            },
            {
              path: "/blog",
              element: <Blog />,
              loader: loaderBlog,
            },
            {
              path: "/blog/:id",
              element: <BlogDetail />,
              loader: loaderBlogDetail,
            },
            {
              path: "/cart",
              element: <Cart />,
            },
            {
              path: "/order/new",
              element: <CreateOrder />,
              action: createOrderAction,
            },
            {
              path: "order/:orderId",
              element: <Order />,
              loader: orderLoader,
              errorElement: <Error />,
            },
            {
              path: "/about-us",
              element: <About />,
            },
            {
              path: "/contact",
              element: <Contact />,
              loader: loaderBranches,
            },
          ],
        },
      ])}
    />
  );
}

export default App;
