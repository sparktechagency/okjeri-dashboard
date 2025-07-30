
"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type PricingFormValues = {
  price3Days: string
  price7Days: string
  price15Days: string
  price30Days: string
}

export default function PricingControl() {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<PricingFormValues>()

  const handleNavigate = () => {
    try {
      router.back()
    } catch (error) {
      router.push('/boostControl')
    }
  }

  const onSubmit = (data: PricingFormValues) => {
    console.log('Form submitted:', data)
    // Here you would typically send the data to your API
  }




  return (
    <>
      <div className="mt-8">
        <div className='flex justify-evenly'>
          <div onClick={handleNavigate} className="cursor-pointer">
            <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 20.3017H14.9669L20.8058 26.1594L18.9711 28L10 19L18.9711 10L20.8058 11.8406L14.9669 17.6983H30V20.3017Z" fill="black" />
            </svg>
          </div>

          <div className='flex justify-center'>
            <div className="relative mb-4">
              <h1 className="text-center text-[24px] pb-4">Profile boosting price</h1>
            </div>
          </div>
          <div></div>
        </div>

        {/* form */}
        <div className="flex justify-center items-center">
          <div className="bg-white p-8 rounded-xl w-full max-w-6xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Price for 3 days */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="price3Days" className="text-base font-medium text-gray-700">
                    Price
                  </Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900">₦</span>
                    <Input
                      id="price3Days"
                      type="number"
                      placeholder="0.00"
                      className="pl-8 pr-4 py-6 text-lg border border-gray-300 rounded-full focus:ring-primary focus:border-primary block w-full appearance-none"
                      style={{ borderRadius: "9999px" }}
                      {...register("price3Days", { required: "Price for 3 days is required" })}
                    />
                  </div>
                  {errors.price3Days && <p className="mt-1 text-sm text-red-600">{errors.price3Days.message}</p>}
                </div>
                <div className={`px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap ${errors.price3Days ? "" : "mt-6"}`}>
                  For 3 days
                </div>
              </div>



              {/* Price for 7 days */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="price7Days" className="text-base font-medium text-gray-700">
                    Price
                  </Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900">₦</span>
                    <Input
                      id="price7Days"
                      type="number"
                      placeholder="0.00"
                      className="pl-8 pr-4 py-6 text-lg border border-gray-300 rounded-full focus:ring-primary focus:border-primary block w-full appearance-none"
                      style={{ borderRadius: "9999px" }}
                      {...register("price7Days", { required: "Price for 7 days is required" })}
                    />
                  </div>
                  {errors.price7Days && <p className="mt-1 text-sm text-red-600">{errors.price7Days.message}</p>}
                </div>
                <div className={`px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap ${errors.price7Days ? "" : "mt-6"}`}>
                  For 7 days
                </div>
              </div>

              {/* Price for 15 days */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="price15Days" className="text-base font-medium text-gray-700">
                    Price
                  </Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900">₦</span>
                    <Input
                      id="price15Days"
                      type="number"
                      placeholder="0.00"
                      className="pl-8 pr-4 py-6 text-lg border border-gray-300 rounded-full focus:ring-primary focus:border-primary block w-full appearance-none"
                      style={{ borderRadius: "9999px" }}
                      {...register("price15Days", { required: "Price for 15 days is required" })}
                    />
                  </div>
                  {errors.price15Days && <p className="mt-1 text-sm text-red-600">{errors.price15Days.message}</p>}
                </div>
                <div className={`px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap ${errors.price15Days ? "" : "mt-6"}`}>
                  For 15 days
                </div>
              </div>

              {/* Price for 30 days */}
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Label htmlFor="price30Days" className="text-base font-medium text-gray-700">
                    Price
                  </Label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg font-semibold text-gray-900">₦</span>
                    <Input
                      id="price30Days"
                      type="number"
                      placeholder="0.00"
                      className="pl-8 pr-4 py-6 text-lg border border-gray-300 rounded-full focus:ring-primary focus:border-primary block w-full appearance-none"
                      style={{ borderRadius: "9999px" }}
                      {...register("price30Days", { required: "Price for 30 days is required" })}
                    />
                  </div>
                  {errors.price30Days && <p className="mt-1 text-sm text-red-600">{errors.price30Days.message}</p>}
                </div>
                <div className={`px-6 py-2 border border-gray-300 rounded-full text-sm font-medium text-gray-700 whitespace-nowrap ${errors.price30Days ? "" : "mt-6"}`}>
                  For 30 days
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  className="w-[50%] mx-auto bg-primary hover:bg-primary hover:opacity-90 text-white font-semibold py-6 px-8 rounded-full text-lg shadow-lg transition-colors cursor-pointer"
                >
                  Save changes
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}