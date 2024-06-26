import { Route, Routes } from "react-router-dom";
import { MainLayout } from "layouts/main-layout";
import { Profile } from "views/profile";
import { TradeLimmitionsDate } from "views/trade-limmitions-date";
import { Tickets } from "views/ticket";
import { Users } from "views/users";
import { FAQ } from "views/faq";
import { Blogs } from "views/blogs";
import { BlogDetail } from "views/blog-detail";

// const Login = lazy(() => import("views/login"));

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
          <Route path="/" element={<Users /> } />
          <Route path="/faq" element={<FAQ /> } />
          <Route path="/blogs" element={<Blogs /> } />
          <Route path="/blog/:id" element={<BlogDetail /> } />
          <Route path="/users" element={<Users /> } />
          <Route path="/profile" element={<Profile />} />
          <Route path="/trade-limmitions" element={<TradeLimmitionsDate />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>
      </Routes>
    </>
  );
}
