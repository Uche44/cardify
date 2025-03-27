import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IdForm from "./pages/IdForm";
import BizForm from "./pages/BizForm";
import DriverForm from "./pages/DrivLicenseForm";
import { TemplateProvider } from "./contexts/TemplateSelectionContext";
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
      <TemplateProvider>
        <RouterProvider router={router} />
      </TemplateProvider>
    </>
  );
};
export default App;
