import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "./layouts/RootLayout";
import Miscellaneous from "../../teststation/views/Miscellaneous";
import UsersTablePage from "../../features/views/UserTablePage";
import { TeststationLayout } from "./layouts/TeststationLayout";
import { FeaturesLayout } from "./layouts/FeaturesLayout";
import TutorialsLayout from "./layouts/TutorialsLayout";
import DisplayAccordion from "../../teststation/views/DisplayAccordion";
import DisplayPortal from "../../teststation/views/DisplayPortal";
import DisplayModalOne from "../../teststation/views/DisplayModalOne";
import TestView from "../../teststation/views/TestView";
import { UserCardsPage } from "../../features/views/UserCardsPage";
import { FetchDataTutorialOne } from "../../tutorials/views/FetchDataTutorialOne";
import ReactQueryOne from "../../tutorials/views/ReactQueryOne";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* SubRoutes */}
      <Route path="tutorials" element={<TutorialsLayout />}>
        <Route path="fetchdata-1" element={<FetchDataTutorialOne />} />
        <Route path="reactquery" element={<ReactQueryOne />} />
      </Route>
      <Route path="teststation" element={<TeststationLayout />}>
        <Route path="testview" element={<TestView />} />
        <Route path="accordion" element={<DisplayAccordion />} />
        <Route path="modal-one" element={<DisplayModalOne />} />
        <Route path="portal" element={<DisplayPortal />} />
        <Route path="miscellaneous" element={<Miscellaneous />} />
      </Route>
      <Route path="features" element={<FeaturesLayout />}>
        <Route path="usertable" element={<UsersTablePage />} />
        <Route path="usercards" element={<UserCardsPage />} />
      </Route>
      {/* Default Page */}
      <Route path="*" element={<Home />} />
    </Route>
  )
);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
