// Componente toggle para cambiar a modo oscuro

import { useState, useEffect } from "react";
import { IconSun } from "@tabler/icons-react";
import { IconMoon } from "@tabler/icons-react";

const SwitchDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        className=" rounded-full focus:outline-none"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? (
          <IconSun className="w-6 h-6 text-[#ffde4a]" />
        ) : (
          <IconMoon className="w-6 h-6 text-[#111827]" />
        )}
      </button>
    </>
  );
}

export default SwitchDarkMode;