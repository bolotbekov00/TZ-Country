import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import { Loading } from "./pages/Loader";

const App = () => {
  return <RouterProvider router={router} fallbackElement={<Loading />} />;
};

export default App;
