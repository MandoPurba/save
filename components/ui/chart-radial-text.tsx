"use client"

import { TrendingUp } from "lucide-react"
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

export const description = "A radial chart with text"

// chartData will be built dynamically from percent
const makeChartData = (percent: number) => [
  { browser: "safari", visitors: percent, fill: "var(--color-safari)" },
]

// Build chart config dynamically so the color follows percent threshold
const makeChartConfig = (colorVar: string) => ({
  visitors: {
    label: "Progress",
  },
  safari: {
    label: "Budget",
    color: `var(${colorVar})`,
  },
}) satisfies ChartConfig

export function ChartRadialText({
  className,
  title = "Budget",
  percent = 80,
}: {
  className?: string
  title?: string
  percent?: number
}) {
  // Clamp percent to keep chart sane
  const pct = Number.isFinite(percent) ? Math.max(0, percent) : 0
  const colorVar = pct > 100 ? "--chart-5" : "--chart-2"
  const chartConfig = makeChartConfig(colorVar)
  const chartData = makeChartData(pct)
  return (
  <Card className={["flex flex-col", className].filter(Boolean).join(" ") }>
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {`${chartData[0].visitors.toLocaleString()}%`}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
