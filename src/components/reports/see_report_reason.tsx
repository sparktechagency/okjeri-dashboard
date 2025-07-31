

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import CustomModal from "../modal/customModal"
import SeeReportReasonDetails from "./see_report_reason_details"


interface Reason {
    id: string
    title: string
    category: string
}

const reasons: Reason[] = [
    { id: "1", title: "Reason 1", category: "Scam" },
    { id: "2", title: "Reason 2", category: "Spreading misinformation " },
    { id: "3", title: "Reason 3", category: "Sexual content" },
]

export default function SeeReportReason() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="">
            <h1 className="text-center text-[24px] pb-4">Reasons</h1>
            <div className="space-y-4 p-6">
                {reasons.map((reason) => (
                    <div key={reason.id} className="w-full flex items-center gap-3">
                        <div
                            className="w-full flex items-center justify-between rounded-full border border-gray-200 p-3 pr-2"
                        >
                            <span className="ml-2 text-base font-medium text-gray-800">{reason.title}</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-red-500">
                                    {reason.category.length > 25 ? `${reason.category.slice(0, 25)}...` : reason.category}
                                </span>
                            </div>
                        </div>

                        <div className="">
                            <Button
                                onClick={() => setIsOpen(!isOpen)}
                                variant="outline" size="icon" className="h-11 w-11 rounded-full cursor-pointer text-gray-700 border hover:bg-primary hover:text-[#ffff] hover:border-none  bg-transparent">
                                <ArrowUpRight className="h-5 w-5  hover:text-[#fff]" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>


            {/* modal component */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-2 max-h-[0vh]"}
                maxWidth={"!max-w-[45vw]"}
            >
                <SeeReportReasonDetails
                />
            </CustomModal>
        </div>
    )
}
