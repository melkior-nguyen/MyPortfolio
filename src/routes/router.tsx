import { createBrowserRouter } from "react-router-dom";
import { paths } from "./constant";

import App from "../App";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { BioLazy, ContactLazy, HomeLazy, ProjectsLazy } from "./lazyComponents";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: paths.home,
        element: <HomeLazy />,
      },
      {
        path: paths.projects,
        element: <ProjectsLazy />,
      },
      {
        path: paths.bio,
        element: <BioLazy />,
      },
      {
        path: paths.contact,
        element: <ContactLazy />,
      },
    ],
  },
]);
