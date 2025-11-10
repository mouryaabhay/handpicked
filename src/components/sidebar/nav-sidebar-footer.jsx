import { User } from "lucide-react";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function NavSidebarFooter() {
  return (
    <SidebarFooter className="border-t">
      <SidebarMenu>
        <SidebarMenuItem>
          {/* About button (internal link, can remain same) */}
          <SidebarMenuButton
            asChild
            tooltip="About - How come this site came to be?"
          >
            <a href="/About" className="flex items-center gap-2 font-semibold">
              <User />
              <span>
                About
              </span>
            </a>
          </SidebarMenuButton>

          {/* Github button (external link, opens in new tab) */}
          <SidebarMenuButton asChild tooltip="Github - @mouryaabhay">
            <a
              href="https://github.com/mouryaabhay"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold"
            >
              <img
                height="16"
                width="16"
                src={githubIcon}
                alt="GitHub"
                className="invert-0 dark:invert transition-all"
              />
              <span>
                @mouryaabhay
              </span>
            </a>
          </SidebarMenuButton>

          {/* Discord button (external link, opens in new tab) */}
          <SidebarMenuButton
            asChild
            tooltip="Discord Community - Creation Guide"
          >
            <a
              href="https://discord.gg/your-server-invite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold"
            >
              <img
                height="16"
                width="16"
                src={discordIcon}
                alt="Discord"
                className="invert-0 dark:invert transition-all"
              />
              <span>
                Creation Guide
              </span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
