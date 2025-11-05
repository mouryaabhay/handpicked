import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { NavSidebarLayout } from "./nav-layout";

export default function NavSidebar({ children }) {
  return (
    <SidebarProvider>
        <NavSidebarLayout />
        <SidebarTrigger />

        <main className="flex-1 overflow-auto p-6">{children}</main>
    </SidebarProvider>
  );
}
