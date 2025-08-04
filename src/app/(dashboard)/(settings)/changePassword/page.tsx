
"use client"

import { useState } from "react"
import { Pencil } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ChangePasswordPage() {
  const [activeTab, setActiveTab] = useState("editProfile")

  return (
    <div className="h-[70vh] flex justify-center  pt-20">
      <div className="w-full max-w-6xl rounded-xl ">
        <CardHeader className="flex flex-col items-center p-6 pb-4">
          <div className="relative mb-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://randomuser.me/api/portraits/women/2.jpg" alt="User Avatar" />
              <AvatarFallback>SM</AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="icon"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-50 cursor-pointer"
            >
              <Pencil className="h-4 w-4 text-primary" />
              <span className="sr-only">Edit avatar</span>
            </Button>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Shara Martinez</h2>
          <p className="text-sm text-gray-500">example@gmail.com</p>
        </CardHeader>
        <CardContent className="p-6 pt-0">





          <div className="flex justify-center  mb-6">
            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "editProfile"
                ? "border-b-2 border-primary text-priborder-primary"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("editProfile")}
            >
              Edit profile
            </Button>



            <Button
              variant="ghost"
              className={`rounded-none px-6 py-3 text-base font-medium ${activeTab === "changePassword"
                ? "border-b-2 border-primary text-priborder-primary"
                : "text-gray-600 hover:text-gray-800"
                }`}
              onClick={() => setActiveTab("changePassword")}
            >
              Change Password
            </Button>
          </div>




          {activeTab === "editProfile" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  className="rounded-full p-5 border-gray-300 focus:border-primary focus:ring-priborder-primary"
                  placeholder="Jhon Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="rounded-full p-5 border-gray-300 focus:border-primary focus:ring-priborder-primary"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
          )}

          {activeTab === "changePassword" && (
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password" className="text-gray-700">
                  Current password
                </Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="********"
                  className="rounded-full p-5 border-gray-300 focus:border-primary focus:ring-priborder-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password" className="text-gray-700">
                  New password
                </Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="********"
                  className="rounded-full p-5 border-gray-300 focus:border-primary focus:ring-priborder-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-gray-700">
                  Confirm new password
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="********"
                  className="rounded-full p-5 border-gray-300 focus:border-primary focus:ring-priborder-primary"
                />
              </div>
            </div>
          )}
          <div className="flex justify-center items-center ">
            <Button className="cursor-pointer w-[200px] mt-8 py-6 rounded-full text-white text-lg font-semibold bg-primary hover:bg-primary hover:opacity-90 transition-colors">
              Save
            </Button>
          </div>
        </CardContent>
      </div>
    </div>
  )
}
