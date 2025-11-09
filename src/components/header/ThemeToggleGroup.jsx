import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Palette } from "lucide-react";
import { useTheme } from "@/components/theme-provider"; // from shadcn setup

// Available color themes (you can expand these)
const colorThemes = ["violet", "blue", "green", "rose", "orange"];

export default function ThemeToggleGroup() {
  const { theme, setTheme } = useTheme();
  const [colorIndex, setColorIndex] = useState(0);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const changeColor = () => {
    const next = (colorIndex + 1) % colorThemes.length;
    setColorIndex(next);
    // Apply color via root variable
    document.documentElement.style.setProperty("--theme-accent", colorThemes[next]);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Light/Dark Toggle */}
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>

      {/* Color Switcher */}
      <Button
        variant="outline"
        size="icon"
        onClick={changeColor}
        aria-label="Change accent color"
      >
        <Palette className="h-5 w-5" />
      </Button>
    </div>
  );
}
