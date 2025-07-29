"use client"

import { Search} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"
import { useState } from "react"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination"
import CustomModal from "./modal/customModal"
import BookingDetails from "./booking/booking_details"
import BookingCancelReason from "./booking/booking_cancel_reson"


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
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenRej, setIsOpenRej] = useState(false)



    return (
        <div className="w-full bg-white p-6">
            {/* Header with Search and Filter */}



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
                    <Select>
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
                                                src={booking.user.avatar}
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
                                                src={booking.provider.avatar}
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
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="cursor-pointer">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                                                <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                                            </svg>
                                        </button>

                                        <button
                                            onClick={() => setIsOpenRej(!isOpenRej)}
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



            {/* modal component(BOOKING_DETAILS) */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-0 max-h-[0vh]"}
                maxWidth={"!max-w-[45vw]"}>
                <BookingDetails />
            </CustomModal>




            {/* modal component(BOOKING_DELETE) */}
            <CustomModal
                open={isOpenRej}
                setIsOpen={setIsOpenRej}
                className={"p-0 max-h-[0vh]"}
                maxWidth={"!max-w-[35vw]"}>
                <BookingCancelReason />
            </CustomModal>
        </div>
    )
}

