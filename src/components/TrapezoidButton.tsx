import { memo, useEffect, useRef, useState, type FC } from "react";
import { type Color } from "../util/theme";
import useTheme from "../hooks/useTheme";
import Trapezoid from "../shapes/Trapezoid";

export interface TrapezoidButtonProps {
  label: string;
  onClick?: () => void;
  color?: Color;
  fontColor?: Color;
  fontSize?: number;
  showAccent?: boolean;
  isIndented?: boolean;
  isFilled?: boolean;
  minWidth?: number;
  maxWidth?: number;
  minHeight?: number;
  maxHeight?: number;
}

const TrapezoidButton: FC<TrapezoidButtonProps> = memo(
  ({
    label,
    onClick,
    color = "primary",
    fontColor = "font",
    showAccent = true,
    isIndented = true,
    isFilled = false,
    ...props
  }) => {
    const theme = useTheme();
    const {
      fontSize = theme.scale(12),
      minWidth = theme.scale(20),
      maxHeight = theme.scale(40),
    } = props;
    const [pressed, setPressed] = useState(false);
    const [buttonWidth, setButtonWidth] = useState(minWidth);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      if (textRef.current) {
        const measuredWidth = textRef.current.offsetWidth + theme.spacing(26);
        setButtonWidth(Math.max(measuredWidth, minWidth));
      }
    }, [theme, label, minWidth, fontSize]);

    const textColor = theme.colors[fontColor];
    const buttonStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: buttonWidth,
      height: maxHeight,
      color: textColor,
      textTransform: "uppercase",
      fontFamily: theme.font,
      fontSize,
      letterSpacing: "0.05em",
      cursor: "pointer",
      opacity: pressed ? 0.3 : 1.0,
      transform: pressed ? "scale(0.97)" : "scale(1)",
      transition: "all 0.15s ease-in-out",
      userSelect: "none",
    };

    return (
      <div
        style={buttonStyle}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => {
          setPressed(false);
          onClick?.();
        }}
        onMouseLeave={() => {
          setPressed(false);
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <Trapezoid
            width={buttonWidth}
            height={maxHeight}
            isLeadingIndented={isIndented}
            isTrailingIndented={isIndented}
            showAccent={showAccent}
            color={color}
            isFilled={isFilled}
          />
        </div>

        <span
          ref={textRef}
          style={{
            position: "relative",
            zIndex: 1,
            textShadow: `0 0 ${theme.spacing(2)}px ${theme.colors.primary}`,
          }}
        >
          {label}
        </span>
      </div>
    );
  }
);

export default TrapezoidButton;
