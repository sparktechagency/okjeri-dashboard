"use client"

import * as React from "react"
import {
   
    Frame,

    Settings2,

} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"
import { title } from "process"
import { AboutIcon, BookingIcon, BoostIcon, ChangePasswordIcon, DashboardIcon, DisputeIcon, FaqIcon, PayoutIcon, ReferralIcon, ReportIcon, ServiceIcon, TermsIcon, TransactionIcon, UsersIcon } from "./custom-icons"

// This is sample data.
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
            title: "Booking Management Portal",
            url: "bookings",
            icon: BookingIcon,
        },
        {
            name: "Services",
            title: "Service Catalog Management",
            url: "services",
            icon: ServiceIcon,
        },
        {
            name: "Transactions",
            title: "Financial Transactions Log",
            url: "transactions",
            icon: TransactionIcon,
        },
        {
            name: "Payouts",
            title: "Payment Processing System",
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
            title: "Marketing Campaign Manager",
            url: "promotions",
            icon: Frame,
        },
        {
            name: "Boost control",
            title: "Service Visibility Booster",
            url: "boostControl",
            icon: BoostIcon,
        },
        {
            name: "Reports",
            title: "Analytics and Reporting Hub",
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
                    icon:TermsIcon,
                },
                {
                    title: "About us",
                    description: "Company Information and Background",
                    url: "aboutUs",
                    icon:AboutIcon,
                },
                {
                    title: "FAQ",
                    description: "Frequently Asked Questions",
                    url: "faq",
                    icon:FaqIcon,
                },
            ],
        },
    ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="bg-[#1E1E1E]">

            </SidebarHeader>





            <SidebarContent className="bg-[#1E1E1E] text-white">
                <div className="">
                    <NavProjects projects={data.projects} />
                </div>
                <NavMain items={data.navMain} />
            </SidebarContent>






            <SidebarFooter className="bg-[#1E1E1E]">
                <Button className="bg-[#FF6600] hover:bg-[#ff6600b9] cursor-pointer">Log Out</Button>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
