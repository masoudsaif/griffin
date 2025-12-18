import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Starfield from "./components/StarField";
import ThemeProvider from "./providers/ThemeProvider";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AppHeader from "./components/AppHeader";
import PageSEO from "./seo/PageSEO";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { RoutePath } from "./constants/routes";
import SupportPage from "./pages/SupportPage";

const App = () => (
  <ThemeProvider>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    >
      <Starfield />
      <Router>
        <PageSEO />
        <AppHeader />
        <Routes>
          <Route
            path={RoutePath.Home}
            element={<Navigate to={RoutePath.Support} />}
          />
          <Route path={RoutePath.Support} element={<SupportPage />} />

          <Route
            path={RoutePath.TermsAndConditions}
            element={<TermsAndConditionsPage />}
          />
          <Route
            path={RoutePath.PrivacyPolicy}
            element={<PrivacyPolicyPage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
    <Analytics />
  </ThemeProvider>
);

export default App;
