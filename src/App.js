import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import ResMenu from "./Components/ResMenu";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResMenu from "./Components/ResMenu";
import { lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/Store/appStore";
import Cart from "./Components/Cart";

const Applayout = () => {
  return (
    <Provider store={appStore}>
      <StrictMode>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </StrictMode>
    </Provider>
  );
};

const About = lazy(() => import("./Components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
