

"use client"

import * as React from "react"
import { LogOut, Settings2 } from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
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
import { useRouter } from "next/navigation"



export const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  projects: [
    {
      name: "Dashboard",
      url: "dashboard",
      icon: DashboardIcon,
    },
    {
      name: "Users",
      url: "users",
      icon: UsersIcon,
    },
    {
      name: "Bookings",
      url: "bookings",
      icon: BookingIcon,
    },
    {
      name: "Services",
      url: "services",
      icon: ServiceIcon,
    },
    {
      name: "Transactions",
      url: "transactions",
      icon: TransactionIcon,
    },
    {
      name: "Payouts",
      url: "payouts",
      icon: PayoutIcon,
    },
    {
      name: "Referral management",
      url: "referralManagement",
      icon: ReferralIcon,
    },
    {
      name: "Dispute management",
      url: "disputeManagement",
      icon: DisputeIcon,
    },
    {
      name: "Promotions",
      url: "promotions",
      icon: Promotions,
    },
    {
      name: "Boost control",
      url: "boostControl",
      icon: BoostIcon,
    },
    {
      name: "Reports",
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

  const handleNavigate = () => {
    router.push('/')
  }

  const sidebarContext = useSidebar()
  const isCollapsedVerify = sidebarContext.state




  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="bg-[#1E1E1E]" />
      <SidebarContent className="bg-[#1E1E1E] ">
        <div className="">
          <NavProjects projects={data.projects} />
        </div>
        <NavMain items={data.navMain} />
      </SidebarContent>



      <SidebarFooter className="bg-[#1E1E1E]">
        <Button
          onClick={handleNavigate}
          className="bg-[#FF6600] hover:bg-[#ff6600b9] cursor-pointer"
        >
          {
            isCollapsedVerify === 'collapsed'
              ? <LogOut />
              : (
                <>
                  <LogOut />
                  <span>Logout</span>
                </>
              )
          }

        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

