import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Team } from "./pages/Team";
import { Services } from "./pages/Services";
import { CommunityOutreach } from "./pages/CommunityOutreach";
import { PatientPortal } from "./pages/PatientPortal";
import { Referral } from "./pages/Referral";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "team", Component: Team },
      { path: "services", Component: Services },
      { path: "community-outreach", Component: CommunityOutreach },
      { path: "patient-portal", Component: PatientPortal },
      { path: "referral", Component: Referral },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
