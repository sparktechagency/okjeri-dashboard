"use client"


import { Search, CheckCircle, CalendarDays, ArrowUpRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { useRouter } from "next/navigation"

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
        email: "example@gmail.com",
        date: "05-04-2025",
    },
    {
        slNo: "001",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-4.png" },
        email: "example@gmail.com",
        date: "05-04-2025",
    },
    {
        slNo: "001",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-1.png" },
        email: "example@gmail.com",
        date: "05-04-2025",
    },
    {
        slNo: "001",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-3.png" },
        email: "example@gmail.com",
        date: "05-04-2025",
    },
    {
        slNo: "001",
        referrer: { name: "Md. Abid Hasan", avatar: "https://randomuser.me/api/portraits/men/4.jpg", isVerified: true },
        referred: { name: "Md. Abid Hasan", avatar: "/avatars/avatar-5.png" },
        email: "example@gmail.com",
        date: "05-04-2025",
    },
];


export default function OverviewContent() {
    const router = useRouter();

    const handleNavigate = () => {
        router.push("/allReferrals");
    }



    return (
        <>
            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <CardContent className="p-0 flex flex-col items-center">
                        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="80" height="80" rx="40" fill="#FFF5EF" />
                            <path d="M41.25 39.925C41.975 39.125 42.5315 38.2125 42.9195 37.1875C43.3075 36.1625 43.501 35.1 43.5 34C43.499 32.9 43.3055 31.8375 42.9195 30.8125C42.5335 29.7875 41.977 28.875 41.25 28.075C42.75 28.275 44 28.9375 45 30.0625C46 31.1875 46.5 32.5 46.5 34C46.5 35.5 46 36.8125 45 37.9375C44 39.0625 42.75 39.725 41.25 39.925ZM49.5 52V47.5C49.5 46.6 49.3 45.7435 48.9 44.9305C48.5 44.1175 47.975 43.399 47.325 42.775C48.6 43.225 49.7815 43.8065 50.8695 44.5195C51.9575 45.2325 52.501 46.226 52.5 47.5V52H49.5ZM52.5 41.5V38.5H49.5V35.5H52.5V32.5H55.5V35.5H58.5V38.5H55.5V41.5H52.5ZM34.5 40C32.85 40 31.4375 39.4125 30.2625 38.2375C29.0875 37.0625 28.5 35.65 28.5 34C28.5 32.35 29.0875 30.9375 30.2625 29.7625C31.4375 28.5875 32.85 28 34.5 28C36.15 28 37.5625 28.5875 38.7375 29.7625C39.9125 30.9375 40.5 32.35 40.5 34C40.5 35.65 39.9125 37.0625 38.7375 38.2375C37.5625 39.4125 36.15 40 34.5 40ZM22.5 52V47.8C22.5 46.95 22.719 46.169 23.157 45.457C23.595 44.745 24.176 44.201 24.9 43.825C26.45 43.05 28.025 42.469 29.625 42.082C31.225 41.695 32.85 41.501 34.5 41.5C36.15 41.499 37.775 41.693 39.375 42.082C40.975 42.471 42.55 43.052 44.1 43.825C44.825 44.2 45.4065 44.744 45.8445 45.457C46.2825 46.17 46.501 46.951 46.5 47.8V52H22.5Z" fill="#FF6600" />
                        </svg>

                        <p className="text-gray-600 text-sm mb-2">Total number of referral signups</p>
                        <h2 className="text-4xl font-bold text-gray-900">550</h2>
                    </CardContent>
                </Card>

                <Card className="p-6 flex flex-col items-center justify-center text-center shadow-sm">
                    <CardContent className="p-0 flex flex-col items-center">
                        <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="80" height="80" rx="40" fill="#FFF5EF" />
                            <path d="M41.25 39.925C41.975 39.125 42.5315 38.2125 42.9195 37.1875C43.3075 36.1625 43.501 35.1 43.5 34C43.499 32.9 43.3055 31.8375 42.9195 30.8125C42.5335 29.7875 41.977 28.875 41.25 28.075C42.75 28.275 44 28.9375 45 30.0625C46 31.1875 46.5 32.5 46.5 34C46.5 35.5 46 36.8125 45 37.9375C44 39.0625 42.75 39.725 41.25 39.925ZM49.5 52V47.5C49.5 46.6 49.3 45.7435 48.9 44.9305C48.5 44.1175 47.975 43.399 47.325 42.775C48.6 43.225 49.7815 43.8065 50.8695 44.5195C51.9575 45.2325 52.501 46.226 52.5 47.5V52H49.5ZM52.5 41.5V38.5H49.5V35.5H52.5V32.5H55.5V35.5H58.5V38.5H55.5V41.5H52.5ZM34.5 40C32.85 40 31.4375 39.4125 30.2625 38.2375C29.0875 37.0625 28.5 35.65 28.5 34C28.5 32.35 29.0875 30.9375 30.2625 29.7625C31.4375 28.5875 32.85 28 34.5 28C36.15 28 37.5625 28.5875 38.7375 29.7625C39.9125 30.9375 40.5 32.35 40.5 34C40.5 35.65 39.9125 37.0625 38.7375 38.2375C37.5625 39.4125 36.15 40 34.5 40ZM22.5 52V47.8C22.5 46.95 22.719 46.169 23.157 45.457C23.595 44.745 24.176 44.201 24.9 43.825C26.45 43.05 28.025 42.469 29.625 42.082C31.225 41.695 32.85 41.501 34.5 41.5C36.15 41.499 37.775 41.693 39.375 42.082C40.975 42.471 42.55 43.052 44.1 43.825C44.825 44.2 45.4065 44.744 45.8445 45.457C46.2825 46.17 46.501 46.951 46.5 47.8V52H22.5Z" fill="#FF6600" />
                        </svg>

                        <p className="text-gray-600 text-sm mb-2">Total amount withdrawn from referral earnings</p>
                        <h2 className="text-4xl font-bold text-gray-900">₦ 3,000.00</h2>
                    </CardContent>
                </Card>
            </div>

            {/* Search and See All Referrals */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
                <div className="relative w-full md:max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-[20px] rounded-full border border-gray-300 focus:ring-orange-500 focus:border-orange-500 w-full"
                    />
                </div>
                <Button
                    variant="outline"
                    onClick={handleNavigate}
                    className="cursor-pointer border-primary text-primary  hover:text-primary flex items-center gap-2 bg-transparent"
                >
                    See all referrals
                    <ArrowUpRight className="w-4 h-4" />
                </Button>
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
        </>
    )
}

