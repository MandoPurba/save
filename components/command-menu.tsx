"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { IconSearch, IconListDetails } from "@tabler/icons-react"
import { sidebarData } from "@/components/sidebar-data"

type CmdItem = { title: string; url: string; shortcut?: string; keywords?: string[]; icon?: React.ComponentType<any> }

const NAV_UTAMA: CmdItem[] = sidebarData.navMain.map((i) => ({ title: i.title, url: i.url, icon: i.icon }))
const KATEGORI: CmdItem[] = sidebarData.navClouds.map((i) => ({ title: i.title, url: i.url, icon: i.icon }))
const LAINNYA: CmdItem[] = sidebarData.navSecondary.map((i) => ({ title: i.title, url: i.url, icon: i.icon }))
const DOKUMEN: CmdItem[] = sidebarData.documents.map((i) => ({ title: i.name, url: i.url, icon: i.icon }))
const SUBKATEGORI: CmdItem[] = sidebarData.navClouds.flatMap((group) =>
  (group.items ?? []).map((sub) => ({ title: sub.title, url: sub.url, icon: IconListDetails }))
)

export function CommandMenu() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === "k" || e.key === "K")) {
        // Avoid when typing in inputs/textarea/contenteditable
        const target = e.target as HTMLElement | null
        const tag = target?.tagName?.toLowerCase()
        const isTyping =
          tag === "input" ||
          tag === "textarea" ||
          (target?.getAttribute("contenteditable") === "true")
        if (isTyping) return
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const onSelect = (url: string) => {
    setOpen(false)
    router.push(url)
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      title="Command Palette"
      description="Cari menu dan navigasi dengan cepat"
    >
      <CommandInput placeholder="Tekan ⌘K / Ctrl K lalu ketik untuk mencari..." />
      <CommandList>
        <CommandEmpty>Tidak ada hasil.</CommandEmpty>

        <CommandGroup heading="Navigasi Utama">
          {NAV_UTAMA.map((item) => (
            <CommandItem
              key={item.url}
              value={[item.title, item.url, ...(item.keywords ?? [])].join(" ")}
              onSelect={() => onSelect(item.url)}
            >
              {item.icon ? (
                <item.icon className="size-5 text-muted-foreground" />
              ) : (
                <IconSearch className="size-5 text-muted-foreground" />
              )}
              <span>{item.title}</span>
              {item.shortcut && (
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Kategori">
          {KATEGORI.map((item) => (
            <CommandItem
              key={item.url}
              value={[item.title, item.url, ...(item.keywords ?? [])].join(" ")}
              onSelect={() => onSelect(item.url)}
            >
              {item.icon ? (
                <item.icon className="size-5 text-muted-foreground" />
              ) : (
                <IconSearch className="size-5 text-muted-foreground" />
              )}
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Dokumen">
          {DOKUMEN.map((item) => (
            <CommandItem
              key={item.url}
              value={[item.title, item.url, ...(item.keywords ?? [])].join(" ")}
              onSelect={() => onSelect(item.url)}
            >
              {item.icon ? (
                <item.icon className="size-5 text-muted-foreground" />
              ) : (
                <IconSearch className="size-5 text-muted-foreground" />
              )}
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Lainnya">
          {LAINNYA.map((item) => (
            <CommandItem
              key={item.url}
              value={[item.title, item.url, ...(item.keywords ?? [])].join(" ")}
              onSelect={() => onSelect(item.url)}
            >
              {item.icon ? (
                <item.icon className="size-5 text-muted-foreground" />
              ) : (
                <IconSearch className="size-5 text-muted-foreground" />
              )}
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <CommandGroup heading="Sub-Kategori">
          {SUBKATEGORI.map((item) => (
            <CommandItem
              key={item.url}
              value={[item.title, item.url, ...(item.keywords ?? [])].join(" ")}
              onSelect={() => onSelect(item.url)}
            >
              {item.icon ? (
                <item.icon className="size-5 text-muted-foreground" />
              ) : (
                <IconSearch className="size-5 text-muted-foreground" />
              )}
              <span>{item.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}

export default CommandMenu
