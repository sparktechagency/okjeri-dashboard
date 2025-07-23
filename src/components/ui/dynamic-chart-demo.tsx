"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Sample data sets for demonstration
const weeklyData = [
  { day: "Sat", users: 95, providers: 28 },
  { day: "Sun", users: 18, providers: 65 },
  { day: "Mon", users: 68, providers: 22 },
  { day: "Tue", users: 68, providers: 48 },
  { day: "Wed", users: 22, providers: 95 },
  { day: "Thu", users: 78, providers: 35 },
  { day: "Fri", users: 28, providers: 62 },
]

const chartConfig = {
  users: {
    label: "Users",
    color: "hsl(var(--chart-1))",
  },
  providers: {
    label: "Providers",
    color: "hsl(var(--chart-2))",
  },
}

export default function WeeklyChart() {
  const totalUsers = weeklyData.reduce((sum, item) => sum + item.users, 0)
  const totalProviders = weeklyData.reduce((sum, item) => sum + item.providers, 0)

  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">User Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
            <AreaChart
              accessibilityLayer
              data={weeklyData}
              margin={{
                left: 20,
                right: 20,
                top: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                className="text-sm text-gray-600"
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                className="text-sm text-gray-600"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <defs>
                <linearGradient id="fillUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-users)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-users)" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="fillProviders" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-providers)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="var(--color-providers)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <Area
                dataKey="providers"
                type="monotone"
                fill="url(#fillProviders)"
                fillOpacity={0.6}
                stroke="var(--color-providers)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-providers)",
                  strokeWidth: 2,
                  r: 4,
                }}
              />
              <Area
                dataKey="users"
                type="monotone"
                fill="url(#fillUsers)"
                fillOpacity={0.6}
                stroke="var(--color-users)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-users)",
                  strokeWidth: 2,
                  r: 4,
                }}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}