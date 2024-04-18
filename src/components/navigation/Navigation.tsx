import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import RootLayout from "./layouts/RootLayout";

import HelpLayout from "./layouts/HelpLayout";
import Contact from "../pages/help/Contact";
import Faq from "../pages/help/Faq";
import NotFound from "../pages/help/NotFound";

import DisplayAccordion from "../pages/DisplayAccordion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="accordion" element={<DisplayAccordion />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
