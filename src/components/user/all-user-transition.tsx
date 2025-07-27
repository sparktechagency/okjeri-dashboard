"use client"


import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Wallet, ArrowUpRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";

const AllUserTransition = () => {
    const [isOpen, setIsOpen] = useState(false)


    interface Transaction {
        id: string
        providerName: string
        providerAvatar: string
        from: string
        to: string
        amount: number
        currency: string
        isVerified: boolean
    }

    const Alltransaction: Transaction[] = [
        {
            id: "1",
            providerName: "John Doe",
            providerAvatar: "/placeholder-user.jpg",
            from: "**** **** 8569",
            to: "0x7474hfddos.....f44e",
            amount: 500.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "2",
            providerName: "Jane Smith",
            providerAvatar: "/placeholder-user2.jpg",
            from: "**** **** 1234",
            to: "0xa9f4hfddos.....e12b",
            amount: 1200.5,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "3",
            providerName: "Alice Johnson",
            providerAvatar: "/placeholder-user3.jpg",
            from: "0x92e3hfddos.....c45f",
            to: "0x7474hfddos.....f44e",
            amount: 750.75,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "4",
            providerName: "Bob Brown",
            providerAvatar: "/placeholder-user4.jpg",
            from: "0x55a9hfddos.....b88c",
            to: "0x12d4hfddos.....a89f",
            amount: 300.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "5",
            providerName: "Cathy Lee",
            providerAvatar: "/placeholder-user5.jpg",
            from: "**** **** 9876",
            to: "0x8f32hfddos.....d234",
            amount: 999.99,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "6",
            providerName: "David Wilson",
            providerAvatar: "/placeholder-user6.jpg",
            from: "0xaaa4hfddos.....c123",
            to: "0x7474hfddos.....f44e",
            amount: 1500.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "7",
            providerName: "Eva Green",
            providerAvatar: "/placeholder-user7.jpg",
            from: "**** **** 4578",
            to: "0xb7c1hfddos.....f9e1",
            amount: 200.0,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "8",
            providerName: "Frank White",
            providerAvatar: "/placeholder-user8.jpg",
            from: "0xc9d4hfddos.....e6f0",
            to: "0x21a4hfddos.....b76a",
            amount: 875.25,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "9",
            providerName: "Grace Kim",
            providerAvatar: "/placeholder-user9.jpg",
            from: "**** **** 5432",
            to: "0xf7d2hfddos.....a321",
            amount: 450.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "10",
            providerName: "Henry Scott",
            providerAvatar: "/placeholder-user10.jpg",
            from: "0x1349hfddos.....c890",
            to: "0x7474hfddos.....f44e",
            amount: 1125.75,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "11",
            providerName: "Isabel Clark",
            providerAvatar: "/placeholder-user11.jpg",
            from: "**** **** 3210",
            to: "0x6ab3hfddos.....d564",
            amount: 600.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "12",
            providerName: "Jack Turner",
            providerAvatar: "/placeholder-user12.jpg",
            from: "0x77d5hfddos.....f122",
            to: "0x7f34hfddos.....b98c",
            amount: 250.0,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "13",
            providerName: "Kathy Adams",
            providerAvatar: "/placeholder-user13.jpg",
            from: "**** **** 6543",
            to: "0x2e78hfddos.....d786",
            amount: 950.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "14",
            providerName: "Larry King",
            providerAvatar: "/placeholder-user14.jpg",
            from: "0x8fa1hfddos.....c932",
            to: "0x7474hfddos.....f44e",
            amount: 1700.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "15",
            providerName: "Mona Bell",
            providerAvatar: "/placeholder-user15.jpg",
            from: "**** **** 1122",
            to: "0x4534hfddos.....f12a",
            amount: 475.5,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "16",
            providerName: "Nate Brooks",
            providerAvatar: "/placeholder-user16.jpg",
            from: "0x9b43hfddos.....d211",
            to: "0x1123hfddos.....b765",
            amount: 1325.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "17",
            providerName: "Olivia Young",
            providerAvatar: "/placeholder-user17.jpg",
            from: "**** **** 7766",
            to: "0x5c89hfddos.....f987",
            amount: 300.0,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "18",
            providerName: "Peter Harris",
            providerAvatar: "/placeholder-user18.jpg",
            from: "0xf14ahfddos.....c221",
            to: "0x7474hfddos.....f44e",
            amount: 600.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "19",
            providerName: "Quincy Allen",
            providerAvatar: "/placeholder-user19.jpg",
            from: "**** **** 3344",
            to: "0xa437hfddos.....d89c",
            amount: 425.25,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "20",
            providerName: "Rachel Martin",
            providerAvatar: "/placeholder-user20.jpg",
            from: "0x5c21hfddos.....f234",
            to: "0x7474hfddos.....f44e",
            amount: 980.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "21",
            providerName: "Steve Walker",
            providerAvatar: "/placeholder-user21.jpg",
            from: "**** **** 8899",
            to: "0x8a32hfddos.....c478",
            amount: 1100.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "22",
            providerName: "Tina Reed",
            providerAvatar: "/placeholder-user22.jpg",
            from: "0xf87ahfddos.....b111",
            to: "0x1234hfddos.....e789",
            amount: 525.5,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "23",
            providerName: "Uma Patel",
            providerAvatar: "/placeholder-user23.jpg",
            from: "**** **** 4433",
            to: "0x7474hfddos.....f44e",
            amount: 690.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "24",
            providerName: "Victor Diaz",
            providerAvatar: "/placeholder-user24.jpg",
            from: "0x22a9hfddos.....d556",
            to: "0x3345hfddos.....b987",
            amount: 1230.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "25",
            providerName: "Wendy Moore",
            providerAvatar: "/placeholder-user25.jpg",
            from: "**** **** 1123",
            to: "0x7474hfddos.....f44e",
            amount: 870.0,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "26",
            providerName: "Xander Fox",
            providerAvatar: "/placeholder-user26.jpg",
            from: "0x33b4hfddos.....f321",
            to: "0x7456hfddos.....d789",
            amount: 300.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "27",
            providerName: "Yara Nelson",
            providerAvatar: "/placeholder-user27.jpg",
            from: "**** **** 5567",
            to: "0x8745hfddos.....b123",
            amount: 450.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "28",
            providerName: "Zack King",
            providerAvatar: "/placeholder-user28.jpg",
            from: "0x47d8hfddos.....c456",
            to: "0x1122hfddos.....e334",
            amount: 510.5,
            currency: "₦",
            isVerified: false,
        },
        {
            id: "29",
            providerName: "Amy Clarke",
            providerAvatar: "/placeholder-user29.jpg",
            from: "**** **** 9988",
            to: "0x7474hfddos.....f44e",
            amount: 975.75,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "30",
            providerName: "Brian Cox",
            providerAvatar: "/placeholder-user30.jpg",
            from: "0x9987hfddos.....b123",
            to: "0x5666hfddos.....d456",
            amount: 1400.0,
            currency: "₦",
            isVerified: false,
        },
    ];



    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">All transactions</h1>
            <div className=" m-4">
               
                <Card className="rounded-2xl border">
                    <CardHeader className="px-6 pt-6 pb-4">
                        <div className="grid grid-cols-[minmax(150px,1.5fr)_minmax(150px,2fr)_minmax(150px,2fr)_minmax(80px,1fr)] gap-4 text-sm font-medium text-gray-500">
                            <div>Provider</div>
                            <div>From</div>
                            <div>To</div>
                            <div className="text-right">Amount</div>
                        </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 pt-0">
                        <div className="space-y-4">
                            {Alltransaction.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="grid grid-cols-[minmax(150px,1.5fr)_minmax(150px,2fr)_minmax(150px,2fr)_minmax(80px,1fr)] gap-8 items-center text-sm"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <Avatar className="w-8 h-8">
                                            <AvatarImage
                                                src={"/photo2.jpg"}
                                                alt={transaction.providerName}
                                            />
                                            <AvatarFallback>{transaction.providerName.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <span className="font-medium text-gray-900">{transaction.providerName}</span>
                                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z" fill="#4285F4" />
                                        </svg>

                                    </div>
                                    <div className="text-gray-700">{transaction.from}</div>
                                    <div className="text-gray-700">{transaction.to}</div>
                                    <div className="text-right font-medium text-gray-900">
                                        {transaction.currency}
                                        {transaction.amount.toFixed(2)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>


            <Button className="w-full rounded-full text-center py-6 text-[16px] cursor-pointer">Make report</Button>
        </div>
    )
}

export default AllUserTransition
