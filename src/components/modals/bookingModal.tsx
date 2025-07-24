import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Check, Mail, MapPin, Phone, User, } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"



export function BookingModal() {
  return (
    <Dialog >
      <form>
        <DialogTrigger asChild>
          <button className="cursor-pointer">
            <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="37" height="37" rx="5" fill="#FFF3EB" />
              <path d="M18.5 15.8C17.632 15.8 16.7996 16.1371 16.1858 16.7373C15.5721 17.3374 15.2273 18.1513 15.2273 19C15.2273 19.8487 15.5721 20.6626 16.1858 21.2627C16.7996 21.8629 17.632 22.2 18.5 22.2C19.368 22.2 20.2004 21.8629 20.8142 21.2627C21.4279 20.6626 21.7727 19.8487 21.7727 19C21.7727 18.1513 21.4279 17.3374 20.8142 16.7373C20.2004 16.1371 19.368 15.8 18.5 15.8ZM18.5 24.3333C17.0534 24.3333 15.666 23.7714 14.6431 22.7712C13.6201 21.771 13.0455 20.4145 13.0455 19C13.0455 17.5855 13.6201 16.229 14.6431 15.2288C15.666 14.2286 17.0534 13.6667 18.5 13.6667C19.9466 13.6667 21.334 14.2286 22.3569 15.2288C23.3799 16.229 23.9545 17.5855 23.9545 19C23.9545 20.4145 23.3799 21.771 22.3569 22.7712C21.334 23.7714 19.9466 24.3333 18.5 24.3333ZM18.5 11C13.0455 11 8.38727 14.3173 6.5 19C8.38727 23.6827 13.0455 27 18.5 27C23.9545 27 28.6127 23.6827 30.5 19C28.6127 14.3173 23.9545 11 18.5 11Z" fill="#F96D10" />
            </svg>
          </button>
        </DialogTrigger>




        <DialogContent className="!max-w-[50vw]  p-0 gap-0 rounded-2xl">
          {/* Header */}
          <DialogHeader className="bg-[#FF6B35] text-white p-4 rounded-t-2xl relative">
            <h2 className="text-center font-medium text-base">Booking details</h2>
          </DialogHeader>

          <div className="">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
              {/* User and Provider Details */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* User Details */}
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 0C12.4587 0 13.8576 0.579462 14.8891 1.61091C15.9205 2.64236 16.5 4.04131 16.5 5.5C16.5 6.95869 15.9205 8.35764 14.8891 9.38909C13.8576 10.4205 12.4587 11 11 11C9.54131 11 8.14236 10.4205 7.11091 9.38909C6.07946 8.35764 5.5 6.95869 5.5 5.5C5.5 4.04131 6.07946 2.64236 7.11091 1.61091C8.14236 0.579462 9.54131 0 11 0ZM11 13.75C17.0775 13.75 22 16.2113 22 19.25V22H0V19.25C0 16.2113 4.9225 13.75 11 13.75Z" fill="#FF6600" />
                    </svg>
                    <CardTitle className="text-lg font-semibold text-gray-800">User details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="User profile"
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-900">Md. Abid Hasan</span>
                          <div className="bg-blue-500 rounded-full p-1">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">example@gmail.com</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">+8801234567</span>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <span className="text-gray-600">47 W 13th St, New York, NY 10011, USA</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Provider Details */}
                <Card>
                  <CardHeader className="flex flex-row items-center space-y-0 pb-4">

                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.131 7.87835L19.5837 7.59607C19.4553 7.57407 19.3893 7.48609 19.36 7.43843C19.3307 7.39077 19.294 7.28812 19.3417 7.16347L20.042 5.34511C20.1923 4.95651 20.097 4.51291 19.8037 4.21963L17.7797 2.19597C17.4827 1.90268 17.0427 1.80737 16.654 1.95767L14.8353 2.65789C14.7107 2.70555 14.6117 2.66522 14.5603 2.63956C14.5127 2.61023 14.4247 2.54791 14.4027 2.41593L14.1203 0.865189C14.0287 0.36294 13.5923 0 13.0827 0H8.91733C8.40767 0 7.97133 0.362939 7.87967 0.868855L7.59733 2.4196C7.57533 2.54791 7.48733 2.6139 7.43967 2.64323C7.392 2.67255 7.28933 2.70922 7.16467 2.66156L5.346 1.96134C4.95733 1.81103 4.51367 1.90268 4.22033 2.19963L2.19633 4.2233C1.903 4.51658 1.80767 4.96017 1.958 5.34878L2.65833 7.16714C2.706 7.29178 2.66567 7.39077 2.64 7.44209C2.61067 7.48975 2.54833 7.57774 2.41633 7.59973L0.865333 7.88202C0.363 7.97367 0 8.40993 0 8.91951V13.0842C0 13.5937 0.363 14.03 0.869 14.1216L2.41633 14.4039C2.54467 14.4259 2.61067 14.5139 2.64 14.5616C2.66933 14.6092 2.706 14.7119 2.65833 14.8365L1.958 16.6549C1.80767 17.0435 1.903 17.4871 2.19633 17.7804L4.22033 19.804C4.51733 20.101 4.95733 20.1926 5.346 20.0423L7.16467 19.3421C7.28933 19.2945 7.38833 19.3348 7.43967 19.3604C7.48733 19.3898 7.57533 19.4521 7.59733 19.5841L7.87967 21.1348C7.97133 21.6371 8.40767 22 8.91733 22H13.0827C13.5923 22 14.0287 21.6371 14.1203 21.1311L14.4027 19.5841C14.4247 19.4558 14.5127 19.3898 14.5603 19.3604C14.608 19.3311 14.7107 19.2945 14.8353 19.3421L16.654 20.0423C17.0427 20.1926 17.4863 20.0973 17.7797 19.804L19.8037 17.7804C20.097 17.4871 20.1923 17.0435 20.042 16.6549L19.3417 14.8365C19.294 14.7119 19.3343 14.6129 19.36 14.5616C19.3893 14.5139 19.4517 14.4259 19.5837 14.4039L21.1347 14.1216C21.637 14.03 22 13.5937 22 13.0842V8.91951C22 8.40993 21.637 7.97367 21.131 7.88202V7.87835ZM16.4413 15.9143L13.222 12.3949C13.508 11.9807 13.684 11.5004 13.728 10.9762C13.8563 9.29712 12.4557 7.77937 10.758 7.77204C10.4867 7.77204 10.219 7.8087 9.966 7.87835L11.4217 9.89835C11.759 10.3713 11.6563 11.0165 11.1943 11.3648C11.0037 11.5114 10.7763 11.5774 10.5563 11.5774C10.2227 11.5774 9.89267 11.4198 9.68733 11.1301L8.24267 9.12481C7.91267 9.6234 7.74033 10.2173 7.766 10.8589C7.81733 12.2776 8.921 13.4984 10.34 13.6854C10.8533 13.7514 11.3483 13.6891 11.7883 13.5241L14.85 17.2378C13.7317 17.9307 12.4117 18.3303 11 18.3303C6.94833 18.3303 3.66667 15.0492 3.66667 10.9982C3.66667 6.94718 6.94833 3.66606 11 3.66606C15.0517 3.66606 18.3333 6.94718 18.3333 10.9982C18.3333 12.8899 17.6183 14.6129 16.4413 15.9143Z" fill="#FF6600" />
                    </svg>


                    <CardTitle className="text-lg font-semibold text-gray-800">Provider details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Image
                          src="/placeholder.svg?height=60&width=60"
                          alt="Provider profile"
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">John Doe</span>
                          <div className="bg-blue-500 rounded-full p-1">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gray-400 rounded-full flex items-center justify-center">
                          <User className="w-2.5 h-2.5 text-white" />
                        </div>
                        <span className="text-gray-600">Cleaner</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">example@gmail.com</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">+8801234567</span>
                      </div>

                      <div className="flex items-start space-x-3">
                        <MapPin className="w-4 h-4 text-gray-400 mt-0.5" />
                        <span className="text-gray-600">47 W 13th St, New York, NY 10011, USA</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Details */}
              <Card>
                <CardHeader className="flex flex-row items-center space-y-0 pb-4">
                  <svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.9086 0.871094H0.844085C0.379838 0.871094 0 1.25093 0 1.71518V20.285C0 20.7493 0.379838 21.1291 0.844085 21.1291H5.9086C6.37284 21.1291 6.75268 20.7493 6.75268 20.285V1.71518C6.75268 1.25093 6.37284 0.871094 5.9086 0.871094ZM5.06451 5.9356H1.68817V4.24743H5.06451V5.9356ZM14.3494 0.871094H9.28493C8.82069 0.871094 8.44085 1.25093 8.44085 1.71518V20.285C8.44085 20.7493 8.82069 21.1291 9.28493 21.1291H14.3494C14.8137 21.1291 15.1935 20.7493 15.1935 20.285V1.71518C15.1935 1.25093 14.8137 0.871094 14.3494 0.871094ZM13.5054 5.9356H10.129V4.24743H13.5054V5.9356Z" fill="#FF6600" />
                    <path d="M20.1807 2.1761L15.6581 4.45513C15.4582 4.55573 15.3065 4.73154 15.2363 4.94395C15.166 5.15635 15.1829 5.38796 15.2833 5.58789L22.8801 20.6633C22.9807 20.8631 23.1565 21.0148 23.3689 21.0851C23.5813 21.1554 23.8129 21.1384 24.0128 21.038L28.5354 18.759C28.7353 18.6584 28.887 18.4826 28.9573 18.2702C29.0276 18.0578 29.0106 17.8262 28.9102 17.6262L21.3135 2.55087C21.2129 2.35104 21.037 2.19932 20.8246 2.12904C20.6122 2.05877 20.3806 2.07569 20.1807 2.1761Z" fill="#FF6600" />
                    <path d="M24.4785 20.285C24.4785 20.5089 24.3895 20.7236 24.2312 20.8819C24.0729 21.0402 23.8582 21.1291 23.6344 21.1291C23.4105 21.1291 23.1958 21.0402 23.0375 20.8819C22.8792 20.7236 22.7903 20.5089 22.7903 20.285C22.7903 20.0612 22.8792 19.8465 23.0375 19.6882C23.1958 19.5299 23.4105 19.441 23.6344 19.441C23.8582 19.441 24.0729 19.5299 24.2312 19.6882C24.3895 19.8465 24.4785 20.0612 24.4785 20.285Z" fill="#FF6600" />
                  </svg>

                  <CardTitle className="text-lg font-semibold text-gray-800">Booking details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Service Details */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 text-lg">Service title goes here.</h3>

                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700">Dusting of all surfaces</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700">Sweeping and mopping floors</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700">Trash removal</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700">Bathroom wipe-down</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span className="text-gray-700">Kitchen surface wipe-down</span>
                          </li>
                        </ul>

                        <div className="pt-4">
                          <span className="text-orange-500 font-semibold text-xl">Cost:</span>
                        </div>
                      </div>

                      {/* Booking Info */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Status</span>
                          <Badge className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1">Pending</Badge>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Date:</span>
                          <span className="text-gray-600">05-02-2025</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Booking Type:</span>
                          <span className="text-gray-600">Single</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Time selection:</span>
                          <span className="text-gray-600">One time</span>
                        </div>

                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-700">Time slot:</span>
                          <span className="text-gray-600">02:00 PM - 04:00 PM</span>
                        </div>

                        <div className="pt-4 text-right">
                          <span className="text-orange-500 font-bold text-2xl">₦ 49.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Footer Buttons */}
            <div className="max-w-4xl mx-auto flex gap-3 p-6 py-2">
              <Button
                variant="outline"
                className="flex-1 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent rounded-full"

              >
                Close
              </Button>
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-full">Cancel booking</Button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}





