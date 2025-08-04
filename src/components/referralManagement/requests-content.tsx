

"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays, Clock, Eye, Check, Trash2, BadgeCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react" // Import useState

type TransactionStatus = "Pending" | "Successful" | "Rejected"

interface Transaction {
    id: string
    slNo: string
    providerName: string
    providerAvatar: string
    isVerified: boolean
    date: string
    time: string
    amount: string
    status: TransactionStatus
}

const transactions: Transaction[] = [
    {
        id: "1",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "2",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "3",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "4",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Pending",
    },
    {
        id: "5",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Successful",
    },
    {
        id: "6",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Rejected",
    },
    {
        id: "7",
        slNo: "001",
        providerName: "Md. Abid Hasan",
        providerAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
        isVerified: true,
        date: "05-04-2025",
        time: "05:20 PM",
        amount: "₦3,000.00",
        status: "Successful",
    },
]

const StatusBadge = ({ status }: { status: TransactionStatus }) => {
    const statusClasses = {
        Pending: "bg-blue-500/10 text-blue-600",
        Successful: "bg-green-500/10 text-green-600",
        Rejected: "bg-red-500/10 text-red-600",
    }

    const dotClasses = {
        Pending: "bg-blue-500",
        Successful: "bg-green-500",
        Rejected: "bg-red-500",
    }

    return (
        <div
            className={cn("inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium", statusClasses[status])}
        >
            <span className={cn("h-2 w-2 rounded-full", dotClasses[status])} />
            {status}
        </div>
    )
}

export default function RequestsContent() {
    const [selectedTransactions, setSelectedTransactions] = useState<Set<string>>(new Set())

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            const allIds = new Set(transactions.map((t) => t.id))
            setSelectedTransactions(allIds)
        } else {
            setSelectedTransactions(new Set())
        }
    }

    const handleSelectTransaction = (id: string, checked: boolean) => {
        setSelectedTransactions((prev) => {
            const newSelection = new Set(prev)
            if (checked) {
                newSelection.add(id)
            } else {
                newSelection.delete(id)
            }
            return newSelection
        })
    }

    const isAllSelected = selectedTransactions.size === transactions.length && transactions.length > 0
    const isIndeterminate = selectedTransactions.size > 0 && selectedTransactions.size < transactions.length

    return (
        <div className=" bg-gray-50">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="grid grid-cols-7 gap-4 p-4 border-b text-sm font-medium text-gray-500">
                    <div className="flex items-center gap-2">
                        <Checkbox
                            id="select-all"
                            aria-label="Select all transactions"
                            checked={isAllSelected}
                            onCheckedChange={handleSelectAll}
                            // @ts-ignore - Indeterminate state is not directly supported by `checked` prop type but works visually
                            indeterminate={isIndeterminate}
                        />
                        <span>Sl. No</span>
                    </div>
                    <div>Provider name</div>
                    <div>Date</div>
                    <div>Time</div>
                    <div>Amount</div>
                    <div>Status</div>
                    <div className="flex justify-center ">Action</div>
                </div>
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="grid grid-cols-7 gap-4 p-4 border-b last:border-b-0 items-center text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Checkbox
                                id={`select-${transaction.id}`}
                                aria-label={`Select transaction ${transaction.slNo}`}
                                checked={selectedTransactions.has(transaction.id)}
                                onCheckedChange={(checked) => handleSelectTransaction(transaction.id, checked as boolean)}
                            />
                            <span>{transaction.slNo}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={transaction.providerAvatar} alt={transaction.providerName} />
                                <AvatarFallback>{transaction.providerName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-1">
                                <span>{transaction.providerName}</span>
                                {transaction.isVerified && <span>
                                    <svg className="ml-5" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.6 21.5L5.7 18.3L2.1 17.5L2.45 13.8L0 11L2.45 8.2L2.1 4.5L5.7 3.7L7.6 0.5L11 1.95L14.4 0.5L16.3 3.7L19.9 4.5L19.55 8.2L22 11L19.55 13.8L19.9 17.5L16.3 18.3L14.4 21.5L11 20.05L7.6 21.5ZM9.95 14.55L15.6 8.9L14.2 7.45L9.95 11.7L7.8 9.6L6.4 11L9.95 14.55Z" fill="#4285F4" />
                                    </svg>

                                </span>
                                }
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <CalendarDays className="h-4 w-4" />
                            <span>{transaction.date}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{transaction.time}</span>
                        </div>
                        <div className="font-semibold">{transaction.amount}</div>
                        <div>
                            <StatusBadge status={transaction.status} />
                        </div>


                        <div className="flex justify-end gap-2">
                            <button
                                // onClick={() => setIsOpenUserKyc(!issOpenUserKyc)}
                                className="cursor-pointer">
                                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
                                    <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
                                </svg>
                            </button>
                            <button
                                // onClick={() => setIsOpen(!issOpen)}
                                className="cursor-pointer">
                                <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="0.5" width="37" height="37" rx="5" fill="#D8FFD8" />
                                    <path d="M15.1933 27L7.5 19.4158L9.42331 17.5198L15.1933 23.2079L27.5767 11L29.5 12.8961L15.1933 27Z" fill="#00B400" />
                                </svg>

                            </button>
                            <button
                                // onClick={() => setIsOpenRej(!isOpenRej)}
                                className="cursor-pointer">
                                <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="34" height="38" rx="6" fill="#FFE8E8" />
                                    <path d="M24 11H20.5L19.5 10H14.5L13.5 11H10V13H24M11 26C11 26.5304 11.2107 27.0391 11.5858 27.4142C11.9609 27.7893 12.4696 28 13 28H21C21.5304 28 22.0391 27.7893 22.4142 27.4142C22.7893 27.0391 23 26.5304 23 26V14H11V26Z" fill="#FF5353" />
                                </svg>
                            </button>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}
