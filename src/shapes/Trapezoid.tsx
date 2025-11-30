import { memo, type FC } from "react";
import { LineWidth, type Color } from "../util/theme";
import useTheme from "../hooks/useTheme";

export interface TrapezoidProps {
  width: number;
  height: number;
  isLeadingIndented?: boolean;
  isTrailingIndented?: boolean;
  showAccent?: boolean;
  color?: Color;
  isFilled?: boolean;
}

const Trapezoid: FC<TrapezoidProps> = memo(
  ({
    width,
    height,
    isLeadingIndented = false,
    isTrailingIndented = false,
    showAccent = false,
    color = "primary",
    isFilled = false,
  }) => {
    const theme = useTheme();
    const colorValue = theme.colors[color];
    const inset = theme.spacing(5);
    const lineOffset = theme.spacing(2);

    const topRightX = isTrailingIndented ? width : width + inset;
    const bottomRightX = isTrailingIndented ? width - inset : width;
    const topLeftX = isLeadingIndented ? inset : 0;
    const bottomLeftX = isLeadingIndented ? 0 : -inset;

    const path = `
    M ${topLeftX},0
    L ${topRightX},0
    L ${bottomRightX},${height}
    L ${bottomLeftX},${height}
    Z
  `;

    const accentPath = showAccent
      ? `M ${bottomLeftX - lineOffset},${height} L ${topLeftX - lineOffset},0`
      : "";

    const minX = Math.min(bottomLeftX - lineOffset - 5, 0);
    const maxX = Math.max(topRightX + 5, width);
    const vbWidth = maxX - minX;

    return (
      <svg
        width={width}
        height={height}
        viewBox={`${minX} 0 ${vbWidth} ${height}`}
        style={{ display: "block" }}
      >
        <path
          d={path}
          stroke={colorValue}
          strokeWidth={LineWidth.sm()}
          fill={isFilled ? colorValue : "transparent"}
          style={{ transition: "all 0.15s ease-in-out" }}
        />
        {showAccent && (
          <path
            d={accentPath}
            stroke={colorValue}
            strokeWidth={LineWidth.sm()}
          />
        )}
      </svg>
    );
  }
);

export default Trapezoid;
