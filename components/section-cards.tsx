import { IconTrendingDown, IconTrendingUp, IconWallet, IconCreditCard, IconPigMoney, IconCoins } from "@tabler/icons-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCurrency, formatPercentage } from "@/utils/format"

export interface SectionCardsProps {
  total_balance: {
    value: number
    change_pct: number
    label: string
    sub_label: string
  }
  expense_this_month: {
    value: number
    change_pct: number
    label: string
    sub_label: string
  }
  income_this_month: {
    value: number
    change_pct: number
    label: string
    sub_label: string
  }
  savings_goal: {
    value_pct: number
    change_pct: number
    label: string
    sub_label: string
  }
}


export function SectionCards({ total_balance, expense_this_month, income_this_month, savings_goal }: SectionCardsProps) {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconWallet className="h-4 w-4 text-muted-foreground" />
            <CardDescription>Total Balance</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(total_balance.value)}
          </CardTitle>
          <CardAction>
            <Badge 
              variant="outline"
              className={total_balance.change_pct < 0 ? "text-red-500" : "text-green-500"}
            >
              {total_balance.change_pct < 0 ? (
                <IconTrendingDown className="size-4" />
              ) : (
                <IconTrendingUp className="size-4" />
              )}
              {formatPercentage(total_balance.change_pct)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {total_balance.label} 
            {total_balance.change_pct < 0 ? (
                <IconTrendingDown className="size-4 text-red-500" />
            ) : (
                <IconTrendingUp className="size-4 text-green-500" />
            )}
          </div>
          <div className="text-muted-foreground">
            {total_balance.sub_label}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconCreditCard className="h-4 w-4 text-red-500" />
            <CardDescription>Expenses This Month</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(expense_this_month.value)} 
          </CardTitle>
          <CardAction>
            <Badge 
              variant="outline"
              className={expense_this_month.change_pct > 0 ? "text-red-500" : "text-green-500"}
            >
              {
                expense_this_month.change_pct > 0 ? (
                  <IconTrendingDown className="size-4 text-red-500" />
                ) : (
                  <IconTrendingUp className="size-4 text-green-500" />
                )
              }
              {formatPercentage(expense_this_month.change_pct)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {expense_this_month.label}
            {
              expense_this_month.change_pct > 0 ? (
                <IconTrendingDown className="h-4 w-4 text-red-500" />
              ) : (
                <IconTrendingUp className="h-4 w-4 text-green-500" />
              )
            }
          </div>
          <div className="text-muted-foreground">
            {expense_this_month.sub_label}
          </div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconCoins className="h-4 w-4 text-green-500" />
            <CardDescription>Income This Month</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formatCurrency(income_this_month.value)}
          </CardTitle>
          <CardAction>
            <Badge 
              variant="outline"
              className={income_this_month.change_pct > 0 ? "text-green-500" : "text-red-500"}
            >
              {income_this_month.change_pct > 0 ? (
                <IconTrendingUp className="size-4 text-green-500" />
              ) : (
                <IconTrendingDown className="size-4 text-red-500" />
              )}
              {formatPercentage(income_this_month.change_pct)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {income_this_month.label}
            {
              income_this_month.change_pct > 0 ? (
                <IconTrendingUp className="size-4 text-green-500" />
              ) : (
                <IconTrendingDown className="size-4 text-red-500" />
              )
            }
          </div>
          <div className="text-muted-foreground">{income_this_month.sub_label}</div>
        </CardFooter>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconPigMoney className="h-4 w-4 text-blue-500" />
            <CardDescription>Savings Goal</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            78%
          </CardTitle>
          <CardAction>
            <Badge 
              variant="outline"
              className={savings_goal.change_pct > 0 ? "text-green-500" : "text-red-500"}
            >
              {savings_goal.change_pct > 0 ? (
                <IconTrendingUp className="size-4 text-green-500" />
              ) : (
                <IconTrendingDown className="size-4 text-red-500" />
              )}
              {formatPercentage(savings_goal.change_pct)}
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {savings_goal.label}
            {savings_goal.change_pct > 0 ? (
              <IconTrendingUp className="size-4 text-green-500" />
            ) : (
              <IconTrendingDown className="size-4 text-red-500" />
            )}
          </div>
          <div className="text-muted-foreground">
            {savings_goal.sub_label}
          </div>
        </CardFooter>
      </Card>

    </div>
  )
}
