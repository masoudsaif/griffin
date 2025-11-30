import { createContext } from "react";
import { Theme } from "../util/theme";

const ThemeContext = createContext<typeof Theme | undefined>(undefined);

export default ThemeContext;
