import { createHashRouter } from "react-router-dom";
import { Homepage } from "./pages/homepage.tsx";
export class Routers {
  home = createHashRouter([
    {
      path: "/",
      element: <Homepage />,
    },
  ]);
  //Haven't finish this page yet
  // about = createHashRouter([
  //   {
  //     path: "/about",
  //   },
  // ]);
}
