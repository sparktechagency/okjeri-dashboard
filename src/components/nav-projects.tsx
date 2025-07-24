
"use client"

import {
  type LucideIcon,
} from "lucide-react"


import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"


type ProjectItem = {
  name: string
  title: string
  url: string
  icon: LucideIcon
}

interface NavProjectsProps {
  projects: ProjectItem[]
}

interface SidebarContext {
  isCollapsed: boolean;
}


export function NavProjects({ projects }: NavProjectsProps) {
  const { isCollapsed } = useSidebar() as unknown as SidebarContext;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    {!isCollapsed && (
                      <span>{item.name}</span>
                    )}
                  </Link>
                </SidebarMenuButton>
              </TooltipTrigger>
              {/* Show different tooltip content based on collapsed state */}
              {isCollapsed ? (
                <TooltipContent side="right">
                  <p>{item.title}</p>
                </TooltipContent>
              ) : (
                <TooltipContent side="right">
                  <p>{item.name}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}