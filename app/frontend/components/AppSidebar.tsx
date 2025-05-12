import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu } from "./ui/sidebar";
import { Home, Inbox, Calendar, Search, Settings, SquarePen } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="offcanvas" side="left">
      {/* 1. Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row items-center justify-between">
            {/* 1.1 Header Content */}
            {/* <span className="text-lg font-semibold px-2 hover:bg-muted rounded-md cursor-pointer"> */}
            <span className="text-lg font-semibold hover:bg-muted rounded-md cursor-pointer">Welcome back</span>
            {/* 1.2 New Chat Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" type="button">
                  <SquarePen />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Chat</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>

      {/* 2. Sidebar Content */}
      {/* TODO: Chat history or persona? */}
      <SidebarContent>
        <SidebarGroup>
          {/* <span className="px-2 gap-2 text-zinc-500">You may began your conversation!</span> */}
          <span className="2 text-zinc-500">You may began your conversation!</span>
        </SidebarGroup>
      </SidebarContent>

      {/* 3. Sidebar Footer */}
      <SidebarFooter>
        <span className="text-zinc-500">Currently in development</span>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
