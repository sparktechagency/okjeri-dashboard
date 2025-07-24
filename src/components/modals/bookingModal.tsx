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
import { Badge } from "../ui/badge"
import { Calendar, CheckCircle, Mail, MapPin, Phone, User, Wrench } from "lucide-react"
import Image from "next/image"



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

          <div className="p-4 space-y-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quidem nemo, autem veritatis distinctio deserunt veniam. Officia, exercitationem, quasi cupiditate, repellat consequuntur dolore incidunt qui aperiam culpa voluptatibus nemo quis.

            {/* Footer Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                className="flex-1 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"

              >
                Close
              </Button>
              <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white">Cancel booking</Button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  )
}



