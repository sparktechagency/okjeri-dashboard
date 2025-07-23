
'use client'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Image from 'next/image'


const ReviewRequestPage = () => {
    const [searchText, setSearchText] = useState('')
    const router = useRouter()

    const handleNavigate = () => {
        try {
            router.back()
        } catch (error) {
            router.push('/')
        }
    }

   const invoices = [
    {
        "id": 1,
        "name": "Emma Johnson",
        "email": "emma.johnson@example.com",
        "phone_number": "+1 (555) 123-4567",
        "location": "New York, USA",
        "image": "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
        "id": 2,
        "name": "Carlos Mendoza",
        "email": "c.mendoza@example.com",
        "phone_number": "+52 55 1234 5678",
        "location": "Mexico City, Mexico",
        "image": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        "id": 3,
        "name": "Priya Patel",
        "email": "priya.patel@example.com",
        "phone_number": "+91 98765 43210",
        "location": "Mumbai, India",
        "image": "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        "id": 4,
        "name": "James Wilson",
        "email": "j.wilson@example.co.uk",
        "phone_number": "+44 7700 123456",
        "location": "London, UK",
        "image": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
        "id": 5,
        "name": "Sophie Martin",
        "email": "sophie.martin@example.fr",
        "phone_number": "+33 6 12 34 56 78",
        "location": "Paris, France",
        "image": "https://randomuser.me/api/portraits/women/33.jpg"
    },
    {
        "id": 6,
        "name": "Liam Nguyen",
        "email": "liam.n@example.com",
        "phone_number": "+61 412 345 678",
        "location": "Sydney, Australia",
        "image": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        "id": 7,
        "name": "Olivia Kim",
        "email": "olivia.kim@example.co.kr",
        "phone_number": "+82 10-1234-5678",
        "location": "Seoul, South Korea",
        "image": "https://randomuser.me/api/portraits/women/28.jpg"
    },
    {
        "id": 8,
        "name": "Mohammed Al-Farsi",
        "email": "m.alfarsi@example.ae",
        "phone_number": "+971 50 123 4567",
        "location": "Dubai, UAE",
        "image": "https://randomuser.me/api/portraits/men/68.jpg"
    },
    {
        "id": 9,
        "name": "Aisha Abubakar",
        "email": "a.abubakar@example.ng",
        "phone_number": "+234 801 234 5678",
        "location": "Lagos, Nigeria",
        "image": "https://randomuser.me/api/portraits/women/72.jpg"
    },
    {
        "id": 10,
        "name": "Hiroshi Tanaka",
        "email": "hiroshi.t@example.jp",
        "phone_number": "+81 90-1234-5678",
        "location": "Tokyo, Japan",
        "image": "https://randomuser.me/api/portraits/men/55.jpg"
    },
]



    return (
        <div>
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
                            placeholder="Search..."
                        />
                    </div>
                </div>
                <div>
                </div>
            </div>

            <div className='mt-10'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Sl. No</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone number</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {invoices?.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone_number}</TableCell>
                                <TableCell>{user.location}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <button className="cursor-pointer">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                                                <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                                            </svg>
                                        </button>
                                        <button className="cursor-pointer">
                                            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect y="0.5" width="37" height="37" rx="5" fill="#D8FFD8" />
                                                <path d="M15.1933 27L7.5 19.4158L9.42331 17.5198L15.1933 23.2079L27.5767 11L29.5 12.8961L15.1933 27Z" fill="#00B400" />
                                            </svg>

                                        </button>
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
        </div >
    )
}

export default ReviewRequestPage
