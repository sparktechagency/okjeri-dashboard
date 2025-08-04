"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import CustomModal from "@/components/modal/customModal"
import PayoutManagement from "@/components/Payout/Payout_management"
import PayoutAccepted from "@/components/Payout/payout_accepted"
import PayoutRejUndo from "@/components/Payout/payout_rej_undo"



interface ProviderData {
  id: string
  serialNo: string
  providerName: string
  isVerified: boolean
  date: string
  time: string
  amount: string
  status: "Pending" | "Successful" | "Rejected",
  image: string,
}

const mockData: ProviderData[] = [
  {
    id: "1",
    serialNo: "001",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "2",
    serialNo: "002",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: "3",
    serialNo: "003",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: "4",
    serialNo: "004",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Pending",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: "5",
    serialNo: "005",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Successful",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: "6",
    serialNo: "006",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Rejected",
    image: "https://randomuser.me/api/portraits/men/6.jpg"
  },
  {
    id: "7",
    serialNo: "007",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Successful",
    image: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    id: "8",
    serialNo: "008",
    providerName: "Md.Abul Hassan",
    isVerified: true,
    date: "05-04-2025",
    time: "06:00 PM",
    amount: "₦3,000.00",
    status: "Successful",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
]




const PayoutsPage = () => {
  const [searchText, setSearchText] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setIndex] = useState()
  const [selectedFilter, setSelectedFilter] = useState<string>("")



  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [isOpenThree, setIsOpenThree] = useState(false)

  const [selectedRows, setSelectedRows] = useState<string[]>([])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(mockData.map((item) => item.id))
    } else {
      setSelectedRows([])
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, id])
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id))
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full">Pending</button>
      case "Successful":
        return <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full">Successful</button>
      case "Rejected":
        return <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full">Rejected</button>
      default:
        return <button >{status}</button>
    }
  }

  console.log(selectedFilter)


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


      {/* table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <Checkbox checked={selectedRows.length === mockData.length} onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="font-semibold text-gray-700">S.No</TableHead>
              <TableHead className="font-semibold text-gray-700">Provider name</TableHead>
              <TableHead className="font-semibold text-gray-700">Date</TableHead>
              <TableHead className="font-semibold text-gray-700">Time</TableHead>
              <TableHead className="font-semibold text-gray-700">Amount</TableHead>
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="font-semibold text-gray-700 flex justify-center ml-24">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockData.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>
                  <Checkbox
                    checked={selectedRows.includes(item.id)}
                    onCheckedChange={(checked) => handleSelectRow(item.id, checked as boolean)}
                  />
                </TableCell>
                <TableCell className="font-medium text-gray-900">{item.serialNo}</TableCell>
                <TableCell className="flex items-center gap-5 ">
                  <Image src={item?.image} alt="photo" width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover" />
                  <p> {item.providerName}</p>
                  {
                    item.isVerified === true && <span className="ml-8">
                      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
                      </svg>
                    </span>
                  }


                </TableCell>
                <TableCell className="text-gray-600">{item.date}</TableCell>
                <TableCell className="text-gray-600">{item.time}</TableCell>
                <TableCell className="font-semibold text-gray-900">{item.amount}</TableCell>
                <TableCell className="rounded-full">{getStatusBadge(item.status)}</TableCell>

                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="cursor-pointer">
                      <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                        <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                      </svg>
                    </button>


                    <button
                      onClick={() => setIsOpenTwo(!isOpenTwo)}
                      className="cursor-pointer">
                      <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="0.5" width="37" height="37" rx="5" fill="#D8FFD8" />
                        <path d="M15.1933 27L7.5 19.4158L9.42331 17.5198L15.1933 23.2079L27.5767 11L29.5 12.8961L15.1933 27Z" fill="#00B400" />
                      </svg>
                    </button>


                    <button
                      onClick={() => setIsOpenThree(!isOpenThree)}
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


      {/* modal component(PAYOUT_DETAILS) */}
      <CustomModal
        open={isOpen}
        setIsOpen={setIsOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[40vw]"}
      >
        <PayoutManagement />
      </CustomModal>

      {/* modal component(PAYOUT_ACCEPTED) */}
      <CustomModal
        open={isOpenTwo}
        setIsOpen={setIsOpenTwo}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <PayoutAccepted
          open={isOpenTwo}
          setIsOpen={setIsOpenTwo}
        />
      </CustomModal>





      {/* modal components(PAYOUT_REJECT) */}
      <CustomModal
        open={isOpenThree}
        setIsOpen={setIsOpenThree}
        className={"p-2 max-h-[0vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <PayoutRejUndo
          open={isOpenThree}
          setIsOpen={setIsOpenThree}
        />
      </CustomModal>
    </div>
  )
}

export default PayoutsPage




