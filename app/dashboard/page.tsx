import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import financialData from "./financial-data.json"


// temporary for slicing develop data
function generateRandomChartData(startDate: string, endDate: string) {
  const data = []
  let current = new Date(startDate)
  const end = new Date(endDate)
  while (current <= end) {
    // Random income: 100k - 10M
    const income = Math.floor(Math.random() * (10000000 - 100000) + 100000)
    // Random expenses: 90k - 5M
    const expenses = Math.floor(Math.random() * (5000000 - 90000) + 90000)
    data.push({
      date: current.toISOString().slice(0, 10),
      income,
      expenses,
    })
    current.setDate(current.getDate() + 1)
  }
  return data
}

const chartData = generateRandomChartData("2024-05-01", "2024-08-30")

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader
          title="Financial dashboard"
        />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards
                total_balance={{
                  value: 25000000,
                  change_pct: 8.5,
                  label: "Growth from last month",
                  sub_label: "30-day balance gain"
                }}
                expense_this_month={{
                  value: 3450000,
                  change_pct: -15,
                  label: "Down 15% from target",
                  sub_label: "Expenses are well controlled"
                }}
                income_this_month={{
                  value: 8500000,
                  change_pct: +5.2,
                  label: "Stable income",
                  sub_label: "Salary and bonus received"
                }}
                savings_goal={{
                  value_pct: 78,
                  change_pct: +12,
                  label: "Approaching this year's target",
                  sub_label: "78% of the Rp 50 million goal achieved"
                }}
              />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive
                  data={chartData}
                />
              </div>
              <DataTable data={financialData} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
