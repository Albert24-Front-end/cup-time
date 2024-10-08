import { createBrowserRouter } from "react-router-dom";
import { Main } from "./Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/cart",
      element: <p>Cart Page</p>,
    },
   
  
  ]);