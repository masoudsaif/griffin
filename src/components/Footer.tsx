import { memo } from "react";
import useTheme from "../hooks/useTheme";
import Logo from "../assets/logo.png";

const Footer = memo(() => {
  const theme = useTheme();

  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: theme.spacing(2),
        padding: `${theme.spacing(4)}px ${theme.spacing(6)}px`,
        maxWidth: 1160,
        margin: "auto",
        marginBottom: 0,
        fontSize: theme.scale(12),
        color: theme.colors.font,
        borderTop: `1px solid ${theme.colors.primary}`,
      }}
    >
      <img
        src={Logo}
        alt="Masoud Studios Logo"
        style={{
          width: theme.scale(24),
          height: theme.scale(24),
        }}
      />

      <span>
        © {new Date().getFullYear()} Masoud Studios. All rights reserved.
      </span>
    </footer>
  );
});

export default Footer;
