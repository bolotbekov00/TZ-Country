import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Loader } from "./pages/Loader";

const App = () => {
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
};

export default App;
