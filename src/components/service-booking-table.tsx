"use client"

import { Search, Filter, MoreHorizontal, Check } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { BookingModal } from "./modals/bookingModal"
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"


const bookingData = [
    {
        id: "001",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "New",
    },
    {
        id: "002",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "003",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Completed",
    },
    {
        id: "004",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "New",
    },
    {
        id: "005",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "006",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Completed",
    },
    {
        id: "007",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "008",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Completed",
    },
    {
        id: "009",
        user: { name: "Md Abdul Hasan", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
        provider: { name: "John Doe", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
        serviceType: "Cleaning",
        service: "Home cleaning",
        price: "₦3,000.00",
        status: "Pending",
    },
]

const getStatusBadge = (status: string) => {
    switch (status) {
        case "New":
            return (
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    New
                </Badge>
            )
        case "Pending":
            return (
                <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Pending
                </Badge>
            )
        case "Completed":
            return (
                <Badge className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Completed
                </Badge>
            )
        default:
            return (
                <Badge className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {status}
                </Badge>
            )
    }
}

export default function ServiceBookingTable() {
    const [searchText, setSearchText] = useState('')
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setIndex] = useState()
    const [selectedFilter, setSelectedFilter] = useState<string>("")
    const router = useRouter()

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };



    return (
        <div className="w-full bg-white p-6">
            {/* Header with Search and Filter */}



            <div className="flex items-center justify-between mb-6">
                <div className="relative w-64">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search"
                        value={searchText}
                        onChange={handleSearchChange}
                        className="pl-10 pr-4 py-2 border border-gray-200 rounded-full bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                                <SelectItem value="All">All</SelectItem>
                                <SelectItem value="New">New</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
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
                            <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Service type</TableHead>
                            <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Service</TableHead>
                            <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Price</TableHead>
                            <TableHead className="text-gray-700 font-bold text-sm py-3 px-4">Status</TableHead>
                            <TableHead className="text-gray-700 font-bold text-sm py-3 pl-8 text-center ">Action</TableHead>
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
                                <TableCell className="py-4 px-4">{getStatusBadge(booking.status)}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        {/* booking modal */}
                                        <BookingModal />

                                        <button className="cursor-pointer">
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

