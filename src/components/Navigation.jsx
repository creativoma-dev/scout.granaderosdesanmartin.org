import { useState } from "react";
import { IconUserPlus } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconChevronDown } from "@tabler/icons-react";
import SwitchDarkMode from "./Switch";

const Navigation = () => {
  const [state, setState] = useState(false);

  // Replace # path with your path
  const navigation = [
    { title: "Historia", path: "#" },
    { title: "Actividades", path: "#" },
    { title: "Ramas", path: "#" },
    { title: "Contacto", path: "#" },
  ];

  return (
    <>
      <nav className="relative items-center p-8 mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 md:flex md:space-x-6">
        <div className="flex justify-between items-center">
          <a
            href="#"
            className="text-lg font-bold text-[#111827] md:text-2xl dark:text-white"
          >
            Granaderos de San Martín
          </a>
        </div>

        <ul
          className={`flex-1 justify-between mt-8 md:text-md md:font-medium md:flex md:mt-0 ${
            state
              ? "absolute inset-x-0 px-8 border-b bg-white md:border-none md:static"
              : "hidden"
          }`}
        >
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-[#111827] dark:text-white" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
          <li className="order-2 py-5 md:py-0">
            <a
              href="#"
              className="py-2 px-5 rounded-lg font-medium text-white text-center bg-green-600 dark:bg-white dark:text-[#111827] block md:py-3 md:inline"
            >
              Inscripciones{" "}
              <IconUserPlus className="inline-block w-5 h-5 ml-1 mb-1" />
            </a>
          </li>
        </ul>
        <SwitchDarkMode />
      </nav>
    </>
  );
};

export default Navigation;
