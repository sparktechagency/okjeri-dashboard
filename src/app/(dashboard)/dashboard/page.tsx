import DynamicChartDemo from "@/components/ui/dynamic-chart-demo"
import EarningChart from "@/components/ui/earnings-chart"
import RecentActivities from "@/components/ui/recent-activities"



const DashboardPage = () => {
  return (
    <>
      <div className="w-[845px] flex gap-6 mt-6 ">
        <DynamicChartDemo />
        <EarningChart />
      </div>

      <div>
        <RecentActivities />
      </div>
    </>
  )
}

export default DashboardPage
