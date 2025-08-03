
import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";

interface PayoutAcceptedProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}


export default function PayoutAccepted({ open, setIsOpen }: PayoutAcceptedProps) {

    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">Payout accepted</h1>


            <div className="flex flex-col items-center justify-center  bg-white p-4">
                <div className="flex flex-col items-center text-center max-w-md w-full space-y-10">
                    <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.15 58.4L63.35 30.2L57.75 24.6L35.15 47.2L23.75 35.8L18.15 41.4L35.15 58.4ZM40.75 80C35.2167 80 30.0167 78.95 25.15 76.85C20.2833 74.75 16.05 71.9 12.45 68.3C8.85 64.7 6 60.4667 3.9 55.6C1.8 50.7333 0.75 45.5333 0.75 40C0.75 34.4667 1.8 29.2667 3.9 24.4C6 19.5333 8.85 15.3 12.45 11.7C16.05 8.1 20.2833 5.25 25.15 3.15C30.0167 1.05 35.2167 0 40.75 0C46.2833 0 51.4833 1.05 56.35 3.15C61.2167 5.25 65.45 8.1 69.05 11.7C72.65 15.3 75.5 19.5333 77.6 24.4C79.7 29.2667 80.75 34.4667 80.75 40C80.75 45.5333 79.7 50.7333 77.6 55.6C75.5 60.4667 72.65 64.7 69.05 68.3C65.45 71.9 61.2167 74.75 56.35 76.85C51.4833 78.95 46.2833 80 40.75 80Z" fill="#319F43" />
                    </svg>


                    <h2 className="text-3xl font-semibold text-gray-900">Payout accepted</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      
                       The provider will get the money that he <br /> requested for payout.
                    </p>
                    <Button
                        onClick={() => setIsOpen(!open)}
                        className="w-full bg-[#EF4444] hover:bg-[#EF4444] hover:opacity-90  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
                        Undo
                    </Button>
                </div>
            </div>
        </div>
    )
}




