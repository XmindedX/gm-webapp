"use client"

import * as React from "react"
import {
  Gauge,
  ShoppingBasket,
  List,
  Receipt,
  ReceiptText,
} from "lucide-react"

import Image from "next/image"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

import { useSession } from "next-auth/react"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: Gauge,
  },
  {
    title: "Produk",
    url: "/produk",
    icon: ShoppingBasket,
  },
  {
    title: "Daftar Pesanan",
    url: "/daftar-pesanan",
    icon: List,
  },
  {
    title: "Invoice",
    url: "/invoice",
    icon: ReceiptText,
  },
  {
    title: "Receipt",
    url: "/receipt",
    icon: Receipt,
  },
]


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const username = useSession().data?.user?.name as string;
  const email = useSession().data?.user?.email as string;


  const data = {
    user: {
      name: username,
      email: email,
    },
  }
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center">
                  <Image
                    src="/logo-square.png"
                    alt="Grand Mortar"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="flex text-left leading-tight gap-1">
                  <span className="truncate font-bold text-2xl text-red-600">Grand</span>
                  <span className="truncate font-bold text-2xl text-blue-600">Mortar</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      
      <SidebarContent className="">
        <SidebarGroup>
          <SidebarGroupContent className="">
            <SidebarMenu className="flex gap-2 text-black">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild
                  size="md"
                  className="data-[active=true]:bg-sidebar-blue-500 data-[active=true]:text-sidebar-white"
                  >
                    <a href={item.url}>
                      <item.icon className="text-base" />
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
