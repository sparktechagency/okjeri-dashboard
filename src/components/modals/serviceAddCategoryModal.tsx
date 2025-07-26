// import { Button } from "@/components/ui/button"
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"

// import { Check, Mail, MapPin, Phone, Plus, User, } from "lucide-react"
// import Image from "next/image"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"




// const ServiceAddCategoryModal = () => {
//     return (
//         <Dialog >
//             <form>
//                 <DialogTrigger asChild>
//                     <button
//                         className="bg-primary cursor-pointer text-white rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-2"
//                     >
//                         <Plus className="h-4 w-4" />
//                         Create a new category
//                     </button>
//                 </DialogTrigger>




//                 <DialogContent className="!max-w-[50vw]  p-0 gap-0 rounded-2xl">
//                     {/* Header */}
//                     <DialogHeader className="bg-[#FF6B35] text-white p-4 rounded-t-2xl relative">
//                         <h2 className="text-center font-medium text-base">Booking details</h2>
//                     </DialogHeader>

//                     <div className="">
//                         <div className="max-w-4xl mx-auto p-6 space-y-6">
                          
//                         </div>

//                         {/* Footer Buttons */}
//                         <div className="max-w-4xl mx-auto flex gap-3 p-6 py-2">
//                             <Button
//                                 variant="outline"
//                                 className="flex-1 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent rounded-full"

//                             >
//                                 Close
//                             </Button>
//                             <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white rounded-full">Cancel booking</Button>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </form>
//         </Dialog>
//     )
// }

// export default ServiceAddCategoryModal






"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CreateCategoryModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ServiceAddCategoryModal({ open, onOpenChange }: CreateCategoryModalProps) {
  const [categoryName, setCategoryName] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSave = () => {
    // Handle save logic here
    console.log("Category name:", categoryName)
    console.log("Selected image:", selectedImage)

    // Reset form and close modal
    setCategoryName("")
    setSelectedImage(null)
    setImagePreview(null)
    onOpenChange(false)
  }

  const handleClose = () => {
    // Reset form when closing
    setCategoryName("")
    setSelectedImage(null)
    setImagePreview(null)
    onOpenChange(false)
  }


  
  return (
    <Dialog open={open} onOpenChange={onOpenChange} >
      <DialogContent className="sm:max-w-md p-0 gap-0 ">
            <DialogHeader className="bg-[#FF6B35] text-white p-4 rounded-t-md relative">
            <h2 className="text-center font-medium text-base">Create a new category</h2>
          </DialogHeader>

        <div className="p-6 space-y-6">
          {/* Image Upload Area */}
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {imagePreview ? (
                <div className="space-y-4">
                  <img
                    src={imagePreview || "/placeholder.svg"}
                    alt="Category preview"
                    className="mx-auto max-h-32 rounded-lg object-cover"
                  />
                  <p className="text-sm text-gray-600">Category image uploaded</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="text-gray-600 font-medium">Upload category image</p>
                </div>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full"
                onClick={() => document.getElementById("image-upload")?.click()}
              >
                Browse
              </Button>
              <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </div>
          </div>

          {/* Category Name Input */}
          <div className="space-y-2">
            <Label htmlFor="category-name" className="text-sm font-medium text-gray-700">
              Category name
            </Label>
            <Input
              id="category-name"
              type="text"
              placeholder="Type here"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 placeholder:text-gray-400"
            />
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium"
            disabled={!categoryName.trim()}
          >
            Save
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

