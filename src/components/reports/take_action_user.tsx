

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


export default function TakeActionUser() {
    return (
        <div className="">
            <h1 className="text-center text-[24px] pb-4">Take action to the user</h1>
            <div className="w-full rounded-xl overflow-hidden">

                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="action" className="text-base font-medium">
                            Action
                        </Label>
                        <Select>
                            <SelectTrigger
                                id="action"
                                className="w-full rounded-lg border-gray-300 focus:ring-gray-300 focus:border-gray-300"
                            >
                                <SelectValue placeholder="-select-" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Give a warning">Give a warning</SelectItem>
                                <SelectItem value="Suspend for 3 days">Suspend for 3 days</SelectItem>
                                <SelectItem value="Suspend for 7 days">Suspend for 7 days</SelectItem>
                                <SelectItem value="Suspend for 15 days">Suspend for 15 days</SelectItem>
                                <SelectItem value="Suspend for 30 days">Suspend for 30 days</SelectItem>
                                <SelectItem value="Suspend permanently">Suspend permanently</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="reason" className="text-base font-medium">
                            Reason
                        </Label>
                        <Textarea
                            id="reason"
                            placeholder="Type here..."
                            className="min-h-[200px] max-h-[300px] resize-none rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500 overflow-y-auto"
                        />
                    </div>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white py-6 rounded-lg text-base font-semibold flex items-center justify-center gap-2">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.4283 0.517446C11.065 -0.172482 9.93522 -0.172482 9.57192 0.517446L0.122083 18.4514C0.0373375 18.6121 -0.00458157 18.7922 0.000396998 18.9741C0.00537557 19.1559 0.0570826 19.3334 0.150496 19.4893C0.243909 19.6451 0.375854 19.7741 0.533513 19.8636C0.691172 19.953 0.869187 20 1.05027 20H19.9499C20.131 20.0004 20.3091 19.9536 20.4668 19.8642C20.6245 19.7749 20.7565 19.646 20.8499 19.4901C20.9433 19.3342 20.9949 19.1567 20.9996 18.9749C21.0044 18.793 20.9622 18.613 20.8771 18.4524L11.4283 0.517446ZM11.5501 16.8352H9.45012V14.7253H11.5501V16.8352ZM9.45012 12.6154V7.34077H11.5501L11.5511 12.6154H9.45012Z" fill="white" />
                        </svg>
                        Take action
                    </Button>
                </div>
            </div>
        </div>
    )
}
