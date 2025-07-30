

import { Button } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react";

interface BoostingDeclinedProps {
    open: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}


export default function BoostingDeclined({open,setIsOpen}:BoostingDeclinedProps) {
 
    return (
        <div>
            <h1 className="text-center text-[24px] pb-4">Boosting declined</h1>


            <div className="flex flex-col items-center justify-center  bg-white p-4">
                <div className="flex flex-col items-center text-center max-w-md w-full space-y-10">
                    <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9615 68.7715C9.14112 65.0817 6.09383 60.6679 3.99747 55.7877C1.90111 50.9075 0.797663 45.6587 0.75151 40.3476C0.705358 35.0364 1.71743 29.7692 3.72866 24.8534C5.7399 19.9375 8.71002 15.4714 12.4657 11.7157C16.2214 7.96002 20.6875 4.9899 25.6034 2.97866C30.5192 0.967426 35.7864 -0.0446424 41.0976 0.00151027C46.4087 0.0476629 51.6575 1.15111 56.5377 3.24747C61.4179 5.34383 65.8317 8.39112 69.5215 12.2115C76.8079 19.7556 80.8396 29.8597 80.7485 40.3476C80.6574 50.8354 76.4506 60.8679 69.0343 68.2843C61.6179 75.7006 51.5854 79.9074 41.0976 79.9985C30.6097 80.0896 20.5056 76.0579 12.9615 68.7715ZM46.8415 40.4915L58.1615 29.1715L52.5215 23.5315L41.2415 34.8515L29.9215 23.5315L24.2815 29.1715L35.6015 40.4915L24.2815 51.8115L29.9215 57.4515L41.2415 46.1315L52.5615 57.4515L58.2015 51.8115L46.8815 40.4915H46.8415Z" fill="#EF4444" />
                    </svg>

                    <h2 className="text-3xl font-semibold text-gray-900">Request declined</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                       This provider’s request is declined and his services are on it’s normal position.
                    </p>
                    <Button
                    onClick={()=>setIsOpen(!open)}
                        className="w-full bg-[#00B400] hover:bg-[#00B400] hover:opacity-90  flex justify-center items-center rounded-full text-center py-6 text-[16px] cursor-pointer">
                        Undo
                    </Button>
                </div>
            </div>
        </div>
    )
}





