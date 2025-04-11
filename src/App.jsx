import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IdForm from "./pages/IdForm";
import BizForm from "./pages/BizForm";
import DriverForm from "./pages/DrivLicenseForm";
import IdCard from "./components/IdCard";
import BizCard from "./components/BizCard";
import DriverCard from "./components/DriverCard";
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

  {
    path: "/id-card",
    element: <IdCard />,
  },

  {
    path: "/biz-card",
    element: <BizCard />,
  },

  {
    path: "/driver-card",
    element: <DriverCard />,
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
