// "use client"

// import { ChevronRight, type LucideIcon } from "lucide-react"

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible"
// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarMenuSub,
//   SidebarMenuSubButton,
//   SidebarMenuSubItem,
// } from "@/components/ui/sidebar"
// import Link from "next/link"

// export function NavMain({
//   items,
// }: {
//   items: {
//     title: string
//     url: string
//     icon?: LucideIcon
//     isActive?: boolean
//     items?: {
//       title: string
//       url: string
//     }[]
//   }[]
// }) {
//   return (
//     <SidebarGroup>
//       <SidebarMenu>
//         {items.map((item) => (
//           <Collapsible
//             key={item.title}
//             asChild
//             defaultOpen={item.isActive}
//             className="group/collapsible"
//           >
//             <SidebarMenuItem>
//               <CollapsibleTrigger asChild>
//                 <SidebarMenuButton tooltip={item.title}>
//                   {item.icon && <item.icon />}
//                   <span>{item.title}</span>
//                   <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
//                 </SidebarMenuButton>
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 <SidebarMenuSub>
//                   {item.items?.map((subItem) => (
//                     <SidebarMenuSubItem key={subItem.title}>
//                       <SidebarMenuSubButton asChild>
//                         <Link href={subItem.url}>
//                           <span>{subItem.title}</span>
//                         </Link>
//                       </SidebarMenuSubButton>
//                     </SidebarMenuSubItem>
//                   ))}
//                 </SidebarMenuSub>
//               </CollapsibleContent>
//             </SidebarMenuItem>
//           </Collapsible>
//         ))}
//       </SidebarMenu>
//     </SidebarGroup>
//   )
// }



"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export function NavMain({ items }: { items: any[] }) {
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <nav className="flex flex-col gap-1 p-2">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col">
          <button
            onClick={() => toggleItem(item.title)}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-[#fff]transition-all "
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.title}</span>
            </div>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${openItems[item.title] ? "rotate-180" : ""
                }`}
            />
          </button>

          {openItems[item.title] && (
            <div className="ml-8 mt-1 flex flex-col gap-1 space-y-1">
              {item.items.map((subItem: any) => {
                const isActive = pathname === `/${subItem.url}` ||
                  pathname.startsWith(`/${subItem.url}/`)
                return (
                  <Link
                    key={subItem.title}
                    href={`/${subItem.url}`}
                    className={`rounded-lg px-3 py-2 text-sm transition-all hover:bg-black hover:bg-opacity-30 hover:text-[#fff] ${isActive ? "bg-[#FF6600] border-l-4 " : "text-[#fff] border-l-0"
                      }`}
                  >
                    {subItem.title}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}