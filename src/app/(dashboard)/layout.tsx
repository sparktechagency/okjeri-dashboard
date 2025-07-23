import { AppSidebar } from "@/components/app-sidebar";
import SiteHeader from "@/components/ui/side-header";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full m-4 rounded">
          <SidebarTrigger />
          <SiteHeader />
          {children}
        </div>
      </SidebarProvider>
    </>
  );
}
