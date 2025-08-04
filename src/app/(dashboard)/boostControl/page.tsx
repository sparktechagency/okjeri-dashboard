
"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import Image from "next/image"
import CustomModal from "@/components/modal/customModal"
import ProviderDetailsOne from "@/components/boostControl/provider_details_one"
import RejectBoostingRequest from "@/components/boostControl/reject_boosting_request"

interface boostDataProps {
  id: string
  name: string
  avatar: string
  verified: boolean
  startDate: string
  endDate: string
  totalClicks: number
  totalBookings: number
}

const boostData: boostDataProps[] = [
  {
    id: "001",
    name: "Md. Abid Hasan",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: true,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "002",
    name: "Jane Doe",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    verified: true,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "003",
    name: "John Smith",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: false,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "004",
    name: "Alice Brown",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: true,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "005",
    name: "Robert Green",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: false,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "006",
    name: "Emily White",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: true,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "007",
    name: "David Black",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    verified: true,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
  {
    id: "008",
    name: "Sarah Blue",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    verified: false,
    startDate: "05-04-2025",
    endDate: "05-04-2025",
    totalClicks: 1000,
    totalBookings: 50,
  },
]
const BoostControlPage = () => {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [controlledItems, setControlledItems] = useState<Record<string, boolean>>({})





  const handlePriceControl = () => {
    router.push('/pricingControl')
  }


  const handleBoostingRequests = () => {
    router.push('/boostingRequests')
  }

  const handleControl = (id: string) => {
    setControlledItems(prev => ({
      ...prev,
      [id]: !prev[id] // toggle the control state for this specific item
    }))
  }







  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between pb-8">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 bg-white border-gray-200 rounded-full h-12 text-sm font-normal text-gray-700"
          />
        </div>


        <div className="flex items-center gap-10">
          <button
            onClick={handlePriceControl}
            className="px-8 py-4 border rounded-full  flex items-center gap-3 cursor-pointer">
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.74922 20L7.34922 16.8C7.13255 16.7167 6.92855 16.6167 6.73722 16.5C6.54589 16.3833 6.35822 16.2583 6.17422 16.125L3.19922 17.375L0.449219 12.625L3.02422 10.675C3.00755 10.5583 2.99922 10.446 2.99922 10.338V9.663C2.99922 9.55433 3.00755 9.44167 3.02422 9.325L0.449219 7.375L3.19922 2.625L6.17422 3.875C6.35755 3.74167 6.54922 3.61667 6.74922 3.5C6.94922 3.38333 7.14922 3.28333 7.34922 3.2L7.74922 0H13.2492L13.6492 3.2C13.8659 3.28333 14.0702 3.38333 14.2622 3.5C14.4542 3.61667 14.6416 3.74167 14.8242 3.875L17.7992 2.625L20.5492 7.375L17.9742 9.325C17.9909 9.44167 17.9992 9.55433 17.9992 9.663V10.337C17.9992 10.4457 17.9826 10.5583 17.9492 10.675L20.5242 12.625L17.7742 17.375L14.8242 16.125C14.6409 16.2583 14.4492 16.3833 14.2492 16.5C14.0492 16.6167 13.8492 16.7167 13.6492 16.8L13.2492 20H7.74922ZM10.5492 13.5C11.5159 13.5 12.3409 13.1583 13.0242 12.475C13.7076 11.7917 14.0492 10.9667 14.0492 10C14.0492 9.03333 13.7076 8.20833 13.0242 7.525C12.3409 6.84167 11.5159 6.5 10.5492 6.5C9.56589 6.5 8.73655 6.84167 8.06122 7.525C7.38589 8.20833 7.04855 9.03333 7.04922 10C7.04989 10.9667 7.38755 11.7917 8.06222 12.475C8.73689 13.1583 9.56589 13.5 10.5492 13.5Z" fill="black" />
            </svg>
            Pricing controls
          </button>

          <button
            onClick={handleBoostingRequests}
            className="cursor-pointer px-6 py-4 bg-[#FF6600] rounded-full text-white">
            Requests (10)
          </button>
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Sl. No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Started date</TableHead>
            <TableHead>Ending date</TableHead>
            <TableHead className="text-center">Total clicks</TableHead>
            <TableHead className="text-center">Total bookings</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {boostData?.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell className="flex items-center gap-5 ">
                <Image src={item?.avatar} alt="photo" width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover" />
                <p> {item.name}</p>
                {
                  item.verified === true && <span className="ml-8">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
                    </svg>
                  </span>
                }


              </TableCell>
              <TableCell>{item.startDate}</TableCell>
              <TableCell>{item.endDate}</TableCell>
              <TableCell className="text-center">{item.totalClicks}</TableCell>
              <TableCell className="text-center">{item.totalBookings}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer">
                    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                      <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                    </svg>
                  </button>


                  {/* CONTROL FUNCTIONALITY */}
                  {
                    controlledItems[item.id] ? (
                      <button
                        onClick={() => handleControl(item.id)}
                        className="cursor-pointer"
                      >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="37" height="37" rx="5" fill="#F2E8FF" />
                          <path d="M12.5 11V27L25.5 19L12.5 11Z" fill="#9747FF" />
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleControl(item.id)}
                        className="cursor-pointer"
                      >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="37" height="37" rx="5" fill="#EBF4FF" />
                          <path d="M21.3333 27V11H26V27H21.3333ZM12 27V11H16.6667V27H12Z" fill="#006FFF" />
                        </svg>
                      </button>
                    )
                  }


                  <button
                    onClick={() => setIsOpenTwo(!isOpenTwo)}
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

      {/* modal component(BOOSTING_DETAILS_ONE) */}
      <CustomModal
        open={isOpen}
        setIsOpen={setIsOpen}
        className={"p-2 max-h-[0vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <ProviderDetailsOne />
      </CustomModal>




      {/* modal component(BOOSTING_REJ) */}
      <CustomModal
        open={isOpenTwo}
        setIsOpen={setIsOpenTwo}
        className={"p-2 max-h-[0vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <RejectBoostingRequest />
      </CustomModal>


    </div>
  )
}

export default BoostControlPage