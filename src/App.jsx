import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IdForm from "./pages/IdForm";
import BizForm from "./pages/BizForm";
import DriverForm from "./pages/DrivLicenseForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/id-form",
    element: <IdForm />,
  },
  {
    path: "/biz-form",
    element: <BizForm />,
  },
  {
    path: "/driver-form",
    element: <DriverForm />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
