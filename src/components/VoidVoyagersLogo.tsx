import { memo } from "react";
import V from "../assets/V.svg";
import useTheme from "../hooks/useTheme";

const VoidVoyagersLogo = memo(() => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
        userSelect: "none",
        fontFamily: theme.font,
      }}
    >
      <img
        src={V}
        alt="V"
        style={{
          width: theme.spacing(17.5),
          height: theme.spacing(17.5),
          filter: `drop-shadow(0 0 ${theme.spacing(2)}px ${
            theme.colors.primary
          })`,
          animation: "glowPulse 2.5s infinite ease-in-out",
        }}
      />

      <span
        style={{
          textTransform: "uppercase",
          color: theme.colors.font,
          fontSize: `${theme.scale(30)}px`,
          marginLeft: -theme.spacing(4),
          textShadow: `0 0 ${theme.spacing(2)}px ${theme.colors.primary}`,
          animation: "glowPulse 2.5s infinite ease-in-out",
        }}
      >
        oid
      </span>

      <img
        src={V}
        alt="V"
        style={{
          width: theme.spacing(17.5),
          height: theme.spacing(17.5),
          filter: `drop-shadow(0 0 ${theme.spacing(2)}px ${
            theme.colors.primary
          })`,
          animation: "glowPulse 2.5s infinite ease-in-out",
        }}
      />

      <span
        style={{
          textTransform: "uppercase",
          color: theme.colors.font,
          fontSize: `${theme.scale(30)}px`,
          marginLeft: -theme.spacing(4),
          textShadow: `0 0 ${theme.spacing(2)}px ${theme.colors.primary}`,
          animation: "glowPulse 2.5s infinite ease-in-out",
        }}
      >
        oyagers
      </span>
    </div>
  );
});

export default VoidVoyagersLogo;
