// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
// import App from "./App.tsx";
import { NavBar } from "./components/navbar.tsx";
import { Routers } from "./routers.tsx";

const routers = new Routers();
createRoot(document.getElementById("root")!).render(
  <div style={{ margin: 0 }}>
    <NavBar />
    <RouterProvider router={routers.home} />
  </div>
);
