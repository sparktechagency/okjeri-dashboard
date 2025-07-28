
// "use client"

// import {
//   type LucideIcon,
// } from "lucide-react"


// import {
//   SidebarGroup,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   useSidebar,
// } from "@/components/ui/sidebar"
// import Link from "next/link"
// import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"


// type ProjectItem = {
//   name: string
//   title: string
//   url: string
//   icon: LucideIcon
// }

// interface NavProjectsProps {
//   projects: ProjectItem[]
// }

// interface SidebarContext {
//   isCollapsed: boolean;
// }


// export function NavProjects({ projects }: NavProjectsProps) {
//   const { isCollapsed } = useSidebar() as unknown as SidebarContext;

//   return (
//     <SidebarGroup>
//       <SidebarMenu>
//         {projects.map((item) => (
//           <SidebarMenuItem key={item.name}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <SidebarMenuButton asChild>
//                   <Link href={item.url} className="flex items-center gap-2">
//                     <item.icon className="h-4 w-4" />
//                     {!isCollapsed && (
//                       <span>{item.name}</span>
//                     )}
//                   </Link>
//                 </SidebarMenuButton>
//               </TooltipTrigger>
//               {/* Show different tooltip content based on collapsed state */}
//               {isCollapsed ? (
//                 <TooltipContent side="right">
//                   <p>{item.title}</p>
//                 </TooltipContent>
//               ) : (
//                 <TooltipContent side="right">
//                   <p>{item.name}</p>
//                 </TooltipContent>
//               )}
//             </Tooltip>
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }



"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function NavProjects({ projects }: { projects: any[] }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 p-2 space-y-1">
      {projects.map((project) => {
        const isActive = pathname === `/${project.url}` ||
          pathname.startsWith(`/${project.url}/`)
        return (
          <Link
            key={project.name}
            href={`/${project.url}`}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:bg-black hover:bg-opacity-30 hover:text-[#fff] ${isActive ? "bg-[#FF6600] border-l-4 " : "text-[#fff] border-l-0"
              }`}
          >
            <project.icon className="h-5 w-5" />
            <span className="text-sm">{project.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}