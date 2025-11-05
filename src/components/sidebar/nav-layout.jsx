import React from "react";
import * as Icons from "lucide-react";

import resources from "@/data/resources.json";
import { NavSidebarHeader } from "./nav-sidebar-header";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavSidebarLayout() {
  const menuItems = Object.entries(resources).map(([title, data]) => ({
    title,
    url: `/resources/${encodeURIComponent(
      title.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")
    )}`,
    icon: Icons[data.icon] || Icons.Folder,
  }));

  return (
    <Sidebar collapsible="icon" className="border-r">
      <NavSidebarHeader />

      <SidebarContent className="overflow-y-auto">
        <SidebarGroup>
          <SidebarGroupLabel>Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4 shrink-0" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
