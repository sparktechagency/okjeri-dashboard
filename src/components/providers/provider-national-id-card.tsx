import Image from "next/image"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const ProviderNationalIdCard = () => {
    return (
        <div className="px-[20] ">
            <h1 className="text-center text-[24px] pb-4">National Identity Card (NID)</h1>


            <div className="flex justify-between gap-4 my-8">

                {/* Front ID Card Section */}
                <div className="flex flex-col items-center gap-4">
                    <Button className="w-full  bg-orange-500 text-white text-lg font-semibold py-6 rounded-lg shadow-md">
                        Front
                    </Button>
                    <div className="w-full  border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                            <Image
                                src="/nationalD/id-card-three.png"
                                alt="Front of Bangladesh National ID Card"
                                width={400}
                                height={250}
                                layout="responsive"
                                className="object-cover"
                            />
                        </CardContent>
                    </div>
                </div>

                {/* Back ID Card Section */}
                <div className="flex flex-col items-center gap-4">
                    <Button className="w-full  bg-orange-500 text-white text-lg font-semibold py-6 rounded-lg shadow-md">
                        Back
                    </Button>
                    <div className="w-full  border border-gray-300 rounded-lg shadow-lg overflow-hidden">
                        <CardContent className="p-0">
                            <Image
                                src="/nationalD/id-card-four.png"
                                alt="Front of Bangladesh National ID Card"
                                width={400}
                                height={250}
                                layout="responsive"
                                className="object-cover"
                            />
                        </CardContent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProviderNationalIdCard
