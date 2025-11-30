import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import VoidVoyagersLogo from "./VoidVoyagersLogo";
import TrapezoidButton from "./TrapezoidButton";
import useTheme from "../hooks/useTheme";

const AppHeader = memo(() => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <div style={{ paddingTop: theme.spacing(12) }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <VoidVoyagersLogo />
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Link to="/terms-and-conditions" style={{ textDecoration: "none" }}>
          <TrapezoidButton
            isFilled={location.pathname === "/terms-and-conditions"}
            label="Terms and Conditions"
            color="primary"
          />
        </Link>
        <Link to="/privacy-policy" style={{ textDecoration: "none" }}>
          <TrapezoidButton
            isFilled={location.pathname === "/privacy-policy"}
            label="Privacy Policy"
            color="primary"
          />
        </Link>
      </div>
    </div>
  );
});

export default AppHeader;
