"use client"

import * as React from "react"
import {
  IconWallet,
  IconChartBar,
  IconDashboard,
  IconCreditCard,
  IconPigMoney,
  IconTrendingUp,
  IconTarget,
  IconCalendarMonth,
  IconHelp,
  IconCoins,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconReceipt,
  IconBuildingBank,
  Icon3dCubeSphere,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Roman",
    email: "roman@fiwise.com",
    avatar: "/avatars/user.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Transaksi",
      url: "/transactions",
      icon: IconListDetails,
    },
    {
      title: "Analitik",
      url: "/analytics",
      icon: IconChartBar,
    },
    {
      title: "Budget",
      url: "/budget",
      icon: IconTarget,
    },
    {
      title: "Investasi",
      url: "/investments",
      icon: IconTrendingUp,
    },
  ],
  navClouds: [
    {
      title: "Pengeluaran",
      icon: IconCreditCard,
      isActive: true,
      url: "/expenses",
      items: [
        {
          title: "Makanan & Minuman",
          url: "/expenses/food",
        },
        {
          title: "Transportasi",
          url: "/expenses/transport",
        },
        {
          title: "Belanja",
          url: "/expenses/shopping",
        },
        {
          title: "Hiburan",
          url: "/expenses/entertainment",
        },
      ],
    },
    {
      title: "Pemasukan",
      icon: IconCoins,
      url: "/income",
      items: [
        {
          title: "Gaji",
          url: "/income/salary",
        },
        {
          title: "Bonus",
          url: "/income/bonus",
        },
        {
          title: "Freelance",
          url: "/income/freelance",
        },
        {
          title: "Investasi",
          url: "/income/investment",
        },
      ],
    },
    {
      title: "Tabungan",
      icon: IconPigMoney,
      url: "/savings",
      items: [
        {
          title: "Dana Darurat",
          url: "/savings/emergency",
        },
        {
          title: "Target Tabungan",
          url: "/savings/goals",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Pengaturan",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Bantuan",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Cari",
      url: "/search",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Rekening Bank",
      url: "/accounts",
      icon: IconBuildingBank,
    },
    {
      name: "Laporan Keuangan",
      url: "/reports",
      icon: IconReport,
    },
    {
      name: "Riwayat Transaksi",
      url: "/history",
      icon: IconReceipt,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <Icon3dCubeSphere className="!size-5" />
                <span className="text-base font-semibold">Fin Wise</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
