"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

const chartData = [
  { month: "January", oeufs: 122 },
  { month: "February", oeufs: 133 },
  { month: "March", oeufs: 126 },
  { month: "April", oeufs: 157 },
  { month: "May", oeufs: 165 },
  { month: "June", oeufs: 170 },
  { month: "Juillet", oeufs: 187 },
  { month: "Aout", oeufs: 176 },
  { month: "Septembre", oeufs: 179 },
  { month: "Octobre", oeufs: 165 },
  { month: "Novembre", oeufs: 148 },
  { month: "Décembre", oeufs: 134 },
];

const chartConfig = {
  desktop: {
    label: "Oeufs",
    color: "#f59e0b",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

// https://ui.shadcn.com/docs/components/chart
export function AnnualProductionBarData() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="oeufs" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
