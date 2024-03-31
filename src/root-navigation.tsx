import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "layouts/main-layout";

const Login = lazy(() => import("views/login"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home component</div>,
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path:'/users',
    element: (
      <MainLayout>
        <h2>sdlkfdlkf</h2>
      </MainLayout>
    )
  }
]);

export function RootNavigation() {
  return <RouterProvider router={router} />;
}
