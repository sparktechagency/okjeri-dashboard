
"use client"

import type React from "react"
import { Upload, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"




const EditPromotion = () => {
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
    }




    return (
        <div className="pt-4">
            <h1 className="text-center text-[24px] pb-4">Update a promotion banner image</h1>


            <div className="p-6 space-y-6">
                {/* Image Upload Area */}
                <div className="space-y-4">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        {imagePreview ? (
                            <div className="space-y-4">
                                <Image
                                    src={imagePreview || "/placeholder.svg"}
                                    alt="Category preview"
                                    width={200}
                                    height={200}
                                    loading="lazy"
                                    className="mx-auto max-h-32 rounded-lg object-cover"
                                />
                                <p className="text-sm text-gray-600">Category image uploaded</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <Upload className="mx-auto h-16 w-10 text-gray-400" />
                                <p className="text-gray-600 font-medium">Upload promotion image</p>
                            </div>
                        )}
                    </div>

                    <div className="flex justify-center">
                        <Button
                            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 rounded-full cursor-pointer"
                            onClick={() => document.getElementById("image-upload")?.click()}
                        >
                            Browse
                        </Button>
                        <input id="image-upload" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </div>
                </div>

             

                {/* Save Button */}
                <Button
                    onClick={handleSave}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-xl font-medium cursor-pointer"
                >
                    Save changes
                </Button>
            </div>
        </div>
    )
}

export default EditPromotion

