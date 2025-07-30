

"use client"

import * as React from "react"
import { Settings2 } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import {
  AboutIcon,
  BookingIcon,
  BoostIcon,
  ChangePasswordIcon,
  DashboardIcon,
  DisputeIcon,
  FaqIcon,
  PayoutIcon,
  Promotions,
  ReferralIcon,
  ReportIcon,
  ServiceIcon,
  TermsIcon,
  TransactionIcon,
  UsersIcon
} from "./custom-icons"
import { usePathname, useRouter } from "next/navigation"

export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Dashboard",
      title: "Dashboard Overview",
      url: "dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Users",
      title: "Users",
      url: "users",
      icon: UsersIcon,
    },
    {
      name: "Bookings",
      title: "Manage bookings",
      url: "bookings",
      icon: BookingIcon,
    },
    {
      name: "Services",
      title: "Services",
      url: "services",
      icon: ServiceIcon,
    },
    {
      name: "Transactions",
      title: "Transactions",
      url: "transactions",
      icon: TransactionIcon,
    },
    {
      name: "Payouts",
      title: "Payout requests",
      url: "payouts",
      icon: PayoutIcon,
    },
    {
      name: "Referral management",
      title: "Referral Program Administration",
      url: "referralManagement",
      icon: ReferralIcon,
    },
    {
      name: "Dispute management",
      title: "Conflict Resolution Center",
      url: "disputeManagement",
      icon: DisputeIcon,
    },
    {
      name: "Promotions",
      title: "Promotions",
      url: "promotions",
      icon: Promotions,
    },
    {
      name: "Boost control",
      title: "Service Visibility Booster",
      url: "boostControl",
      icon: BoostIcon,
    },
    {
      name: "Reports",
      title: "Reports",
      url: "reports",
      icon: ReportIcon,
    },
  ],
  navMain: [
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Change Password",
          description: "Update Account Security Credentials",
          url: "changePassword",
          icon: ChangePasswordIcon,
        },
        {
          title: "Terms & Conditions",
          description: "Legal Policies and Agreements",
          url: "terms&Conditions",
          icon: TermsIcon,
        },
        {
          title: "About us",
          description: "Company Information and Background",
          url: "aboutUs",
          icon: AboutIcon,
        },
        {
          title: "FAQ",
          description: "Frequently Asked Questions",
          url: "faq",
          icon: FaqIcon,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const router = useRouter()
  const pathname = usePathname()

  const handleNavigate = () => {
    router.push('/')
  }

  // Enhanced projects data with active state
  const projectsWithActiveState = data.projects.map(project => {
    // Special case for Users item
    if (project.url === "users") {
      return {
        ...project,
        isActive: pathname?.startsWith("/users") || 
                 pathname?.startsWith("/provider") ||
                 pathname?.startsWith("/providers") ||
                 pathname?.startsWith("/provider/") ||
                 pathname?.startsWith("/providers/")
      }
    }
    // Default case for other items
    return {
      ...project,
      isActive: pathname?.startsWith(`/${project.url}`) || 
               pathname?.startsWith(`/${project.url}/`)
    }
  })

  return (
  <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-[#1E1E1E]" />
      <SidebarContent className="bg-[#1E1E1E] text-white">
        <div className="">
          <NavProjects projects={projectsWithActiveState} />
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter className="bg-[#1E1E1E]">
        <Button 
          onClick={handleNavigate} 
          className="bg-[#FF6600] hover:bg-[#ff6600b9] cursor-pointer"
        >
          Log Out
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

