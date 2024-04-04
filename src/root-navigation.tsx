import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { MainLayout } from "layouts/main-layout";
import { Profile } from "views/profile";

const Login = lazy(() => import("views/login"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Home component</div>,
//   },
//   {
//     path: "/login",
//     element: (
//       <Suspense>
//         <Login />
//       </Suspense>
//     ),
//   },
//   {
//     path: "/users",
//     element: <MainLayout></MainLayout>,
//   },
// ]);

export function RootNavigation() {
  // return <RouterProvider router={router} />;

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/users" element={<h2>sdlkfdlkf</h2>} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}
