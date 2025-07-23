"use client"

import { usePathname } from "next/navigation";
import { data } from "../app-sidebar";

const SiteHeader = () => {
  const pathname = usePathname();
  const pathSegment = pathname.split('/').pop() || '';
  const currentProject = data.projects.find(project => project.url === pathSegment);
  const title = currentProject?.title || '';
  

  return (
    <div className="bg-[var(--headerColor)]  py-8 px-4 rounded">
      <h1 className="text-4xl font-semibold">{title}</h1>
    </div>
  )
}

export default SiteHeader
