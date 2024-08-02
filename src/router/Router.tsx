// router/Router.tsx
import CardDetail from "../pages/CardDetail";
import CardPages from "../pages/CardsPages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CardPages />,
  },
  {
    path: "/detailCard/:name",
    element: <CardDetail />,
  },
]);
