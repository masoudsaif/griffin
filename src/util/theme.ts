export const Theme = {
  spacingFactor: 4,
  font: "GoodTimingRg-Bold",
  get scaleFactor(): number {
    const widthScale = window.innerWidth / 600;

    return Math.min(widthScale, 1.7);
  },

  spacing(factor: number): number {
    return this.spacingFactor * factor * this.scaleFactor;
  },

  scale(value: number): number {
    return value * this.scaleFactor;
  },

  colors: {
    primary: "#2ac8e4",
    secondary: "#ffffff",
    tertiary: "#ffff00",
    gray: "#808080",
    font: "#ffffff",
    success: "#00ff00",
    error: "#ff0000",
    warning: "#ffa500",
  },
};

export const FontSize = {
  xxs: () => Theme.scale(12),
  xs: () => Theme.scale(14),
  sm: () => Theme.scale(18),
  md: () => Theme.scale(22),
  lg: () => Theme.scale(26),
  xl: () => Theme.scale(30),
};

export const IconSize = {
  xs: () => Theme.scale(20),
  sm: () => Theme.scale(24),
  md: () => Theme.scale(28),
  lg: () => Theme.scale(32),
  xl: () => Theme.scale(36),
};

export const CornerRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 18,
};

export const LineWidth = {
  xs: () => Theme.scale(1),
  sm: () => Theme.scale(2),
  md: () => Theme.scale(3),
  lg: () => Theme.scale(4),
  xl: () => Theme.scale(5),
};

export const ButtonSize = {
  xs: {
    fontSize: FontSize.xs,
    minWidth: () => Theme.scale(70),
    maxHeight: () => Theme.scale(40),
  },
  sm: {
    fontSize: FontSize.sm,
    minWidth: () => Theme.scale(140),
    maxHeight: undefined,
  },
  md: {
    fontSize: FontSize.md,
    minWidth: () => Theme.scale(220),
    maxHeight: undefined,
  },
};

export type Color = keyof typeof Theme.colors;
