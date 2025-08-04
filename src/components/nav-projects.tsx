
"use client"

import { type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

interface SidebarContext {
  isCollapsed: boolean
}

type ProjectItem = {
  name: string
  title: string
  url: string
  icon: LucideIcon
}

interface NavProjectsProps {
  projects: ProjectItem[]
}

export function NavProjects({ projects }: NavProjectsProps) {
  const { isCollapsed } = useSidebar() as unknown as SidebarContext
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarMenu>
        {projects.map((item) => {
          // Enhanced isActive logic for Users item
          const isUsersRoute = item.url === 'users'
          const isActive = 
            pathname === `/${item.url}` || 
            pathname.startsWith(`/${item.url}/`) ||
            (isUsersRoute && (
              pathname.startsWith('/provider') || 
              pathname.startsWith('/providers') ||
              pathname.startsWith('/provider/') ||
              pathname.startsWith('/providers/')
            ))
          
          return (
            <SidebarMenuItem key={item.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild>
                    <Link
                      href={`/${item.url}`}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all  ${
                        isActive 
                         ? "bg-[#FF6600] hover:bg-gray-800 text-white border-l-4 border-white" 
                        : "text-white "
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {!isCollapsed && (
                        <span className="text-sm">{item.name}</span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </TooltipTrigger>
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
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}