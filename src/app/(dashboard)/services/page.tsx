
"use client"

import { useState } from "react"
import { Search, Plus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import CustomModal from "@/components/modal/customModal"
import CreateNewCategorie from "@/components/services/create_new_categorie"
import EditCatrgorie from "@/components/services/edit_catrgorie"
import DeleteCategorie from "@/components/services/delete-categorie"





export default function ServicePage() {
  const [searchText, setSearchText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTwo, setIsOpenTwo] = useState(false)
  const [isOpenThree, setIsOpenThree] = useState(false)
  const router = useRouter()

  const categories = [
    {
      "id": 1,
      "name": "Classic Haircut",
      "image": "/photo3.jpg"
    },
    {
      "id": 2,
      "name": "Beard Trim",
      "image": "/photo2.jpg"
    },
    {
      "id": 3,
      "name": "Facial Cleanup",
      "image": "/photo3.jpg"
    },
    {
      "id": 4,
      "name": "Hair Coloring",
      "image": "/photo3.jpg"
    },
    {
      "id": 5,
      "name": "Shampoo & Wash",
      "image": "/photo3.jpg"
    },
    {
      "id": 6,
      "name": "Hair Spa",
      "image": "/photo2.jpg"
    },
    {
      "id": 7,
      "name": "Head Massage",
      "image": "/photo3.jpg"
    },
    {
      "id": 8,
      "name": "Body Waxing",
      "image": "/photo3.jpg"
    },
    {
      "id": 9,
      "name": "Manicure",
      "image": "/photo3.jpg"
    },
    {
      "id": 10,
      "name": "Pedicure",
      "image": "/photo2.jpg"
    },

  ]



  const service_count = 456

  const RequestedServices = () => {
    router.push('/requestedServices')
  }



  return (
    <div className="  p-6">
      <div className="">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search "
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 bg-white border-gray-200 rounded-full h-12 text-sm font-normal text-gray-700"
            />
          </div>
          <button onClick={RequestedServices} className="cursor-pointer bg-primary text-white rounded-full px-6 h-12 text-sm font-medium">
            Service Requests (10)
          </button>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
          {categories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-2 border-gray-200 rounded-xl overflow-hidden ">
              <CardContent className="p-0">
                <div className="relative  h-full flex items-center justify-center rounded-xl">
                  <Image
                    src={category?.image}
                    alt="photo"
                    width={300}
                    height={200}
                    className="w-[300px] h-[150px] bg-transparent rounded-lg  object-cover"
                  />
                  {
                    service_count && <div className="absolute top-2 right-2 bg-white/55 backdrop-blur-xl font-bold rounded-full px-6 py-1">
                      <span className=" font-semibold ">{service_count}</span>
                    </div>
                  }

                </div>

                {/* Category Label */}
                <div className="bg-orange-500 rounded-xl text-white px-3 py-2 mt-2 flex items-center justify-between">
                  <span className="text-sm font-medium">{index + 1}. {category.name}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsOpenTwo(!isOpenTwo)}
                      className="cursor-pointer">
                      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="-0.0012207" width="38.0025" height="38.0025" rx="6" fill="white" />
                        <path d="M27.71 14.0413C28.1 13.6513 28.1 13.0013 27.71 12.6313L25.37 10.2913C25 9.90128 24.35 9.90128 23.96 10.2913L22.12 12.1213L25.87 15.8713M10 24.2513V28.0013H13.75L24.81 16.9313L21.06 13.1813L10 24.2513Z" fill="#00B400" />
                      </svg>

                    </button>
                    <button
                      onClick={() => setIsOpenThree(!isOpenThree)}
                      className="cursor-pointer"
                    >
                      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.00244141" width="34" height="38" rx="6" fill="white" />
                        <path d="M24.0024 11H20.5024L19.5024 10H14.5024L13.5024 11H10.0024V13H24.0024M11.0024 26C11.0024 26.5304 11.2132 27.0391 11.5882 27.4142C11.9633 27.7893 12.472 28 13.0024 28H21.0024C21.5329 28 22.0416 27.7893 22.4167 27.4142C22.7917 27.0391 23.0024 26.5304 23.0024 26V14H11.0024V26Z" fill="#EF4444" />
                      </svg>

                    </button>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        <div className="mt-8">
          {/* Create New Category Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary cursor-pointer text-white rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create a new category
          </button>
        </div>
      </div>




      {/* modal component(CREATE_CATEGORIES) */}
      <CustomModal
        open={isOpen}
        setIsOpen={setIsOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <CreateNewCategorie />
      </CustomModal>



      {/* modal component(EDIT_CATEGORIES) */}
      <CustomModal
        open={isOpenTwo}
        setIsOpen={setIsOpenTwo}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <EditCatrgorie />
      </CustomModal>




      {/* modal component(DELETE_CATEGORIES) */}
      <CustomModal
        open={isOpenThree}
        setIsOpen={setIsOpenThree}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <DeleteCategorie 
         open={isOpenThree}
        setIsOpen={setIsOpenThree}
        />
      </CustomModal>


    </div>
  )
}
