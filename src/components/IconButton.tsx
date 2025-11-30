import React, { memo, useState, type FC } from "react";
import useTheme from "../hooks/useTheme";
import SegmentedArc from "../shapes/SegmentedArc";
import { type Color } from "../util/theme";

export interface IconButtonProps {
  icon: React.ReactNode;
  size?: number;
  color?: Color;
  fontColor?: Color;
  onClick?: () => void;
}

const IconButton: FC<IconButtonProps> = memo(
  ({ icon, size, color = "primary", fontColor = "font", onClick }) => {
    const { theme } = useTheme();
    const [pressed, setPressed] = useState(false);

    const actualSize = size ?? theme.spacing(12);
    const textColor = theme.colors[fontColor];
    const strokeColor = theme.colors[color];

    const buttonStyle: React.CSSProperties = {
      position: "relative",
      width: actualSize,
      height: actualSize,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: textColor,
      fontSize: theme.scale(22),
      cursor: "pointer",
      userSelect: "none",
      opacity: pressed ? 0.3 : 1.0,
      transform: pressed ? "scale(0.97)" : "scale(1)",
      transition: "all 0.15s ease-in-out",
    };

    return (
      <div
        style={buttonStyle}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => {
          setPressed(false);
          onClick?.();
        }}
        onMouseLeave={() => setPressed(false)}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <SegmentedArc color={color} size={actualSize} />
        </div>

        <span
          style={{
            position: "relative",
            zIndex: 1,
            textShadow: `0 0 ${theme.spacing(2)}px ${strokeColor}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
      </div>
    );
  }
);

export default IconButton;
