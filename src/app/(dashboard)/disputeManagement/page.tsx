"use client"

import { Search } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"
import CustomModal from "@/components/modal/customModal"
import DisputCancelReson from "@/components/disputManagement/disput_cancel_reson"



interface Complaint {
  id: string
  fromUser: {
    name: string
    avatar: string
    verified: boolean
  }
  toProvider: {
    name: string
    avatar: string
    verified: boolean
  }
  reason: string
  status: "new" | "under_review" | "resolved"
}

const complaints: Complaint[] = [
  {
    id: "001",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=1",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=11",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "new",
  },
  {
    id: "002",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=2",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=12",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "under_review",
  },
  {
    id: "003",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=3",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=13",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "new",
  },
  {
    id: "004",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=4",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=14",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "resolved",
  },
  {
    id: "005",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=5",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=15",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "under_review",
  },
  {
    id: "006",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=6",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=16",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "new",
  },
  {
    id: "007",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=7",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=17",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "resolved",
  },
  {
    id: "008",
    fromUser: {
      name: "Md. Abid Hasan",
      avatar: "https://i.pravatar.cc/32?img=8",
      verified: true,
    },
    toProvider: {
      name: "John Doe",
      avatar: "https://i.pravatar.cc/32?img=18",
      verified: true,
    },
    reason: "Provider harassed me",
    status: "under_review",
  },
];



const DisputeManagementPage = () => {
  const [searchText, setSearchText] = useState('')
  const [activeTab, setActiveTab] = useState("From users")
  const [selectedFilter, setSelectedFilter] = useState<string>("")
  const router = useRouter()

  const [commonModalOpen, setCommonModalOpen] = useState(false)

console.log(selectedFilter)

  function UserProfile({ user }: { user: { name: string; avatar: string; verified: boolean } }) {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">{user.name}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
          </svg>
        </div>
      </div >
    )
  }
  function ProviderProfile({ provider }: { provider: { name: string; avatar: string; verified: boolean } }) {
    return (
      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={provider.avatar || "/placeholder.svg"} alt={provider.name} />
          <AvatarFallback>
            {provider.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex items-center gap-1">
          <span className="text-sm font-medium">{provider.name}</span>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
          </svg>
        </div>
      </div >
    )
  }

  function StatusBadge({ status }: { status: "new" | "under_review" | "resolved" }) {
    const statusConfig = {
      new: {
        label: "New",
        className: "bg-blue-500 hover:bg-blue-600 text-white rounded-full",
      },
      under_review: {
        label: "Under review",
        className: "bg-orange-500 hover:bg-orange-600 text-white rounded-full",
      },
      resolved: {
        label: "Resolved",
        className: "bg-green-500 hover:bg-green-600 text-white rounded-full",
      },
    }

    const config = statusConfig[status]

    return <Badge className={config.className}>{config.label}</Badge>
  }



  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }


  const handleDetails = () => {
    router.push('/dispute_fom_user')
  }




  return (
    <div>
      <div className="flex justify-between items-center">

        {/* tabs value */}
        <div>
          <Tabs defaultValue="From users"
            onValueChange={handleTabChange}
            className="w-[400px] py-8">
            <TabsList >
              <TabsTrigger value="From users"
                className="px-8 py-4 rounded-full data-[state=active]:bg-[#FF6600] data-[state=active]:text-white cursor-pointer"
              >From users</TabsTrigger>
              <TabsTrigger value="From providers"
                className="px-8 py-4 rounded-full data-[state=active]:bg-[#FF6600] data-[state=active]:text-white cursor-pointer"
              >From providers</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* search value */}
        <div className="relative w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 bg-white border-gray-200 rounded-full h-12 text-sm font-normal text-gray-700"
          />
        </div>

        {/* filter value */}
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
                <SelectItem value="Pending">
                  Pending
                </SelectItem>
                <SelectItem value="Under review">Under review</SelectItem>
                <SelectItem value="Resolved">Resolved</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>




      {/* table */}
      {
        activeTab === "From users" ? (
          <div className="px-4">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="font-semibold text-gray-900">Sl.No</TableHead>
                  <TableHead className="font-semibold text-gray-900">From user</TableHead>
                  <TableHead className="font-semibold text-gray-900">To provider</TableHead>
                  <TableHead className="font-semibold text-gray-900">Reason</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-center">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {complaints.map((complaint) => (
                  <TableRow key={complaint.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{complaint.id}</TableCell>




                    <TableCell>
                      <UserProfile user={complaint.fromUser} />
                    </TableCell>

                    <TableCell>
                      <ProviderProfile provider={complaint.toProvider} />
                    </TableCell>




                    <TableCell className="text-sm text-gray-700">{complaint.reason}</TableCell>
                    <TableCell>
                      <StatusBadge status={complaint.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-3">
                        <button
                          onClick={handleDetails}
                          className="cursor-pointer">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                            <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                          </svg>
                        </button>

                        <button
                          onClick={() => setCommonModalOpen(!commonModalOpen)}
                          className="cursor-pointer">
                          <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                            <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                          </svg>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="px-4">
            <Table>
              <TableHeader>
                <TableRow className="">
                  <TableHead className="font-semibold text-gray-900">Sl.No</TableHead>
                  <TableHead className="font-semibold text-gray-900">From provider</TableHead>
                  <TableHead className="font-semibold text-gray-900">To user</TableHead>
                  <TableHead className="font-semibold text-gray-900">Reason</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900 text-center">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {complaints.map((complaint) => (
                  <TableRow key={complaint.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{complaint.id}</TableCell>




                    <TableCell>
                      <UserProfile user={complaint.fromUser} />
                    </TableCell>

                    <TableCell>
                      <ProviderProfile provider={complaint.toProvider} />
                    </TableCell>




                    <TableCell className="text-sm text-gray-700">{complaint.reason}</TableCell>
                    <TableCell>
                      <StatusBadge status={complaint.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-3">
                        <button
                          // onClick={() => setIsOpen(!isOpen)}
                          className="cursor-pointer">
                          <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                            <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                          </svg>
                        </button>

                        <button
                          onClick={() => setCommonModalOpen(!commonModalOpen)}
                          className="cursor-pointer">
                          <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                            <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                          </svg>
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )
      }





      {/* modal component */}
      <CustomModal
        open={commonModalOpen}
        setIsOpen={setCommonModalOpen}
        className={"p-2 max-h-[0vh]"}
        maxWidth={"!max-w-[35vw]"}
      >
        <DisputCancelReson />
      </CustomModal>

    </div>
  )
}

export default DisputeManagementPage
