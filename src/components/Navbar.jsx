import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Button from "./Button";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold">React Task App</h1>
      <Button onClick={toggleTheme}>Toggle Theme</Button>
    </nav>
  );
};

export default Navbar;
