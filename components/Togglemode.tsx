"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const Togglemode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return <Button variant="destructive" size="icon" disabled={true}></Button>;
  }

  const dark = theme === "dark";

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? (
        <Sun className="hover:cursor-pointer hover:text-green-900" />
      ) : (
        <Moon className="hover:cursor-pointer hover:text-green-900" />
      )}
    </Button>
  );
};

export default Togglemode;
