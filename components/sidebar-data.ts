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
} from "@tabler/icons-react"

export const sidebarData = {
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

export type SidebarData = typeof sidebarData
