"use client"

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
    { name: "Fri", value: 1456.3, color: "#8b5cf6" },
    { name: "Sat", value: 1348.3, color: "#06b6d4" },
    { name: "Sun", value: 1200.5, color: "#f97316" },
    { name: "Mon", value: 1208.8, color: "#10b981" },
    { name: "Tue", value: 980.2, color: "#3b82f6" },
    { name: "Wed", value: 1110.7, color: "#f59e0b" },
    { name: "Thu", value: 618.6, color: "#ef4444" },
]

const chartConfig = {
    value: {
        label: "Earnings",
    },
    Fri: {
        label: "Friday",
        color: "#8b5cf6",
    },
    Sat: {
        label: "Saturday",
        color: "#06b6d4",
    },
    Sun: {
        label: "Sunday",
        color: "#f97316",
    },
    Mon: {
        label: "Monday",
        color: "#10b981",
    },
    Tue: {
        label: "Tuesday",
        color: "#3b82f6",
    },
    Wed: {
        label: "Wednesday",
        color: "#f59e0b",
    },
    Thu: {
        label: "Thursday",
        color: "#ef4444",
    },
}

export default function Component() {
    const total = data.reduce((sum, item) => sum + item.value, 0)

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-semibold">Earnings Statistics</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-row items-center justify-center gap-8 ">
                    <div className="relative flex-1 min-h-[400px] w-[60%]">
                        <ChartContainer config={chartConfig} className="h-[400px] w-full">
                            <ResponsiveContainer>
                                <PieChart>
                                    <Pie
                                        data={data}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={160}
                                        paddingAngle={2}
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <ChartTooltip
                                        content={<ChartTooltipContent />}
                                        formatter={(value: number) => [`₹ ${value.toFixed(1)}`, "Earnings"]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-gray-900">{total.toFixed(1)}</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%]">
                        <div className="">
                            {data.map((item) => (
                                <div key={item.name} className="flex items-center gap-3 text-sm">
                                    <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                                    <span className="text-gray-600 ">{item.name}</span>
                                    <span className="font-medium text-gray-900 ">₹ {item.value.toFixed(1)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
