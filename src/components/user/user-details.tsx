
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Wallet, ArrowUpRight, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import CustomModal from "../modal/customModal";
import AllUserTransition from "./all-user-transition";
import UserNationalIdCard from "./user-national-id-card";



const UserDetailsPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenTwo, setIsOpenTwo] = useState(false)

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

    const transactions: Transaction[] = [
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
            providerName: "John Doe",
            providerAvatar: "/placeholder-user.jpg",
            from: "**** **** 8569",
            to: "0x7474hfddos.....f44e",
            amount: 500.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "3",
            providerName: "John Doe",
            providerAvatar: "/placeholder-user.jpg",
            from: "0x7474hfddos.....f44e",
            to: "0x7474hfddos.....f44e",
            amount: 500.0,
            currency: "₦",
            isVerified: true,
        },
        {
            id: "4",
            providerName: "John Doe",
            providerAvatar: "/placeholder-user.jpg",
            from: "0x7474hfddos.....f44e",
            to: "0x7474hfddos.....f44e",
            amount: 500.0,
            currency: "₦",
            isVerified: true,
        },
    ]

    return (
        <div className="">
            <h1 className="text-center text-[24px] pb-4">User details</h1>

            <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4 border-2 border-gray-200">
                    <AvatarImage src="/photo4.jpg" alt="Md. Abid Hasan" />
                    <AvatarFallback>MA</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Md. Abid Hasan</h2>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.6 21L5.7 17.8L2.1 17L2.45 13.3L0 10.5L2.45 7.7L2.1 4L5.7 3.2L7.6 0L11 1.45L14.4 0L16.3 3.2L19.9 4L19.55 7.7L22 10.5L19.55 13.3L19.9 17L16.3 17.8L14.4 21L11 19.55L7.6 21ZM9.95 14.05L15.6 8.4L14.2 6.95L9.95 11.2L7.8 9.1L6.4 10.5L9.95 14.05Z" fill="#4285F4" />
                    </svg>

                </div>
            </div>



            {/* user info */}
            <div className="flex flex-col md:flex-row justify-center  gap-4 p-4">

                {/* User Details Card */}
                <div className="w-[50%]">
                    <div className="flex items-center gap-2 mb-4">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 0C12.4587 0 13.8576 0.579462 14.8891 1.61091C15.9205 2.64236 16.5 4.04131 16.5 5.5C16.5 6.95869 15.9205 8.35764 14.8891 9.38909C13.8576 10.4205 12.4587 11 11 11C9.54131 11 8.14236 10.4205 7.11091 9.38909C6.07946 8.35764 5.5 6.95869 5.5 5.5C5.5 4.04131 6.07946 2.64236 7.11091 1.61091C8.14236 0.579462 9.54131 0 11 0ZM11 13.75C17.0775 13.75 22 16.2113 22 19.25V22H0V19.25C0 16.2113 4.9225 13.75 11 13.75Z" fill="#FF6600" />
                        </svg>

                        <h2 className="font-semibold text-lg">User details</h2>
                    </div>
                    <div className="border rounded-xl p-4 flex-1 ">
                        <div className="space-y-8 text-sm">
                            <div className="flex items-center gap-2">
                                <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.5 0H2.5C1.125 0 0.0125 1.125 0.0125 2.5L0 17.5C0 18.875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V2.5C25 1.125 23.875 0 22.5 0ZM22.5 5L12.5 11.25L2.5 5V2.5L12.5 8.75L22.5 2.5V5Z" fill="#888888" />
                                </svg>

                                <span className="text-[16px]">example@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.02222 8.65556C5.62222 11.8 8.2 14.3667 11.3444 15.9778L13.7889 13.5333C14.0889 13.2333 14.5333 13.1333 14.9222 13.2667C16.1667 13.6778 17.5111 13.9 18.8889 13.9C19.5 13.9 20 14.4 20 15.0111V18.8889C20 19.5 19.5 20 18.8889 20C8.45556 20 0 11.5444 0 1.11111C0 0.5 0.5 0 1.11111 0H5C5.61111 0 6.11111 0.5 6.11111 1.11111C6.11111 2.5 6.33333 3.83333 6.74444 5.07778C6.86667 5.46667 6.77778 5.9 6.46667 6.21111L4.02222 8.65556Z" fill="#888888" />
                                </svg>

                                <span className="text-[16px]">+5698521456</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.262 19.7281C7.262 19.7281 0 13.7354 0 7.83872C0 5.75976 0.842855 3.76595 2.34315 2.29591C3.84344 0.825863 5.87827 0 8 0C10.1217 0 12.1566 0.825863 13.6569 2.29591C15.1571 3.76595 16 5.75976 16 7.83872C16 13.7354 8.738 19.7281 8.738 19.7281C8.334 20.0926 7.669 20.0887 7.262 19.7281ZM8 11.2682C8.45963 11.2682 8.91475 11.1795 9.33939 11.0071C9.76403 10.8348 10.1499 10.5821 10.4749 10.2637C10.7999 9.94524 11.0577 9.56719 11.2336 9.15111C11.4095 8.73503 11.5 8.28908 11.5 7.83872C11.5 7.38836 11.4095 6.94241 11.2336 6.52633C11.0577 6.11025 10.7999 5.73219 10.4749 5.41374C10.1499 5.09529 9.76403 4.84267 9.33939 4.67033C8.91475 4.49798 8.45963 4.40928 8 4.40928C7.07174 4.40928 6.1815 4.77059 5.52513 5.41374C4.86875 6.05688 4.5 6.92917 4.5 7.83872C4.5 8.74826 4.86875 9.62055 5.52513 10.2637C6.1815 10.9068 7.07174 11.2682 8 11.2682Z" fill="#888888" />
                                </svg>

                                <span className="text-[16px]">47 W 13th St, New York, NY 10011, USA</span>
                            </div>
                        </div>
                    </div>
                </div>



                {/* KYC Details Card */}
                <div className="w-[50%]">
                    <div className="flex items-center gap-2 mb-4">
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.7514V6.45086C0 3.41036 -6.55651e-08 1.88903 0.9669 0.945051C1.9327 -6.40836e-08 3.4892 0 6.6 0H15.4C18.5108 0 20.0673 -6.40836e-08 21.0331 0.945051C22 1.88903 22 3.41036 22 6.45086V10.7514C22 13.7919 22 15.3133 21.0331 16.2573C20.3225 16.9529 19.2929 17.1367 17.5593 17.1851C17.556 16.3704 17.257 15.5833 16.7156 14.9639C16.6831 14.928 16.6637 14.8826 16.6606 14.8348C16.594 14.017 16.2314 13.2491 15.638 12.6688C15.0445 12.0886 14.259 11.7339 13.4222 11.6685C13.3733 11.6655 13.3268 11.6466 13.2902 11.6148C12.6513 11.0827 11.8394 10.7904 11 10.7904C10.1606 10.7904 9.34868 11.0827 8.7098 11.6148C8.67315 11.6466 8.6267 11.6655 8.5778 11.6685C7.74085 11.7337 6.95504 12.0882 6.36136 12.6685C5.76767 13.2487 5.40496 14.0168 5.3383 14.8348C5.33518 14.8826 5.31582 14.928 5.2833 14.9639C4.74226 15.5834 4.44368 16.3705 4.4407 17.1851C2.7071 17.1367 1.6775 16.9529 0.9669 16.2573C-6.55651e-08 15.3133 0 13.7919 0 10.7514ZM6.875 4.30058C6.875 4.08672 6.96192 3.88162 7.11664 3.73039C7.27136 3.57917 7.4812 3.49422 7.7 3.49422H14.3C14.5188 3.49422 14.7286 3.57917 14.8834 3.73039C15.0381 3.88162 15.125 4.08672 15.125 4.30058C15.125 4.51444 15.0381 4.71954 14.8834 4.87076C14.7286 5.02198 14.5188 5.10693 14.3 5.10693H7.7C7.4812 5.10693 7.27136 5.02198 7.11664 4.87076C6.96192 4.71954 6.875 4.51444 6.875 4.30058ZM5.5 7.25722C5.2812 7.25722 5.07135 7.34218 4.91664 7.4934C4.76192 7.64462 4.675 7.84972 4.675 8.06358C4.675 8.27744 4.76192 8.48254 4.91664 8.63376C5.07135 8.78498 5.2812 8.86994 5.5 8.86994H16.5C16.7188 8.86994 16.9286 8.78498 17.0834 8.63376C17.2381 8.48254 17.325 8.27744 17.325 8.06358C17.325 7.84972 17.2381 7.64462 17.0834 7.4934C16.9286 7.34218 16.7188 7.25722 16.5 7.25722H5.5Z" fill="#FF6600" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.221 12.8426C11.8805 12.5586 11.4476 12.4026 11 12.4026C10.5524 12.4026 10.1195 12.5586 9.779 12.8426C9.47815 13.0941 9.1034 13.2458 8.7087 13.2759C8.26261 13.3106 7.8438 13.4996 7.52747 13.809C7.21114 14.1184 7.01803 14.5278 6.9828 14.9639C6.952 15.3488 6.7958 15.7143 6.5395 16.01C6.24954 16.3426 6.09028 16.7653 6.09028 17.2023C6.09028 17.6393 6.24954 18.062 6.5395 18.3946C6.7969 18.6892 6.952 19.0558 6.9828 19.4408C7.01806 19.8769 7.21133 20.2866 7.52789 20.596C7.84444 20.9054 8.26352 21.0943 8.7098 21.1287C9.1036 21.1588 9.4787 21.3104 9.7801 21.5609C10.1204 21.8443 10.5529 22 11 22C11.4471 22 11.8796 21.8443 12.2199 21.5609C12.5207 21.3094 12.8955 21.1577 13.2902 21.1277C13.7363 21.0932 14.1552 20.9045 14.4718 20.5953C14.7883 20.2861 14.9817 19.8768 15.0172 19.4408C15.0476 19.0551 15.2025 18.6888 15.4594 18.3946C15.7497 18.0619 15.9091 17.639 15.9091 17.2018C15.9091 16.7645 15.7497 16.3416 15.4594 16.0089C15.2021 15.7148 15.0468 15.3486 15.0161 14.9628C14.9806 14.5269 14.7874 14.1177 14.4711 13.8086C14.1548 13.4994 13.7361 13.3105 13.2902 13.2759C12.8955 13.2458 12.5218 13.0941 12.221 12.8426ZM13.2121 16.7163C13.2925 16.6443 13.3574 16.5575 13.4033 16.4608C13.4491 16.3642 13.4749 16.2596 13.4791 16.1531C13.4833 16.0466 13.4659 15.9404 13.4279 15.8406C13.3898 15.7407 13.3319 15.6492 13.2575 15.5714C13.1831 15.4935 13.0936 15.4308 12.9943 15.387C12.8949 15.3431 12.7877 15.319 12.6787 15.3158C12.5698 15.3127 12.4613 15.3308 12.3595 15.3689C12.2577 15.407 12.1646 15.4645 12.0857 15.538L10.2927 17.1743L9.9121 16.8281C9.7518 16.6846 9.54 16.6086 9.32273 16.6169C9.10546 16.6251 8.90031 16.7168 8.75187 16.8721C8.60343 17.0274 8.52371 17.2337 8.53005 17.4461C8.53638 17.6585 8.62826 17.8599 8.7857 18.0065L9.7284 18.8666C9.8812 19.0061 10.0825 19.0838 10.2916 19.0838C10.5007 19.0838 10.702 19.0061 10.8548 18.8666L13.2121 16.7163Z" fill="#FF6600" />
                        </svg>
                        <h2 className="font-semibold text-lg">KYC details</h2>
                    </div>

                    <div className="border rounded-xl p-4 flex-1 relative">
                        <div className="flex items-center justify-between mb-2">
                            <Badge className="bg-green-500 hover:bg-green-600">Verified</Badge>
                            <span
                                onClick={() => setIsOpenTwo(!isOpenTwo)}
                                className="hover:bg-primary border p-2 rounded-full cursor-pointer group transition-colors duration-200">
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="text-black group-hover:text-white transition-colors duration-200">  {/* Added text color classes */}
                                    <path
                                        d="M0.206851 8.69206L6.58485 2.31406L1.63042 2.31406L1.63042 0.757273H9.24262L9.24262 8.36947H7.68583L7.68583 3.41505L1.30783 9.79305L0.206851 8.69206Z"
                                    />  {/* Removed fill attribute to inherit from SVG */}
                                </svg>
                            </span>

                        </div>

                        <div className="flex gap-2 mt-2">
                            <Image
                                src="/nationalD/id-card-one.png"
                                alt="KYC front"
                                width={160}
                                height={80}
                                className="rounded-md object-cover"
                            />
                            <Image
                                src="/nationalD/id-card-two.png"
                                alt="KYC back"
                                width={160}
                                height={80}
                                className="rounded-md object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* transition */}

            <div className=" m-4">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Wallet className="w-6 h-6 text-orange-500" />
                        <h2 className="text-xl font-semibold text-gray-900">Transaction details</h2>
                    </div>
                  <Button
  onClick={() => setIsOpen(!isOpen)}
  variant="outline"
  className="group rounded-lg px-4 py-2 text-sm font-medium flex items-center gap-1 bg-transparent hover:bg-primary hover:text-[#ffff] transition-all duration-300 ease-in-out cursor-pointer"
>
  See all
  <ArrowUpRight className="w-4 h-4 text-current transition-all duration-300 ease-in-out group-hover:text-white group-hover:translate-x-0.5 " />
</Button>

                </div>

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
                            {transactions.map((transaction) => (
                                <div
                                    key={transaction.id}
                                    className="grid grid-cols-[minmax(150px,1.5fr)_minmax(150px,2fr)_minmax(150px,2fr)_minmax(80px,1fr)] gap-4 items-center text-sm"
                                >
                                    <div className=" flex items-center gap-2">
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



            {/* modal component */}
            <CustomModal
                open={isOpen}
                setIsOpen={setIsOpen}
                className={"p-2 max-h-[30vh]"}
                maxWidth={"!max-w-[50vw]"}
            >
                <AllUserTransition />
            </CustomModal>



            {/* modal component */}
            <CustomModal
                open={isOpenTwo}
                setIsOpen={setIsOpenTwo}
                className={"p-2 max-h-[0vh]"}
                maxWidth={"!max-w-[35vw]"}
            >
                <UserNationalIdCard />
            </CustomModal>
        </div>
    )
}

export default UserDetailsPage



