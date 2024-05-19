import { RouterProvider } from "react-router-dom";
import appRouter from "../router/index";

const Root = () => {
  return <RouterProvider router={appRouter} />;
};

export default Root;
