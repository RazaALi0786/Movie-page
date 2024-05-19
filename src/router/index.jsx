import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetail from "../components/MovieDetail";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);

export default appRouter;
