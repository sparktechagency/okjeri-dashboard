"use client"

import DynamicChartDemo from "@/components/ui/dynamic-chart-demo"
import EarningChart from "@/components/ui/earnings-chart"
import RecentActivities from "@/components/ui/recent-activities"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { CalendarIcon, Download, RefreshCw, ChevronDown } from "lucide-react"



const DashboardPage = () => {
  const [selectedDateRange, setSelectedDateRange] = useState("Last 30 days")
  console.log(setSelectedDateRange)

  return (
    <>
      <div className="flex justify-end">
        <div className="flex items-center space-x-4 p-4 rounded-lg">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 cursor-pointer"
              >
                <CalendarIcon className="w-5 h-5 text-gray-600" />
                <span>{selectedDateRange}</span>
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
          </DropdownMenu>

          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 cursor-pointer"
          >
            <Download className="w-5 h-5 text-gray-600" />
            <span>Export</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black hover:bg-gray-50 cursor-pointer"
          >
            <RefreshCw className="w-5 h-5 text-gray-600" />
            <span>Refresh</span>
          </Button>
        </div>
      </div>

      <div className="w-[845px] flex gap-6 ">

        <DynamicChartDemo />
        <EarningChart />
      </div>

      <div>
        <RecentActivities />
      </div>
    </>
  )
}

export default DashboardPage
