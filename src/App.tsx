import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Starfield from "./components/StarField";
import ThemeProvider from "./providers/ThemeProvider";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AppHeader from "./components/AppHeader";
import { Fragment } from "react/jsx-runtime";

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
    </div>
  </ThemeProvider>
);

export default App;
