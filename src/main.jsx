import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import AuthProvider from "./components/provider/Authprovider.jsx";
import ShowCard from "./components/Project/ShowCard.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import AddProject from "./components/Dashboard/AddProject/AddProject.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Allproject from "./components/Dashboard/Allproject/Allproject.jsx";
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/show",
    element: <ShowCard></ShowCard>,
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addproject",
        element: <AddProject></AddProject>,
      },
      {
        path: "/dashboard/allproject",
        element: <Allproject></Allproject>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
