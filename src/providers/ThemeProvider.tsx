import { memo, useEffect, useState, type FC, type ReactNode } from "react";
import { Theme } from "../util/theme";
import ThemeContext from "../context/ThemeContext";

const ThemeProvider: FC<{ children: ReactNode }> = memo(({ children }) => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleFactor = Math.min(size.width / 600, 1.7);

  return (
    <ThemeContext.Provider
      value={{
        ...Theme,
        scaleFactor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
