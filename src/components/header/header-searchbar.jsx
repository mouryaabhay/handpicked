import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Command, Search, Settings, User, Folder } from "lucide-react";

export default function HeaderSearchbar() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const detectOS = async () => {
      try {
        if (navigator.userAgentData) {
          const platform = (
            await navigator.userAgentData.getHighEntropyValues(["platform"])
          ).platform;
          setIsMac(platform.toLowerCase().includes("mac"));
        } else {
          // Fallback for older browsers
          setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
        }
      } catch {
        // Just in case
        setIsMac(false);
      }
    };
    detectOS();
  }, []);

  useEffect(() => {
    const down = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="flex items-center gap-0"
      >
        <Search />

        <kbd className="flex gap-1 ml-2 rounded bg-muted px-1.5 py-0.5 text-[12px] font-medium text-muted-foreground items-center">
          {isMac ? <Command size={10} /> : <span>Ctrl</span>}
          <span>K</span>
        </kbd>
      </Button>

      {/* Command Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => {
                navigate("/resources");
                setOpen(false);
              }}
            >
              <Folder className="mr-2 h-4 w-4" />
              <span>Resources</span>
            </CommandItem>

            <CommandItem
              onSelect={() => {
                navigate("/settings");
                setOpen(false);
              }}
            >
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>

            <CommandItem
              onSelect={() => {
                navigate("/profile");
                setOpen(false);
              }}
            >
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem onSelect={() => alert("New project created!")}>
              <Folder className="mr-2 h-4 w-4" />
              <span>New Project</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
