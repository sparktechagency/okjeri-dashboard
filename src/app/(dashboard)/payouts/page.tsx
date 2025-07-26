"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"


const PayoutsPage = () => {
  const [searchText, setSearchText] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setIndex] = useState()
  const [selectedFilter, setSelectedFilter] = useState<string>("")
  const router = useRouter()


  console.log(searchText)
  console.log(selectedFilter, 'filter')

  return (
    <div className="py-10">

      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search "
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 bg-white border-gray-200 rounded-full h-12 text-sm font-normal text-gray-700"
          />
        </div>

        <div className="">
          <Select onValueChange={(value) => setSelectedFilter(value)}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                {/* Filter icon */}
                <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.875 6.4H21.125V9.6H4.875V6.4ZM0 0H26V3.2H0V0ZM9.75 12.8H16.25V16H9.75V12.8Z" fill="currentColor" className="text-muted-foreground" />
                </svg>
                <SelectValue placeholder="Filter" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel></SelectLabel>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Successful">Successful</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default PayoutsPage
