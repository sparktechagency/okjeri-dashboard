import DynamicChartDemo from "@/components/ui/dynamic-chart-demo"
import EarningChart from "@/components/ui/earnings-chart"



const DashboardPage = () => {
  return (
    <div className="flex justify-between gap-6 mt-6">
    <DynamicChartDemo />
    <EarningChart />
    </div>
  )
}

export default DashboardPage
