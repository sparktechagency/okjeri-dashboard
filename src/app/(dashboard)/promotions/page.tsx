
"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import Image from "next/image"
import CustomModal from "@/components/modal/customModal"
import DeletePromotion from "@/components/providers/delete-promotion"
import CreateNewProvider from "@/components/providers/create_new_provider"
import EditPromotion from "@/components/providers/edit-promotion"

export default function PromotionsPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [addModalOpen, setAddModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)

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

  ]

  const toggleMenu = (id: number) => {
    setOpenMenuId(openMenuId === id ? null : id)
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-5">
        {categories?.map((item, index) => {
          return (
            <div key={index}>
              <div className="relative">
                <Image
                  src={item?.image}
                  alt="photo"
                  width={300}
                  height={200}
                  className="w-full h-[240px] rounded-lg object-cover"
                />

                <span
                  onClick={() => toggleMenu(item.id)}
                  className="absolute top-0 right-0 p-1 rounded-full cursor-pointer">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="black" fillOpacity="0.2" />
                    <path d="M24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16C22 17.1046 22.8954 18 24 18Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 34C25.1046 34 26 33.1046 26 32C26 30.8954 25.1046 30 24 30C22.8954 30 22 30.8954 22 32C22 33.1046 22.8954 34 24 34Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>

                {openMenuId === item.id && (
                  <div className="bg-white absolute bottom-[95px] right-4 cursor-pointer shadow-lg">
                    {/* delete photo */}
                    <button
                      type="button"
                      onClick={() => setDeleteModalOpen(!deleteModalOpen)}
                      className="flex justify-start items-center w-full bg-[#FFEBEB] border-none px-6 py-2 gap-3 cursor-pointer"
                    >
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16 1.11111H12L10.8571 0H5.14286L4 1.11111H0V3.33333H16M1.14286 17.7778C1.14286 18.3671 1.38367 18.9324 1.81233 19.3491C2.24098 19.7659 2.82236 20 3.42857 20H12.5714C13.1776 20 13.759 19.7659 14.1877 19.3491C14.6163 18.9324 14.8571 18.3671 14.8571 17.7778V4.44444H1.14286V17.7778Z"
                          fill="#FF0000"
                        />
                      </svg>
                      <p className="font-medium text-lg font-roboto text-[#FF0000]">
                        Delete
                      </p>
                    </button>

                    {/* update photo */}
                    <button
                      type="button"
                      onClick={() => setEditOpen(!editOpen)}
                      className="flex justify-start items-center w-full border-none px-6 py-2 gap-3 cursor-pointer">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.4 0H1.8C1.32261 0 0.864773 0.189642 0.527208 0.527208C0.189642 0.864773 0 1.32261 0 1.8V5.4C0 5.87739 0.189642 6.33523 0.527208 6.67279C0.864773 7.01036 1.32261 7.2 1.8 7.2H5.4C5.87739 7.2 6.33523 7.01036 6.67279 6.67279C7.01036 6.33523 7.2 5.87739 7.2 5.4V1.8C7.2 1.32261 7.01036 0.864773 6.67279 0.527208C6.33523 0.189642 5.87739 0 5.4 0ZM16.2 10.8H12.6C12.1226 10.8 11.6648 10.9896 11.3272 11.3272C10.9896 11.6648 10.8 12.1226 10.8 12.6V16.2C10.8 16.6774 10.9896 17.1352 11.3272 17.4728C11.6648 17.8104 12.1226 18 12.6 18H16.2C16.6774 18 17.1352 17.8104 17.4728 17.4728C17.8104 17.1352 18 16.6774 18 16.2V12.6C18 12.1226 17.8104 11.6648 17.4728 11.3272C17.1352 10.9896 16.6774 10.8 16.2 10.8ZM13.2363 0.2637C13.3913 0.418674 13.4843 0.624863 13.4981 0.843587C13.5119 1.06231 13.4453 1.27854 13.311 1.4517L13.2363 1.5363L12.0726 2.7H15.3C15.9887 2.69996 16.6514 2.96309 17.1524 3.43556C17.6535 3.90802 17.9551 4.5541 17.9955 5.2416L18 5.4V8.1C17.9997 8.32939 17.9119 8.55003 17.7544 8.71683C17.597 8.88363 17.3817 8.98401 17.1527 8.99745C16.9237 9.0109 16.6983 8.93639 16.5224 8.78916C16.3464 8.64193 16.2334 8.43309 16.2063 8.2053L16.2 8.1V5.4C16.2 5.17956 16.119 4.9668 15.9726 4.80206C15.8261 4.63733 15.6242 4.53209 15.4053 4.5063L15.3 4.5H12.0735L13.2363 5.6637C13.3977 5.82566 13.4914 6.04299 13.4984 6.27155C13.5054 6.5001 13.4251 6.72274 13.2739 6.89425C13.1226 7.06576 12.9118 7.17327 12.6842 7.19496C12.4565 7.21664 12.2292 7.15087 12.0483 7.011L11.9637 6.9363L9.2637 4.2363C9.16096 4.1359 9.0843 4.01192 9.04038 3.87515C8.99646 3.73838 8.98662 3.59294 9.0117 3.4515L9.0441 3.3201L9.0801 3.2265C9.1323 3.1119 9.2058 3.0117 9.3006 2.9259L11.9637 0.2637C12.1325 0.094976 12.3614 0.000192261 12.6 0.000192261C12.8386 0.000192261 13.0675 0.094976 13.2363 0.2637ZM0.9 9C1.12044 9.00003 1.3332 9.08096 1.49793 9.22744C1.66267 9.37393 1.76791 9.57577 1.7937 9.7947L1.8 9.9V12.6C1.80003 12.8204 1.88096 13.0332 2.02744 13.1979C2.17393 13.3627 2.37577 13.4679 2.5947 13.4937L2.7 13.5H5.9265L4.7637 12.3363C4.60874 12.1813 4.51565 11.9751 4.5019 11.7564C4.48815 11.5377 4.55467 11.3215 4.689 11.1483L4.7637 11.0637C4.91867 10.9087 5.12486 10.8157 5.34359 10.8019C5.56231 10.7881 5.77854 10.8547 5.9517 10.989L6.0363 11.0637L8.7363 13.7637C8.83904 13.8641 8.9157 13.9881 8.95962 14.1249C9.00354 14.2616 9.01338 14.4071 8.9883 14.5485L8.9559 14.6799L8.9199 14.7735C8.86819 14.888 8.79307 14.9904 8.6994 15.0741L6.0363 17.7363C5.87434 17.8977 5.65701 17.9914 5.42845 17.9984C5.1999 18.0054 4.97726 17.9251 4.80575 17.7739C4.63424 17.6226 4.52672 17.4118 4.50504 17.1842C4.48336 16.9565 4.54913 16.7292 4.689 16.5483L4.7637 16.4637L5.9256 15.3H2.7C2.01131 15.3 1.34864 15.0369 0.847565 14.5644C0.346494 14.092 0.0449032 13.4459 0.0045001 12.7584L0 12.6V9.9C0 9.6613 0.0948211 9.43239 0.263604 9.2636C0.432387 9.09482 0.661305 9 0.9 9Z" fill="#FF6600" />
                      </svg>
                      <p className="font-medium text-lg font-roboto text-[#4B5320]">
                        Replace
                      </p>
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-8">
        <button
          onClick={() => setAddModalOpen(!addModalOpen)}
          className="bg-primary cursor-pointer text-white rounded-lg px-6 py-3 text-sm font-medium flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Create a new category
        </button>
      </div>



      {/* modal component(CREATE_PROMOTION) */}
      <CustomModal
        open={addModalOpen}
        setIsOpen={setAddModalOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <CreateNewProvider />
      </CustomModal>



      {/* modal component(DELETE_PROMOTION) */}
      <CustomModal
        open={deleteModalOpen}
        setIsOpen={setDeleteModalOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <DeletePromotion
          open={deleteModalOpen}
          setIsOpen={setDeleteModalOpen}
        />
      </CustomModal>



      {/* modal component(EDIT_PROMOTION) */}
      <CustomModal
        open={editOpen}
        setIsOpen={setEditOpen}
        className={"p-2 max-h-[50vh]"}
        maxWidth={"!max-w-[30vw]"}
      >
        <EditPromotion />
      </CustomModal>
    </div>
  )
}