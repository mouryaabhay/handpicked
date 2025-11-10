import { useState, useEffect, useContext } from "react";
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
import { Command, Search } from "lucide-react";
import * as Icons from "lucide-react";
import { ResourceProviderContext } from "@/contexts/resource-context";

export default function HeaderSearchbar() {
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const navigate = useNavigate();

  // ✅ get resources from context
  const resources = useContext(ResourceProviderContext);

  useEffect(() => {
    const detectOS = async () => {
      try {
        if (navigator.userAgentData) {
          const platform = (
            await navigator.userAgentData.getHighEntropyValues(["platform"])
          ).platform;
          setIsMac(platform.toLowerCase().includes("mac"));
        } else {
          setIsMac(/Mac|iPhone|iPad|iPod/.test(navigator.userAgent));
        }
      } catch {
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

  // ✅ helper to format URLs from category names
  const formatUrl = (name) =>
    `/${encodeURIComponent(
      name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`;

  // ✅ build items dynamically from resources.json
  const resourceItems =
    resources?.categories?.map((category) => ({
      title: category.name,
      url: formatUrl(category.name),
      icon: Icons[category.icon] || Icons.Folder,
      subcategories: category.subcategories || [],
    })) || [];

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

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search resources..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          {/* Dynamic Resource Categories */}
          {resourceItems.length > 0 && (
            <CommandGroup>
              {resourceItems.map((item) => (
                <CommandItem
                  key={item.title}
                  onSelect={() => {
                    navigate(item.url);
                    setOpen(false);
                  }}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
