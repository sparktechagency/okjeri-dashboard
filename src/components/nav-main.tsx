
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useSidebar } from "./ui/sidebar"

interface SidebarContext {
  isCollapsed: boolean;
}

export function NavMain({ items }: { items: any[] }) {
  const { isCollapsed } = useSidebar() as unknown as SidebarContext;
  const pathname = usePathname()
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleItem = (title: string) => {
    setOpenItems((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <nav className="flex flex-col gap-1 p-2">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col">
          {/* Main menu button */}
          <button
            onClick={() => toggleItem(item.title)}
            className={`flex items-center rounded-lg px-3 py-2 transition-all ${
              isCollapsed 
                ? "justify-center hover:bg-gray-800 text-white" 
                : "justify-between text-gray-400 hover:bg-gray-800 hover:text-white"
            }`}
            title={isCollapsed ? item.title : undefined}
          >
            <div className="flex items-center gap-3">
              <item.icon className="h-5 w-5" />
              {!isCollapsed && (
                <span className="text-sm">{item.title}</span>
              )}
            </div>
            
            {!isCollapsed && (
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  openItems[item.title] ? "rotate-180" : ""
                }`}
              />
            )}
          </button>

          {/* Submenu items - only show when not collapsed and parent is open */}
          {!isCollapsed && openItems[item.title] && (
            <div className="ml-8 mt-1 flex flex-col gap-1">
              {item.items.map((subItem: any) => {
                const isActive = pathname === `/${subItem.url}` || 
                               pathname.startsWith(`/${subItem.url}/`)
                return (
                  <Link
                    key={subItem.title}
                    href={`/${subItem.url}`}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                      isActive 
                        ? "bg-[#FF6600] text-white border-l-4 border-white" 
                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                    }`}
                  >
                    {!isCollapsed && subItem.icon && (
                      <subItem.icon className="h-4 w-4" />
                    )}
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Collapsed submenu indicator (only shown when sidebar is collapsed) */}
          {isCollapsed && item.items && item.items.length > 0 && (
            <div className="relative flex justify-center mt-1">
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}