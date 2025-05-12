"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, MessageSquare, Moon, SidebarIcon, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

import { ModeToggle } from "./provider/ThemeProvider";
import { SidebarTrigger } from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Navbar = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <nav className="p-2 flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={toggleSidebar}>
              <SidebarIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Toggle Sidebar</p>
          </TooltipContent>
        </Tooltip>
        <MessageSquare className="w-6 h-6" />
        <h1 className="text-2xl">Next-Chat</h1>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        {/* THEME TOGGLE */}
        <ModeToggle />
        {/* <Moon /> */}

        {/* USER MENU */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="h-[1.2rem] w-[1.2rem] mr-1" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut className="h-[1.2rem] w-[1.2rem] mr-1" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar> */}
      </div>
    </nav>
  );
};

export default Navbar;
