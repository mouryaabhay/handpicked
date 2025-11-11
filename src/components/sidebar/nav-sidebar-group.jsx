import React from "react";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export default function NavSidebarGroup({ children }) {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>{children}</SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
