
'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'
import CustomModal from '@/components/modal/customModal'
import RequestedServiceModal from '@/components/services/requested_service'
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from '@/components/ui/button'




interface User {
    id: string | number;
    name: string;
    email: string;
    phone_number: string;
    service: string;
    avatar: string;
    verified?: boolean;
}

const invoices: User[] = [
    {
        "id": 1,
        "name": "Emma Johnson",
        "email": "emma.johnson@example.com",
        "phone_number": "+1 (555) 123-4567",
        "service": "New York, USA",
        "avatar": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "id": 2,
        "name": "Carlos Mendoza",
        "email": "c.mendoza@example.com",
        "phone_number": "+52 55 1234 5678",
        "service": "Mexico City, Mexico",
        "avatar": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        "id": 3,
        "name": "Priya Patel",
        "email": "priya.patel@example.com",
        "phone_number": "+91 98765 43210",
        "service": "Mumbai, India",
        "avatar": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "id": 4,
        "name": "James Wilson",
        "email": "j.wilson@example.co.uk",
        "phone_number": "+44 7700 123456",
        "service": "London, UK",
        "avatar": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        "id": 5,
        "name": "Sophie Martin",
        "email": "sophie.martin@example.fr",
        "phone_number": "+33 6 12 34 56 78",
        "service": "Paris, France",
        "avatar": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        "id": 6,
        "name": "Liam Nguyen",
        "email": "liam.n@example.com",
        "phone_number": "+61 412 345 678",
        "service": "Sydney, Australia",
        "avatar": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "id": 7,
        "name": "Olivia Kim",
        "email": "olivia.kim@example.co.kr",
        "phone_number": "+82 10-1234-5678",
        "service": "Seoul, South Korea",
        "avatar": "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        "id": 8,
        "name": "Mohammed Al-Farsi",
        "email": "m.alfarsi@example.ae",
        "phone_number": "+971 50 123 4567",
        "service": "Dubai, UAE",
        "avatar": "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
        "id": 9,
        "name": "Aisha Abubakar",
        "email": "a.abubakar@example.ng",
        "phone_number": "+234 801 234 5678",
        "service": "Lagos, Nigeria",
        "avatar": "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        "id": 10,
        "name": "Hiroshi Tanaka",
        "email": "hiroshi.t@example.jp",
        "phone_number": "+81 90-1234-5678",
        "service": "Tokyo, Japan",
        "avatar": "https://randomuser.me/api/portraits/men/55.jpg"
    },
];


const RequestedServices = () => {
    const [searchText, setSearchText] = useState('')
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [users, setUsers] = useState<User[]>(invoices)
    const [openPopoverId, setOpenPopoverId] = useState<string | null>(null)


    const handleNavigate = () => {
        try {
            router.back()
        } catch (error) {
            router.push('/')
        }
    }




    const handleDeleteUser = (id: string) => {
        setUsers(users.filter((user) => user.id !== id))
        setOpenPopoverId(null) // Close the popover after deletion
    }


    return (
        <div className='mt-8'>
            <div className='flex justify-evenly'>

                <div
                    onClick={handleNavigate}
                    className="cursor-pointer ">
                    <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 20.3017H14.9669L20.8058 26.1594L18.9711 28L10 19L18.9711 10L20.8058 11.8406L14.9669 17.6983H30V20.3017Z" fill="black" />
                    </svg>
                </div>


                <div className='flex justify-center'>

                    <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                        <Input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="px-10 py-6 w-80  rounded-full"
                            placeholder="Search"
                        />
                    </div>
                </div>
                <div>
                </div>
            </div>

            <div className='mt-10 px-4'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Sl. No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone number</TableHead>
                            <TableHead>Requested service</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices?.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell className="flex items-center gap-5 ">
                                    <Image src={user?.avatar} alt="photo" width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover" />
                                    <p> {user.name}</p>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone_number}</TableCell>
                                <TableCell>{user.service}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <button
                                            onClick={() => setIsOpen(!isOpen)}
                                            className="cursor-pointer">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width="37" height="37" rx="5" fill="#D8FFD8" />
                                                <path d="M15.1933 27L7.5 19.4158L9.42331 17.5198L15.1933 23.2079L27.5767 11L29.5 12.8961L15.1933 27Z" fill="#00B400" />
                                            </svg>

                                        </button>
                                        {/* Delete Popover and Button */}
                                        <Popover
                                            open={openPopoverId === user.id}
                                            onOpenChange={(open) => setOpenPopoverId(open ? user.id : null)}
                                        >
                                            <PopoverTrigger asChild>
                                                <button className="cursor-pointer">
                                                    <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                                                        <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                                                    </svg>
                                                </button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-3 text-sm" align="end">
                                                <div className="flex items-center gap-2">
                                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 0.946045C3.61758 0.946045 0.875 3.68862 0.875 7.07104C0.875 10.4535 3.61758 13.196 7 13.196C10.3824 13.196 13.125 10.4535 13.125 7.07104C13.125 3.68862 10.3824 0.946045 7 0.946045ZM6.5625 4.11792C6.5625 4.05776 6.61172 4.00854 6.67188 4.00854H7.32812C7.38828 4.00854 7.4375 4.05776 7.4375 4.11792V7.83667C7.4375 7.89683 7.38828 7.94604 7.32812 7.94604H6.67188C6.61172 7.94604 6.5625 7.89683 6.5625 7.83667V4.11792ZM7 10.1335C6.82827 10.13 6.66476 10.0594 6.54455 9.93667C6.42434 9.81398 6.35701 9.64906 6.35701 9.47729C6.35701 9.30553 6.42434 9.14061 6.54455 9.01792C6.66476 8.89523 6.82827 8.82455 7 8.82104C7.17173 8.82455 7.33524 8.89523 7.45545 9.01792C7.57566 9.14061 7.64299 9.30553 7.64299 9.47729C7.64299 9.64906 7.57566 9.81398 7.45545 9.93667C7.33524 10.0594 7.17173 10.13 7 10.1335Z" fill="#FAAD14" />
                                                    </svg>

                                                    <span>Are you sure to delete this service?</span>
                                                </div>
                                                <div className="mt-2 flex justify-end gap-2">
                                                    <Button variant="outline" size="sm" onClick={() => setOpenPopoverId(null)} className="h-8 px-3">
                                                        No
                                                    </Button>
                                                    <Button
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => handleDeleteUser(user.id)}
                                                        className="h-8 px-3"
                                                    >
                                                        Yes
                                                    </Button>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>


            {/* modal component(REQUESTED_SERVICE) */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-2 max-h-[50vh]"}
                maxWidth={"!max-w-[30vw]"}
            >
                <RequestedServiceModal />
            </CustomModal>
        </div >
    )
}

export default RequestedServices
