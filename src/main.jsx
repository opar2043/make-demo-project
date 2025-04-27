import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import AuthProvider from "./components/provider/Authprovider.jsx";
import ShowCard from "./components/Project/ShowCard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>   
  },
  {
    path: '/show',
    element: <ShowCard></ShowCard>
  }
]);


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/show",
//     element: <ShowCard />,
//   },
//   {
//     path: "/dashboard", // Dashboard path
//     element: <Dashboard />, // Main Dashboard component
//     children: [
//       {
//         path: "projects", // Nested route for projects
//         element: <ShowItem />,
//       },
//       {
//         path: "add-project", // Nested route for adding a project
//         element: <AddProject />,
//       },
//       {
//         path: "orders", // Nested route for orders
//         element: <Orders />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <AuthProvider> {/* Wrap your app with AuthProvider */}
      <RouterProvider router={router} />
    </AuthProvider>
    {/* </BrowserRouter> */}
  </StrictMode>
);
