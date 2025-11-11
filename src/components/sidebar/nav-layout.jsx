import { useContext } from "react";
import * as Icons from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { ResourceProviderContext } from "@/contexts/resource-context";
import { NavSidebarHeader } from "./nav-sidebar-header";
import NavSidebarGroup from "./nav-sidebar-group";
import NavSidebarMenu from "./nav-sidebar-menu";
import { NavSidebarFooter } from "./nav-sidebar-footer";

function NavSidebarLayout() {
  let resources = useContext(ResourceProviderContext);

  if (!resources?.categories?.length) {
    return (
      <Sidebar collapsible="icon">
        <div className="m-4 text-sm font-semibold text-muted-foreground flex items-center gap-2">
          <Icons.CircleSlash size={16} />
          <span>No categories found</span>
        </div>
      </Sidebar>
    );
  }

  const formatUrl = (name) =>
    `/${encodeURIComponent(
      name.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`;

  const menuItems = resources.categories.map((category) => ({
    title: category.name,
    url: formatUrl(category.name),
    icon: Icons[category.icon] || Icons.Folder,
  }));

  return (
    <Sidebar collapsible="icon" variant="floating">
      <NavSidebarHeader />

      <SidebarContent className="overflow-x-hidden">
        <NavSidebarGroup>
          <NavSidebarMenu items={menuItems} />
        </NavSidebarGroup>
      </SidebarContent>

      <NavSidebarFooter />
    </Sidebar>
  );
}

export default NavSidebarLayout;
