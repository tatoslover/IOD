import { useContext } from "react";
import { MyThemeContext } from "../context/MyThemeContext";

export default function Footer() {
  const { theme } = useContext(MyThemeContext);

  return (
    <footer
      className="Footer"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <p>&copy; 2024 React Router Demo. All rights reserved.</p>
    </footer>
  );
}
