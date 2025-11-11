import { User } from "lucide-react";
import githubIcon from "@/assets/icons/github.svg";
import discordIcon from "@/assets/icons/discord.svg";
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

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
            <Link to="/about">
              <User />
              <span>
                About
              </span>
            </Link>
          </SidebarMenuButton>

          {/* Github button (external link, opens in new tab) */}
          <SidebarMenuButton asChild tooltip="@mouryaabhay (Github Profile)">
            <a
              href="https://github.com/mouryaabhay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-4 w-4 invert-0 dark:invert transition-all"
              />
              <span>
                @mouryaabhay
              </span>
            </a>
          </SidebarMenuButton>

          {/* Discord button (external link, opens in new tab) */}
          <SidebarMenuButton
            asChild
            tooltip="Creation Guide (Discord Server)"
          >
            <a
              href="https://discord.gg/your-server-invite"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={discordIcon}
                alt="Discord"
                className="h-4 w-4 invert-0 dark:invert transition-all"
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
