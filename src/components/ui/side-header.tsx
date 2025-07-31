"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { data } from "../app-sidebar";
import Image from "next/image";

const SiteHeader = () => {
  const pathname = usePathname();
  const router = useRouter()
  const pathSegment = pathname.split('/').pop() || '';
  const currentProject = data.projects.find(project => project.url === pathSegment);
  const title = currentProject?.title || '';


  const searchParams = useSearchParams()
  const text = searchParams.get('text')


  const handleNotification = () => {
    router.push('/notification')
  }
  const handleProfile = () => {
    router.push('/changePassword')
  }

  return (
    <div className="bg-[var(--headerColor)]  py-8 px-4 rounded flex justify-between">

      <div>
        <h1 className="text-4xl font-semibold">{title}</h1>
      </div>

      <div className="flex items-center space-x-6">
        <span onClick={handleNotification} className="cursor-pointer">
          <svg width="40" height="40" viewBox="0 0 55 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="55" height="55" rx="27.5" fill="#FF6600" />
            <path d="M24.145 36.4437C24.361 37.1824 24.8042 37.8302 25.4086 38.2907C26.013 38.7513 26.7464 39 27.5 39C28.2536 39 28.987 38.7513 29.5914 38.2907C30.1958 37.8302 30.639 37.1824 30.855 36.4437H24.145ZM18.5 35.4203H36.5V32.3503L34.5 29.2802V24.1635C34.5 23.2227 34.3189 22.2912 33.9672 21.4221C33.6154 20.553 33.0998 19.7633 32.4497 19.0981C31.7997 18.4329 31.0281 17.9053 30.1788 17.5453C29.3295 17.1853 28.4193 17 27.5 17C26.5807 17 25.6705 17.1853 24.8212 17.5453C23.9719 17.9053 23.2003 18.4329 22.5503 19.0981C21.9002 19.7633 21.3846 20.553 21.0328 21.4221C20.6811 22.2912 20.5 23.2227 20.5 24.1635V29.2802L18.5 32.3503V35.4203Z" fill="white" />
          </svg>
        </span>
        <Image
          src="/photo.JPEG"
          alt='photo'
          width={32}
          height={32}
          onClick={handleProfile}
          className="w-[38px] h-[38px] rounded-full object-cover cursor-pointer"
        />
        <h1 
        onClick={handleProfile}
        className="text-[24px] font-medium cursor-pointer">Shara Martinez</h1>
      </div>
    </div>
  )
}

export default SiteHeader
