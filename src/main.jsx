import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: 'error',
    
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
       <App></App>
    </BrowserRouter>
  </StrictMode>
);
