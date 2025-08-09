"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IconMoon, IconSun } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export interface SiteHeaderProps {
  title: string
}

export function SiteHeader({ title }: SiteHeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  // Ensure the theme class is applied to <html> and persisted
  const applyTheme = (t: "light" | "dark") => {
    if (typeof document === "undefined") return
    const root = document.documentElement
    root.classList.toggle("dark", t === "dark")
  }

  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null
    const prefersDark = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    const initial: "light" | "dark" = stored ?? (prefersDark ? "dark" : "light")
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    try {
      localStorage.setItem("theme", next)
    } catch {}
    applyTheme(next)
  }

  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{title}</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <span className="text-sm text-muted-foreground">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </Button>

          {/* add toggle to dark and light modes */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {/* create icon sun for light and moon for dark */}
            <span className="hidden dark:inline">
              <IconSun className="h-4 w-4" />
            </span>
            <span className="inline dark:hidden">
              <IconMoon className="h-4 w-4" />
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
