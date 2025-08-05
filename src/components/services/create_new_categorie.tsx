
"use client"

import type React from "react"
import { Upload,} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"




const CreateNewCategorie = () => {
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
            <h1 className="text-center text-[24px] pb-4">Create a new category</h1>


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
                                <Upload className="mx-auto h-16 w-10 text-gray-400" />
                                <p className="text-gray-600 font-medium">Upload category image</p>
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
                        className="w-full px-4 py-6 rounded-xl border  placeholder:text-gray-400"
                    />
                </div>

                {/* Save Button */}
                <Button
                    onClick={handleSave}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 rounded-xl font-medium cursor-pointer"
                    disabled={!categoryName.trim()}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}

export default CreateNewCategorie
