import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Starfield from "./components/StarField";
import ThemeProvider from "./providers/ThemeProvider";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AppHeader from "./components/AppHeader";
import { Fragment } from "react/jsx-runtime";
import PageSEO from "./seo/PageSEO";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

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
          <Route path="/" element={<Fragment />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditionsPage />}
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </Router>
      <Footer />
    </div>
    <Analytics />
  </ThemeProvider>
);

export default App;
