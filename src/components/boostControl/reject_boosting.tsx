
"use client"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import CustomModal from "../modal/customModal"
import BoostingDeclined from "./Boosting_declined"


export default function RejectBoosting() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">Rejecting boosting request</h1>

            <div className=" flex flex-col items-center justify-center  bg-white p-4">
                <div className="w-full  space-y-4">
                    <Label htmlFor="reason" className="text-lg font-medium text-gray-900">
                        Reason
                    </Label>
                    <Textarea
                        id="reason"
                        placeholder="Type here..."
                        className="min-h-[200px] mb-6 resize-none rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full bg-primary hover:bg-primary hover:opacity-90  flex justify-center items-center rounded-full text-center py-6  text-[16px] cursor-pointer">
                        Submit
                    </Button>
                </div>
            </div>



            {/* modal component(USER_NATIONAL_ID_CURD) */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-2 max-h-[0vh]"}
                maxWidth={"!max-w-[35vw]"}
            >
                <BoostingDeclined
                    open={isOpen}
                    setIsOpen={setIsOpen}
                />
            </CustomModal>
        </div>
    )
}



