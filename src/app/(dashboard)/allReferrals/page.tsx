"use client"


import { Search, CalendarDays, } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CustomModal from "@/components/modal/customModal"
import ReferralDetails from "@/components/referralManagement/referral-details"

interface Referral {
    slNo: string;
    referrer: {
        name: string;
        avatar: string;
        isVerified: boolean;
    };
    referred: {
        name: string;
        avatar: string;
    };
    email: string;
    date: string;
}

const referrals: Referral[] = [
    {
        slNo: "001",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-2.png" },
        email: "example1@gmail.com",
        date: "05-04-2025",
    },
    {
        slNo: "002",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Sakib Khan", avatar: "/avatars/avatar-4.png" },
        email: "example2@gmail.com",
        date: "06-04-2025",
    },
    {
        slNo: "003",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Ayman Rafat", avatar: "/avatars/avatar-1.png" },
        email: "example3@gmail.com",
        date: "06-04-2025",
    },
    {
        slNo: "004",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Rahim Uddin", avatar: "/avatars/avatar-3.png" },
        email: "example4@gmail.com",
        date: "07-04-2025",
    },
    {
        slNo: "005",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Shafiq Ahmed", avatar: "/avatars/avatar-5.png" },
        email: "example5@gmail.com",
        date: "07-04-2025",
    },
    {
        slNo: "006",
        referrer: { name: "Tanvir Islam", avatar: "https://randomuser.me/api/portraits/men/10.jpg", isVerified: true },
        referred: { name: "Rakib Hasan", avatar: "/avatars/avatar-6.png" },
        email: "example6@gmail.com",
        date: "08-04-2025",
    },
    {
        slNo: "007",
        referrer: { name: "Tanvir Islam", avatar: "https://randomuser.me/api/portraits/men/10.jpg", isVerified: false },
        referred: { name: "Almas Hossain", avatar: "/avatars/avatar-7.png" },
        email: "example7@gmail.com",
        date: "08-04-2025",
    },
    {
        slNo: "008",
        referrer: { name: "Nayeem Rahman", avatar: "https://randomuser.me/api/portraits/men/12.jpg", isVerified: true },
        referred: { name: "Shuvo Das", avatar: "/avatars/avatar-8.png" },
        email: "example8@gmail.com",
        date: "09-04-2025",
    },
    {
        slNo: "009",
        referrer: { name: "Nayeem Rahman", avatar: "https://randomuser.me/api/portraits/men/12.jpg", isVerified: false },
        referred: { name: "Imran Hossain", avatar: "/avatars/avatar-9.png" },
        email: "example9@gmail.com",
        date: "09-04-2025",
    },
    {
        slNo: "010",
        referrer: { name: "Saiful Alam", avatar: "https://randomuser.me/api/portraits/men/14.jpg", isVerified: true },
        referred: { name: "Mehedi Hasan", avatar: "/avatars/avatar-10.png" },
        email: "example10@gmail.com",
        date: "10-04-2025",
    },
    {
        slNo: "011",
        referrer: { name: "Saiful Alam", avatar: "https://randomuser.me/api/portraits/men/14.jpg", isVerified: false },
        referred: { name: "Jamil Khan", avatar: "/avatars/avatar-11.png" },
        email: "example11@gmail.com",
        date: "10-04-2025",
    },
    {
        slNo: "012",
        referrer: { name: "Akash Roy", avatar: "https://randomuser.me/api/portraits/men/16.jpg", isVerified: true },
        referred: { name: "Rafi Hossain", avatar: "/avatars/avatar-12.png" },
        email: "example12@gmail.com",
        date: "11-04-2025",
    },
    {
        slNo: "013",
        referrer: { name: "Akash Roy", avatar: "https://randomuser.me/api/portraits/men/16.jpg", isVerified: false },
        referred: { name: "Arif Rahman", avatar: "/avatars/avatar-13.png" },
        email: "example13@gmail.com",
        date: "11-04-2025",
    },
    {
        slNo: "014",
        referrer: { name: "Sohag Mia", avatar: "https://randomuser.me/api/portraits/men/18.jpg", isVerified: true },
        referred: { name: "Faisal Rahman", avatar: "/avatars/avatar-14.png" },
        email: "example14@gmail.com",
        date: "12-04-2025",
    },
    {
        slNo: "015",
        referrer: { name: "Sohag Mia", avatar: "https://randomuser.me/api/portraits/men/18.jpg", isVerified: false },
        referred: { name: "Arafat Islam", avatar: "/avatars/avatar-15.png" },
        email: "example15@gmail.com",
        date: "12-04-2025",
    },
    {
        slNo: "016",
        referrer: { name: "Rashid Ali", avatar: "https://randomuser.me/api/portraits/men/20.jpg", isVerified: true },
        referred: { name: "Asif Mahmud", avatar: "/avatars/avatar-16.png" },
        email: "example16@gmail.com",
        date: "13-04-2025",
    },
    {
        slNo: "017",
        referrer: { name: "Rashid Ali", avatar: "https://randomuser.me/api/portraits/men/20.jpg", isVerified: false },
        referred: { name: "Tariq Hossain", avatar: "/avatars/avatar-17.png" },
        email: "example17@gmail.com",
        date: "13-04-2025",
    },
    {
        slNo: "018",
        referrer: { name: "Farid Uddin", avatar: "https://randomuser.me/api/portraits/men/22.jpg", isVerified: true },
        referred: { name: "Nabil Chowdhury", avatar: "/avatars/avatar-18.png" },
        email: "example18@gmail.com",
        date: "14-04-2025",
    },
    {
        slNo: "019",
        referrer: { name: "Farid Uddin", avatar: "https://randomuser.me/api/portraits/men/22.jpg", isVerified: false },
        referred: { name: "Mamun Sardar", avatar: "/avatars/avatar-19.png" },
        email: "example19@gmail.com",
        date: "14-04-2025",
    },
    {
        slNo: "020",
        referrer: { name: "Shamim Reza", avatar: "https://randomuser.me/api/portraits/men/24.jpg", isVerified: true },
        referred: { name: "Hasibul Hasan", avatar: "/avatars/avatar-20.png" },
        email: "example20@gmail.com",
        date: "15-04-2025",
    },
];




export default function AllReferrals() {
    const router = useRouter();
    const [searchText, setSearchText] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const handleNavigate = () => {
        router.push("/referralManagement");
    }


    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="w-full">
                {/* Header */}
                <div className="my-6 flex items-center justify-between  ">
                    <svg
                        onClick={handleNavigate}
                        className="cursor-pointer ml-10" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 10.3017H4.96691L10.8058 16.1594L8.97107 18L0 9L8.97107 0L10.8058 1.84061L4.96691 7.69829L20 7.69829V10.3017Z" fill="black" />
                    </svg>
                    <div className="relative ">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
                        <Input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="px-10 py-6 w-80  rounded-full"
                            placeholder="Search..."
                        />
                    </div>
                    <div className="w-10" /> {/* Spacer for alignment */}
                </div>

                {/* Referrals Table */}
                <Card className="shadow-sm">
                    <CardContent className="p-4">
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow className="bg-gray-50">
                                        <TableHead className="w-[80px] text-gray-600 font-semibold">Sl. No</TableHead>
                                        <TableHead className="text-gray-600 font-semibold">Referrer</TableHead>
                                        <TableHead className="text-gray-600 font-semibold">Referred</TableHead>
                                        <TableHead className="text-gray-600 font-semibold">Email</TableHead>
                                        <TableHead className="text-gray-600 font-semibold">Date</TableHead>
                                        <TableHead className="text-right text-gray-600 font-semibold">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {referrals.map((referral, index) => (
                                        <TableRow key={index} className="border-b border-gray-100 last:border-b-0">
                                            <TableCell className="py-3">{referral.slNo}</TableCell>

                                            <TableCell className="py-4 px-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative">
                                                        <Image
                                                            src={referral?.referrer?.avatar}
                                                            alt="photo"
                                                            width={32}
                                                            height={32}
                                                            className="rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <p> {referral?.referrer?.name}</p>
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
                                                            src={referral?.referrer?.avatar}
                                                            alt="photo"
                                                            width={32}
                                                            height={32}
                                                            className="rounded-full object-cover"
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <p> {referral?.referrer?.name}</p>
                                                    </div>
                                                </div>
                                            </TableCell>


                                            <TableCell className="py-3 text-gray-700">{referral.email}</TableCell>
                                            <TableCell className="py-3">
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <CalendarDays className="w-4 h-4 text-gray-500" />
                                                    <span>{referral.date}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className="py-3 text-right">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    className="cursor-pointer border-primary text-primary  hover:text-primary"
                                                >
                                                    See details
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            </div>




            {/* modal component(REFFERAL_DETAILS) */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-2 max-h-[0vh]"}
                maxWidth={"!max-w-[50vw]"}
            >
                <ReferralDetails />
            </CustomModal>
        </div>
    )
}

