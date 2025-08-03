


import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";

interface PayoutRejUndoProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}


export default function PayoutRejUndo({ open, setIsOpen }: PayoutRejUndoProps) {

    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">Payout rejected</h1>


            <div className="flex flex-col items-center justify-center  bg-white p-4">
                <div className="flex flex-col items-center text-center max-w-md w-full space-y-10">
                    <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7115 68.7715C8.89112 65.0817 5.84383 60.6679 3.74747 55.7877C1.65111 50.9075 0.547663 45.6587 0.50151 40.3476C0.455358 35.0364 1.46743 29.7692 3.47866 24.8534C5.4899 19.9375 8.46002 15.4714 12.2157 11.7157C15.9714 7.96002 20.4375 4.9899 25.3534 2.97866C30.2692 0.967426 35.5364 -0.0446424 40.8476 0.00151027C46.1587 0.0476629 51.4075 1.15111 56.2877 3.24747C61.1679 5.34383 65.5817 8.39112 69.2715 12.2115C76.5579 19.7556 80.5896 29.8597 80.4985 40.3476C80.4074 50.8354 76.2006 60.8679 68.7843 68.2843C61.3679 75.7006 51.3354 79.9074 40.8476 79.9985C30.3597 80.0896 20.2556 76.0579 12.7115 68.7715ZM46.5915 40.4915L57.9115 29.1715L52.2715 23.5315L40.9915 34.8515L29.6715 23.5315L24.0315 29.1715L35.3515 40.4915L24.0315 51.8115L29.6715 57.4515L40.9915 46.1315L52.3115 57.4515L57.9515 51.8115L46.6315 40.4915H46.5915Z" fill="#EF4444" />
                    </svg>



                    <h2 className="text-3xl font-semibold text-gray-900">Payout rejected</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">

                       The provider won’t accept the amount of money that he requested for payout.
                    </p>
                    <Button
                        onClick={() => setIsOpen(!open)}
                        className="w-full bg-[#00B400] hover:bg-[#00B400] hover:opacity-90  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
                        Undo
                    </Button>
                </div>
            </div>
        </div>
    )
}




