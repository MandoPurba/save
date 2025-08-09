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

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconWallet className="h-4 w-4 text-muted-foreground" />
            <CardDescription>Saldo Total</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 15.750.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +8.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Naik dari bulan lalu <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Peningkatan saldo dalam 30 hari terakhir
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconCreditCard className="h-4 w-4 text-red-500" />
            <CardDescription>Pengeluaran Bulan Ini</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 3.450.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -15%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Turun 15% dari target <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Pengeluaran terkontrol dengan baik
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconCoins className="h-4 w-4 text-green-500" />
            <CardDescription>Pemasukan Bulan Ini</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Rp 8.500.000
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +5.2%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Pemasukan stabil <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Gaji dan bonus diterima</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <div className="flex items-center gap-2">
            <IconPigMoney className="h-4 w-4 text-blue-500" />
            <CardDescription>Target Tabungan</CardDescription>
          </div>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            78%
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Mendekati target tahun ini <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Target Rp 50 juta tercapai 78%</div>
        </CardFooter>
      </Card>
    </div>
  )
}
