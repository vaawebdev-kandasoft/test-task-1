import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import IndexPage from "./pages/IndexPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/create",
    element: <CreatePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
