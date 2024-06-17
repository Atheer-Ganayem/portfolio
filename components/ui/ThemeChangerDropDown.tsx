"use client";

import React, { useEffect, useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Switch, useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";

const ThemeChangerDropDown = (props: SwitchProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function changeHandler() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className="cursor-pointer" onClick={changeHandler}>
      {theme === "light" ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeChangerDropDown;

// const ThemeChangerDropDown = () => {
// const [mounted, setMounted] = useState<boolean>(false);
// const { theme, setTheme } = useTheme();

// useEffect(() => {
//   setMounted(true);
// }, []);

// if (!mounted) {
//   return null;
// }

//   return (
//     <Dropdown>
//       <DropdownTrigger>
//         <span className="cursor-pointer">{theme === "light" ? <Sun /> : <Moon />}</span>
//       </DropdownTrigger>
//       <DropdownMenu aria-label="Dynamic Actions">
//         <DropdownItem onClick={() => setTheme("light")} startContent={<Sun />}>
//           Light Mode
//         </DropdownItem>
//         <DropdownItem onClick={() => setTheme("dark")} startContent={<Moon />}>
//           Dark Mode
//         </DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//   );
// };

// export default ThemeChangerDropDown;
