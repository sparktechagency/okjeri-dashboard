"use client"

import * as React from "react"
import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
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

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },

    teams: [
        {
            name: "Acme Inc",
            logo: GalleryVerticalEnd,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
        {
            name: "Evil Corp.",
            logo: Command,
            plan: "Free",
        },
    ],
    
    projects: [
        {
            name: "Dashboard",
            url: "commonDashboard",
            icon: Frame,
        },
        {
            name: "Users",
            url: "users",
            icon: Frame,
        },
        {
            name: "Bookings",
            url: "bookings",
            icon: Frame,
        },
        {
            name: "Services",
            url: "services",
            icon: Frame,
        },
        {
            name: "Transactions",
            url: "transitions",
            icon: Frame,
        },
        {
            name: "Payouts",
            url: "payouts",
            icon: Frame,
        },
        {
            name: "Referral management",
            url: "referralManagement",
            icon: Frame,
        },
        {
            name: "Dispute management",
            url: "disputeManagement",
            icon: Frame,
        },
        {
            name: "Promotions",
            url: "promotions",
            icon: Frame,
        },
        {
            name: "Boost control",
            url: "BoostControl",
            icon: Frame,
        },
        {
            name: "Reports",
            url: "reports",
            icon: Frame,
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
                    url: "#",
                    icon: (
                        <svg
                            className="h-4 w-4 text-white"
                            viewBox="0 0 30 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 9.222C6.51747 9.222 6.1096 9.05587 5.7764 8.7236..."
                                fill="currentColor"
                            />
                        </svg>
                    ),
                },
                {
                    title: "Terms & Conditions",
                    url: "#",
                },
                {
                    title: "About us",
                    url: "#",
                },
                {
                    title: "FAQ",
                    url: "#",
                },
            ],
        },
    ],
    
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <TeamSwitcher teams={data.teams} />
            </SidebarHeader>


            <SidebarContent>
                <NavProjects projects={data.projects} />
                <NavMain items={data.navMain} /> 
            </SidebarContent>


            <SidebarFooter>
               <Button>Log Out</Button>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
