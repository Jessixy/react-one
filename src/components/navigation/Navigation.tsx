import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "./layouts/RootLayout";
import Faq from "../pages/help/Faq";
import NotFound from "../pages/help/NotFound";
import DisplayAccordion from "../pages/DisplayAccordion";
import DisplayModalOne from "../pages/DisplayModalOne";
import DisplayPortal from "../pages/DisplayPortal";
import Miscellaneous from "../pages/Miscellaneous";
import TestComponents from "../pages/TestComponents";
import { TestBE } from "../pages/TestBE";
import { FeaturesLayout } from "./layouts/FeaturesLayout";
import UsersTablePage from "../../features/pages/UsersTablePage";
import { UserCardsPage } from "../../features/pages/UserCardsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="test" element={<TestComponents />} />
      <Route path="test-be" element={<TestBE />} />
      <Route path="accordion" element={<DisplayAccordion />} />
      <Route path="modalone" element={<DisplayModalOne />} />
      <Route path="portal" element={<DisplayPortal />} />
      <Route path="various" element={<Miscellaneous />} />
      {/* <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route> */}
      <Route path="features" element={<FeaturesLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="usertable" element={<UsersTablePage />} />
        <Route path="usercards" element={<UserCardsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
