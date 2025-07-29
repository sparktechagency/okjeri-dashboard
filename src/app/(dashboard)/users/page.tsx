
"use client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { Search } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CustomModal from "@/components/modal/customModal"
import UserDetailsPage from "@/components/user/user-details"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import Image from "next/image"
import { verify } from "crypto"
import UnverifiedUserDetails from "@/components/user/unverifed-user-details"


interface User {
  id: string | number;
  name: string;
  email: string;
  phone_number: string;
  location: string;
  avatar: string;
  verified?: boolean;
}

const invoices: User[] = [
  {
    "id": 1,
    "name": "Emma Johnson",
    "email": "emma.johnson@example.com",
    "phone_number": "+1 (555) 123-4567",
    "location": "New York, USA",
    "avatar": "https://randomuser.me/api/portraits/women/1.jpg",
    "verified": true
  },
  {
    "id": 2,
    "name": "Carlos Mendoza",
    "email": "c.mendoza@example.com",
    "phone_number": "+52 55 1234 5678",
    "location": "Mexico City, Mexico",
    "avatar": "https://randomuser.me/api/portraits/men/1.jpg",
    "verified": true
  },
  {
    "id": 3,
    "name": "Priya Patel",
    "email": "priya.patel@example.com",
    "phone_number": "+91 98765 43210",
    "location": "Mumbai, India",
    "avatar": "https://randomuser.me/api/portraits/women/2.jpg",
    "verified": true
  },
  {
    "id": 4,
    "name": "James Wilson",
    "email": "j.wilson@example.co.uk",
    "phone_number": "+44 7700 123456",
    "location": "London, UK",
    "avatar": "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    "id": 5,
    "name": "Sophie Martin",
    "email": "sophie.martin@example.fr",
    "phone_number": "+33 6 12 34 56 78",
    "location": "Paris, France",
    "avatar": "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    "id": 6,
    "name": "Liam Nguyen",
    "email": "liam.n@example.com",
    "phone_number": "+61 412 345 678",
    "location": "Sydney, Australia",
    "avatar": "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    "id": 7,
    "name": "Olivia Kim",
    "email": "olivia.kim@example.co.kr",
    "phone_number": "+82 10-1234-5678",
    "location": "Seoul, South Korea",
    "avatar": "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    "id": 8,
    "name": "Mohammed Al-Farsi",
    "email": "m.alfarsi@example.ae",
    "phone_number": "+971 50 123 4567",
    "location": "Dubai, UAE",
    "avatar": "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    "id": 9,
    "name": "Aisha Abubakar",
    "email": "a.abubakar@example.ng",
    "phone_number": "+234 801 234 5678",
    "location": "Lagos, Nigeria",
    "avatar": "https://randomuser.me/api/portraits/women/5.jpg"
  },
  {
    "id": 10,
    "name": "Hiroshi Tanaka",
    "email": "hiroshi.t@example.jp",
    "phone_number": "+81 90-1234-5678",
    "location": "Tokyo, Japan",
    "avatar": "https://randomuser.me/api/portraits/men/5.jpg"
  },
]

const UserPage = () => {
  const [searchText, setSearchText] = useState('')
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setIndex] = useState()
  const [selectedFilter, setSelectedFilter] = useState<string>("")
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("Users")
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)

  const [users, setUsers] = useState<User[]>(invoices)
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null)

  const handleDeleteUser = (id: string) => {
    setUsers(users.filter((user) => user.id !== id))
    setOpenPopoverId(null) // Close the popover after deletion
  }




  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleReviewRequest = () => {
    router.push('/userReviewRequest')
  }
  const handleKYCRequest = () => {
    router.push('/userReviewRequest')
  }


  useEffect(() => {
    if (activeTab === "Providers") {
      router.push('/provider')
    }
  }, [activeTab, router])


  const handleNavigate = (params) => {

    if (params.message === 'verified_text') {
      setIsOpen(!isOpen)
    } else {
      setIsOpenTwo(!isOpenTwo)
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between">
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
            onClick={handleReviewRequest}
            className="px-6 py-4 bg-[#E1DDFF] rounded-full text-[#8979FF] flex items-center gap-3 cursor-pointer">
            Send notification to all unverified users
            <span>
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.52654 15.9126C1.16308 16.0547 0.817791 16.0235 0.490674 15.8189C0.163558 15.6142 0 15.3169 0 14.9269V10.1312L8.7231 7.99974L0 5.86832V1.07262C0 0.68186 0.163558 0.384527 0.490674 0.180621C0.817791 -0.0232854 1.16308 -0.0545465 1.52654 0.0868378L18.3185 7.01396C18.7728 7.20934 19 7.53793 19 7.99974C19 8.46155 18.7728 8.79014 18.3185 8.98553L1.52654 15.9126Z" fill="#8979FF" />
              </svg>

            </span>
          </button>

          <button onClick={handleKYCRequest} className="cursor-pointer px-6 py-4 bg-[#FF6600] rounded-full text-white">
            KYC Requests (10)
          </button>
        </div>
      </div>

      <div className="flex justify-between">
        <Tabs defaultValue="Users"
          onValueChange={handleTabChange}
          className="w-[400px] py-8">
          <TabsList >
            <TabsTrigger value="Users"
              className="px-8 py-4 rounded-full data-[state=active]:bg-[#FF6600] data-[state=active]:text-white cursor-pointer"
            >Users</TabsTrigger>
            <TabsTrigger value="Providers"
              className="px-8 py-4 rounded-full data-[state=active]:bg-[#FF6600] data-[state=active]:text-white cursor-pointer"
            >Providers</TabsTrigger>
          </TabsList>
        </Tabs>





        <div className="py-8">
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
                <SelectItem value="Verified">
                  <div className="flex items-center gap-2">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
                    </svg>
                    <span>Verified</span>
                  </div>
                </SelectItem>
                <SelectItem value="Unverified">Unverified</SelectItem>
                <SelectItem value="Boosted">Boosted</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

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
              <TableCell className="flex items-center gap-5 ">
                <Image src={user?.avatar} alt="photo" width={50} height={50} className="w-[50px] h-[50px] rounded-full object-cover" />
                <p> {user.name}</p>
                {
                  user.verified === true && <span className="ml-8">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
                    </svg>
                  </span>
                }


              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone_number}</TableCell>
              <TableCell>{user.location}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleNavigate({
                      message: user.verified ? 'verified_text' : 'unverified_text'
                    })}
                    className="cursor-pointer">
                    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                      <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
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

                        <span>Are you sure to delete this user?</span>
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


      {/* modal component(USER_DETAILS_PAGE) */}
      <CustomModal
        open={isOpen}
        setIsOpen={setIsOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[40vw]"}
      >
        <UserDetailsPage />
      </CustomModal>


      {/* modal component(Unverified_User_Details) */}
      <CustomModal
        open={isOpenTwo}
        setIsOpen={setIsOpenTwo}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[40vw]"}
      >
        <UnverifiedUserDetails />
      </CustomModal>
    </div>
  )
}

export default UserPage