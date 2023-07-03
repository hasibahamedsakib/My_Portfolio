import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home";
import About from "../Components/About/About";
import Service from "../Components/Service/Service";
import Portfolio from "../Components/Portfolio/Portfolio";
import Contact from "../Components/Contact/Contact";
import Skills from "../Components/Skills/Skills";
import AllProjects from "../Components/AllProjects/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: "Error is hear",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/all-works",
        element: <AllProjects />,
      },
    ],
  },
]);
export default router;
