

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SettingsContent() {
  return (
    <div className=" p-4">
      <div className="w-full  space-y-6">
        <div>
          <Label htmlFor="referral-bonus" className="text-sm font-medium text-gray-700">
            Referral bonus amount
          </Label>
          <div className="mt-1 flex items-center">
            {" "}
            {/* Use flex to align input and text */}
            <div className="relative flex-grow max-w-xl">
              {" "}
              {/* Limit width of input for better alignment */}
              <Input
                id="referral-bonus"
                type="text"
                defaultValue="3,000.00"
                className="pr-10 py-6 rounded-full" // Add padding for the currency symbol
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">₦</span>
            </div>
            <span className="ml-2 text-sm text-gray-500 whitespace-nowrap">/ per valid referral</span>
          </div>
        </div>

        <div>
          <Label htmlFor="withdrawal-threshold" className="text-sm font-medium text-gray-700">
            Minimum withdrawal threshold
          </Label>
          <div className="mt-1 relative max-w-xl">
            {" "}
            {/* Apply max-width here too for consistency */}
            <Input
              id="withdrawal-threshold"
              type="text"
              defaultValue="3,000.00"
              className="pr-10 py-6 rounded-full" // Add padding for the currency symbol
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm">₦</span>
          </div>
        </div>

        <Button className="w-full bg-primary text-white hover:bg-primary/90 focus:ring-primary py-6 px-4 rounded-full text-base font-medium shadow-sm max-w-[300px]">
          Save changes
        </Button>
      </div>
    </div>
  )
}
