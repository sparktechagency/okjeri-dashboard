"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"




const bookingData = [
  {
    id: "001",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "002",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "003",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "004",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "005",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "006",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "007",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "008",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
  {
    id: "009",
    user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    serviceType: "**** **** **** 8569",
    service: "**** **** **** 1256",
    price: "₦3,000.00",
    got: "+  ₦3,0.00",
  },
]

const TransactionsPage = () => {
  const [searchText, setSearchText] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setIndex] = useState()
  const [selectedFilter, setSelectedFilter] = useState<string>("")
  const router = useRouter()

  const handleSearchChange = (event:any) => {
    setSearchText(event.target.value);
  };

console.log(searchText, 'transiton')


  return (
    <div className="w-full bg-white p-6">
      {/* Header with Search and Filter */}



      <div className="flex items-center justify-between mb-6">
       <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search Service"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 bg-white border-gray-200 rounded-full h-12 text-sm font-normal text-gray-700"
            />
          </div>

      </div>



      {/* Table */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 border-b border-gray-200">
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">SI No</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">User</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Provider</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">From</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">To</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Amount</TableHead>
              <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Got</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingData.map((booking, index) => (
              <TableRow key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                <TableCell className="py-4 px-4">
                  <span className="text-gray-900 text-sm font-medium">{booking.id}</span>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={booking.user.avatar || "/placeholder.svg"}
                        alt={booking.user.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 text-sm font-medium">{booking.user.name}</span>
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.26602 21.5L6.36602 18.3L2.76602 17.5L3.11602 13.8L0.666016 11L3.11602 8.2L2.76602 4.5L6.36602 3.7L8.26602 0.5L11.666 1.95L15.066 0.5L16.966 3.7L20.566 4.5L20.216 8.2L22.666 11L20.216 13.8L20.566 17.5L16.966 18.3L15.066 21.5L11.666 20.05L8.26602 21.5ZM10.616 14.55L16.266 8.9L14.866 7.45L10.616 11.7L8.46602 9.6L7.06602 11L10.616 14.55Z" fill="#4285F4" />
                      </svg>

                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Image
                        src={booking.provider.avatar || "/placeholder.svg"}
                        alt={booking.provider.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-gray-900 text-sm font-medium">{booking.provider.name}</span>
                      <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.26602 21.5L6.36602 18.3L2.76602 17.5L3.11602 13.8L0.666016 11L3.11602 8.2L2.76602 4.5L6.36602 3.7L8.26602 0.5L11.666 1.95L15.066 0.5L16.966 3.7L20.566 4.5L20.216 8.2L22.666 11L20.216 13.8L20.566 17.5L16.966 18.3L15.066 21.5L11.666 20.05L8.26602 21.5ZM10.616 14.55L16.266 8.9L14.866 7.45L10.616 11.7L8.46602 9.6L7.06602 11L10.616 14.55Z" fill="#4285F4" />
                      </svg>

                    </div>
                  </div>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <span className="text-gray-900 text-sm">{booking.serviceType}</span>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <span className="text-gray-900 text-sm">{booking.service}</span>
                </TableCell>
                <TableCell className="py-4 px-4">
                  <span className="text-gray-900 text-sm font-bold">{booking.price}</span>
                </TableCell>
                <TableCell className="py-4 px-4 text-[#00B400] font-bold">{(booking.got)}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>


      <div className="mt-4">
        <Pagination className="w-fit ">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>

    </div>
  )
}

export default TransactionsPage
