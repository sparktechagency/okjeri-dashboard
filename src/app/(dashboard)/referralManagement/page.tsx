
"use client"

import { useState } from "react"
import { LayoutGrid, HelpCircle, Settings } from "lucide-react"
import OverviewContent from "@/components/referralManagement/overview-content"
import RequestsContent from "@/components/referralManagement/requests-content"
import SettingsContent from "@/components/referralManagement/settings-content"



interface Referral {
  slNo: string
  referrer: {
    name: string
    avatar: string
    isVerified: boolean
  }
  referred: {
    name: string
    avatar: string
  }
  email: string
  date: string
}

const referrals: Referral[] = [
  {
    slNo: "001",
    referrer: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-1.png", isVerified: true },
    referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-2.png" },
    email: "example@gmail.com",
    date: "05-04-2025",
  },
  {
    slNo: "001",
    referrer: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-3.png", isVerified: true },
    referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-4.png" },
    email: "example@gmail.com",
    date: "05-04-2025",
  },
  {
    slNo: "001",
    referrer: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-5.png", isVerified: true },
    referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-1.png" },
    email: "example@gmail.com",
    date: "05-04-2025",
  },
  {
    slNo: "001",
    referrer: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-2.png", isVerified: true },
    referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-3.png" },
    email: "example@gmail.com",
    date: "05-04-2025",
  },
  {
    slNo: "001",
    referrer: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-4.png", isVerified: true },
    referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-5.png" },
    email: "example@gmail.com",
    date: "05-04-2025",
  },
]




export default function ReferralManagementPage() {
  const [activeTab, setActiveTab] = useState("overview")
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      {/* Navigation */}
      <nav className="flex items-center space-x-8 border-b border-gray-200 pb-0 mb-8">
        <div
          className={`flex items-center space-x-2 pb-2 cursor-pointer ${
            activeTab === "overview"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("overview")}
        >
          <LayoutGrid className="w-5 h-5" />
          <span className="font-medium">Overview</span>
        </div>
        <div
          className={`flex items-center space-x-2 pb-2 cursor-pointer ${
            activeTab === "requests"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("requests")}
        >
          <HelpCircle className="w-5 h-5" />
          <span className="font-medium">Requests</span>
        </div>
        <div
          className={`flex items-center space-x-2 pb-2 cursor-pointer ${
            activeTab === "settings"
              ? "text-orange-500 border-b-2 border-orange-500"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Settings</span>
        </div>
      </nav>

      {activeTab === "overview" && <OverviewContent />}
      {activeTab === "requests" && <RequestsContent />}
      {activeTab === "settings" && <SettingsContent />}
    </div>
  )
}
